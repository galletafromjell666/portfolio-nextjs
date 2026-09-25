"use client";
import { useEffect, useRef } from "react";

const CELL_PX = 20; // cell size in px
const FADE_MS = 500; // how long a lit cell takes to fade out (trail length)

/**
 * Inverting pixel cursor + trailing effect (decorative, whole site).
 *
 * How it works:
 * - The overlay is a full-viewport grid of fixed-size cells blended with
 *   `mix-blend-mode: difference`. A cell at opacity 1 (white) inverts whatever
 *   is behind it; at opacity 0 it leaves the page untouched.
 * - Cells start invisible, so the page renders normally until you move.
 * - pointermove maps the pointer to a grid cell and lights it. Since lit cells
 *   fade out, the recently-lit cells make the trail and the newest one is the
 *   cursor itself.
 * - No canvas and no per-cell listeners: one listener, and a cell is only
 *   touched when the pointer crosses into it.
 */

/** A single grid cell: white, but invisible until lit. */
const createCell = (): HTMLDivElement => {
  const cell = document.createElement("div");
  cell.style.backgroundColor = "white";
  cell.style.opacity = "0";
  return cell;
};

/** Pointer position -> [column, row] on the fixed CELL_PX grid. */
const getCellCoords = (x: number, y: number): [number, number] => [
  Math.floor(x / CELL_PX),
  Math.floor(y / CELL_PX),
];

/**
 * Build the whole grid off-document. Returns the fragment to insert plus the
 * flat cells array; the screen is 2-D but the DOM list is 1-D, so a cell is
 * indexed as `row * cols + col`.
 */
const createGrid = (cols: number, rows: number) => {
  const cells: HTMLDivElement[] = [];
  const frag = document.createDocumentFragment();
  for (let i = 0; i < cols * rows; i++) {
    const cell = createCell();
    frag.appendChild(cell);
    cells.push(cell);
  }
  return { cells, frag };
};

/** Light a cell: snap to full opacity, then fade to nothing. */
const lightCell = (cell: HTMLElement) => {
  cell.animate([{ opacity: 1 }, { opacity: 0 }], {
    duration: FADE_MS,
    easing: "ease-out",
  });
};

export default function PixelTrail() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = ref.current;
    if (!root) return;
    // Purely decorative motion, so opt out on reduced-motion and touch.
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (window.matchMedia("(pointer: coarse)").matches) return;

    let cells: HTMLElement[] = [];
    let cols = 0;
    let last = -1;

    // (Re)build the grid that covers the viewport.
    const build = () => {
      cols = Math.ceil(window.innerWidth / CELL_PX);
      const rows = Math.ceil(window.innerHeight / CELL_PX);
      root.style.gridTemplateColumns = `repeat(${cols}, ${CELL_PX}px)`;
      root.style.gridAutoRows = `${CELL_PX}px`;
      const grid = createGrid(cols, rows);
      cells = grid.cells;
      root.replaceChildren(grid.frag); // drop the old grid, install the new one in one shot
      last = -1;
    };

    // How a pointer position becomes a lit cell:
    //
    //   pointer (clientX, clientY)
    //        │  getCellCoords(x, y)
    //        ▼
    //   (col, row)            ← 2-D: where on screen
    //        │  i = row * cols + col
    //        ▼
    //   i                     ← 1-D: which slot in cells
    //        │  cells[i]
    //        ▼
    //   <div>                 ← the cell we light
    //
    //   cols = 4, rows = 3:
    //
    //         col:    0     1     2     3
    //              ┌─────┬─────┬─────┬─────┐
    //     row 0    │  0  │  1  │  2  │  3  │
    //              ├─────┼─────┼─────┼─────┤
    //     row 1    │  4  │  5  │  6  │  7  │
    //              ├─────┼─────┼─────┼─────┤
    //     row 2    │  8  │  9  │ 10  │ 11  │
    //              └─────┴─────┴─────┴─────┘
    //
    //   cells = [ 0  1  2  3  4  5  6  7  8  9 10 11 ]
    //            └─ row 0 ─┘└─ row 1 ─┘└─ row 2 ─┘
    //
    // One listener for the whole grid: turn the pointer into a cell index.
    const onMove = (e: PointerEvent) => {
      if (e.pointerType === "touch") return;
      const [col, row] = getCellCoords(e.clientX, e.clientY);
      if (col < 0 || row < 0 || col >= cols) return;
      const i = row * cols + col; // flatten 2-D -> 1-D (see diagram above)
      // Skip while still in the same cell, so a slow drag doesn't retrigger it.
      if (i === last || !cells[i]) return;
      last = i;
      lightCell(cells[i]);
    };

    // Effect-scoped on purpose: only this cleanup consumes it, so no ref needed.
    const ac = new AbortController();
    build();
    window.addEventListener("pointermove", onMove, { signal: ac.signal });
    window.addEventListener("resize", build, { signal: ac.signal });

    return () => {
      ac.abort();
      root.replaceChildren();
    };
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden
      className="pointer-events-none fixed inset-0 z-[9999] grid overflow-hidden"
      style={{ mixBlendMode: "difference" }}
    />
  );
}
