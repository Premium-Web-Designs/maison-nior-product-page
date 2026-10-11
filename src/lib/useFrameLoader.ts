import { useEffect, useRef, useState } from "react";
import { FRAME_SRCS } from "./frames";

export type FrameLoad = {
  images: HTMLImageElement[];
  progress: number;
  ready: boolean;
};

const CONCURRENCY = 12;

/** Eagerly loads and decodes every frame before the experience begins. */
export function useFrameLoader(): FrameLoad {
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const [progress, setProgress] = useState(0);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    let cancelled = false;
    const total = FRAME_SRCS.length;
    const images: HTMLImageElement[] = new Array(total);
    imagesRef.current = images;
    let loaded = 0;
    let cursor = 0;

    const loadOne = (index: number) =>
      new Promise<void>((resolve) => {
        const img = new Image();
        img.decoding = "async";
        img.onload = () => resolve();
        img.onerror = () => resolve();
        img.src = FRAME_SRCS[index] as string;
        images[index] = img;
      });

    const worker = async (): Promise<void> => {
      while (!cancelled && cursor < total) {
        const index = cursor++;
        await loadOne(index);
        loaded++;
        if (loaded % 3 === 0 || loaded === total) {
          setProgress(loaded / total);
        }
      }
    };

    void Promise.all(Array.from({ length: CONCURRENCY }, worker)).then(() => {
      if (cancelled) return;
      setProgress(1);
      setReady(true);
    });

    return () => {
      cancelled = true;
    };
  }, []);

  return { images: imagesRef.current, progress, ready };
}
