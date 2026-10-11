export const FRAME_COUNT = 596;

export const framePath = (index: number) =>
  `/frames/f_${String(index + 1).padStart(4, "0")}.webp`;

export const FRAME_SRCS = Array.from({ length: FRAME_COUNT }, (_, i) => framePath(i));

/** Stills pulled from the sequence for the editorial storytelling sections. */
export const STILLS = {
  fullFront: framePath(60),
  smokeRise: framePath(160),
  opening: framePath(250),
  folded: framePath(330),
  collarMacro: framePath(420),
  tipping: framePath(505),
  crest: framePath(575),
  closing: framePath(592),
};

export type Overlay = {
  id: string;
  /** scroll progress window [enter, exit] within the pinned sequence */
  range: [number, number];
  align: "left" | "right";
  vertical: "top" | "center" | "bottom";
  eyebrow?: string;
  title: string;
  body?: string;
};

/**
 * Positions chosen against the composition of each scene:
 * the garment holds the centre column, so copy lives in the
 * lit negative space to either side.
 */
export const OVERLAYS: Overlay[] = [
  {
    id: "opening",
    range: [0.0, 0.14],
    align: "left",
    vertical: "center",
    eyebrow: "Maison Noir — Chapter I",
    title: "The Noir\nPiqué",
    body: "A single garment, suspended in light.",
  },
  {
    id: "cotton",
    range: [0.17, 0.31],
    align: "right",
    vertical: "bottom",
    eyebrow: "Matière",
    title: "Long-staple\ncotton",
    body: "Spun in Biella, knitted to a dense piqué that holds its own weight.",
  },
  {
    id: "tipping",
    range: [0.34, 0.48],
    align: "left",
    vertical: "top",
    eyebrow: "Détail",
    title: "Twin\ntipping",
    body: "Two ivory lines, laid by hand along collar and cuff.",
  },
  {
    id: "folded",
    range: [0.52, 0.65],
    align: "right",
    vertical: "center",
    eyebrow: "Atelier",
    title: "Folded,\nnot pressed",
    body: "Each piece rests in tissue for forty-eight hours before it leaves us.",
  },
  {
    id: "collar",
    range: [0.68, 0.81],
    align: "left",
    vertical: "bottom",
    eyebrow: "Structure",
    title: "A collar\nthat stands",
    body: "Three-ply interlining. It will outlive the season.",
  },
  {
    id: "crest",
    range: [0.85, 0.99],
    align: "right",
    vertical: "top",
    eyebrow: "Signature",
    title: "The crest",
    body: "Struck in tonal thread. Never printed.",
  },
];
