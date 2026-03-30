/**
 * BlueprintGraphic
 *
 * Abstract architectural / CAD wireframe SVG.
 * Pure geometry — no images, no external assets.
 * Transparent background so it blends with the stone-50 hero.
 *
 * Layers (back → front):
 *  1. Fine background grid        — stone-200, 0.4 px
 *  2. Structural frame + walls    — stone-300, 0.75–1 px
 *  3. Structural column circles   — stone-300, 0.75 px
 *  4. Dimension / annotation lines — stone-300, 0.5 px
 *  5. Small cross markers         — stone-300, 0.5 px
 *  6. Amber accent elements       — --color-brand, 1.5 px
 */
export function BlueprintGraphic({ className }: { className?: string }) {
  /* ── palette ─────────────────────────────────────────────────────── */
  const grid   = "#e7e5e4"; // stone-200
  const struct = "#d6d3d1"; // stone-300
  const accent = "var(--color-brand)";

  /* ── grid geometry ───────────────────────────────────────────────── */
  const W    = 460;  // +40 right  (left edge unchanged)
  const yTop = -60;  // +60 upward (bottom edge unchanged)
  const yBot = 480;
  const step = 30;

  // Vertical lines: x = 0, 30, …, 450  (covers full extended width)
  const vLines = Array.from({ length: Math.floor(W / step) + 1 }, (_, i) => i * step);
  // Horizontal lines: y = -60, -30, 0, …, 480  (covers full extended height)
  const hLineCount = Math.round((yBot - yTop) / step) + 1;
  const hLines = Array.from({ length: hLineCount }, (_, i) => yTop + i * step);

  /* ── structure coordinates ───────────────────────────────────────── */
  // Outer frame
  const fx = 30, fy = 30, fw = 360, fh = 420;

  // Internal walls
  const hWall1 = 180; // first horizontal wall
  const hWall2 = 330; // second horizontal wall
  const vWall1 = 180; // left vertical wall
  const vWall2 = 300; // right vertical wall (only spans lower section)

  // Column circles at all structural intersections
  const columns: [number, number][] = [
    [fx,      fy],      [vWall1, fy],      [fx + fw, fy],
    [fx,      hWall1],  [vWall1, hWall1],  [vWall2, hWall1], [fx + fw, hWall1],
    [fx,      hWall2],  [vWall1, hWall2],  [vWall2, hWall2], [fx + fw, hWall2],
    [fx,      fy + fh], [vWall1, fy + fh], [vWall2, fy + fh],[fx + fw, fy + fh],
  ];

  // Small cross markers — decorative; placed at room centres
  const crosses: [number, number][] = [
    [105, 105],  // top-left room centre
    [285,  105], // top-right room centre
    [105,  255], // mid-left room centre
    [240,  255], // mid-centre room centre
    [345,  255], // mid-right room centre
    [105,  390], // bot-left room centre
    [240,  390], // bot-centre room centre
    [345,  390], // bot-right room centre
  ];
  const arm = 8; // half-length of cross arms

  /* ── dimension line helpers ─────────────────────────────────────── */
  const tick = 6; // half-height of end ticks

  return (
    <svg
      viewBox={`0 ${yTop} ${W} ${yBot - yTop}`}
      width="100%"
      height="100%"
      fill="none"
      aria-hidden="true"
      className={className}
      style={{ display: "block" }}
    >

      {/* ── 1. Background grid ──────────────────────────────────────── */}
      <g stroke={grid} strokeWidth={0.4}>
        {vLines.map((x) => (
          <line key={`v${x}`} x1={x} y1={yTop} x2={x} y2={yBot} />
        ))}
        {hLines.map((y) => (
          <line key={`h${y}`} x1={0} y1={y} x2={W} y2={y} />
        ))}
      </g>

      {/* ── 2. Structural frame + internal walls ────────────────────── */}
      <g stroke={struct} strokeWidth={0.75}>
        {/* Outer boundary */}
        <rect x={fx} y={fy} width={fw} height={fh} />

        {/* Full-width horizontal walls */}
        <line x1={fx} y1={hWall1} x2={fx + fw} y2={hWall1} />
        <line x1={fx} y1={hWall2} x2={fx + fw} y2={hWall2} />

        {/* Full-height left vertical wall */}
        <line x1={vWall1} y1={fy} x2={vWall1} y2={fy + fh} />

        {/* Partial right vertical wall — lower two rows only */}
        <line x1={vWall2} y1={hWall1} x2={vWall2} y2={fy + fh} />
      </g>

      {/* ── 3. Structural column circles ────────────────────────────── */}
      <g stroke={struct} strokeWidth={0.75} fill="none">
        {columns.map(([cx, cy]) => (
          <circle key={`col-${cx}-${cy}`} cx={cx} cy={cy} r={4} />
        ))}
      </g>

      {/* ── 4. Dimension / annotation lines ─────────────────────────── */}
      <g stroke={struct} strokeWidth={0.5}>
        {/* Top outer dimension */}
        <line x1={fx} y1={14} x2={fx + fw} y2={14} />
        <line x1={fx}      y1={14 - tick} x2={fx}      y2={14 + tick} />
        <line x1={fx + fw} y1={14 - tick} x2={fx + fw} y2={14 + tick} />
        {/* Top sub-dimension (left room width) */}
        <line x1={fx}      y1={6} x2={vWall1} y2={6} />
        <line x1={fx}      y1={2} x2={fx}      y2={10} />
        <line x1={vWall1}  y1={2} x2={vWall1}  y2={10} />

        {/* Left outer dimension */}
        <line x1={10} y1={fy} x2={10} y2={fy + fh} />
        <line x1={4}  y1={fy}       x2={16} y2={fy} />
        <line x1={4}  y1={fy + fh}  x2={16} y2={fy + fh} />
        {/* Left sub-dimension (top room height) */}
        <line x1={18} y1={fy}     x2={18} y2={hWall1} />
        <line x1={14} y1={fy}     x2={22} y2={fy} />
        <line x1={14} y1={hWall1} x2={22} y2={hWall1} />
      </g>

      {/* ── 5. Cross markers (room centres) ─────────────────────────── */}
      <g stroke={struct} strokeWidth={0.5}>
        {crosses.map(([cx, cy]) => (
          <g key={`x-${cx}-${cy}`}>
            <line x1={cx - arm} y1={cy} x2={cx + arm} y2={cy} />
            <line x1={cx} y1={cy - arm} x2={cx} y2={cy + arm} />
          </g>
        ))}
      </g>

      {/* ── 6. Amber accent elements ─────────────────────────────────── */}

      {/* Highlighted top-right room outline */}
      <rect
        x={vWall1} y={fy}
        width={fx + fw - vWall1}
        height={hWall1 - fy}
        stroke={accent} strokeWidth={1.5}
      />

      {/* Workflow L-path: flows from top-right room down then right */}
      <polyline
        points={`${vWall1},${hWall1} ${vWall1},${hWall2} ${vWall2},${hWall2}`}
        stroke={accent} strokeWidth={1.5} strokeDasharray="6 4"
        strokeLinecap="round" strokeLinejoin="round"
      />

      {/* Accent column circles at workflow nodes */}
      <circle cx={vWall1} cy={hWall1} r={5} stroke={accent} strokeWidth={1.5} fill="none" />
      <circle cx={vWall1} cy={hWall2} r={5} stroke={accent} strokeWidth={1.5} fill="none" />
      <circle cx={vWall2} cy={hWall2} r={5} stroke={accent} strokeWidth={1.5} fill="none" />

      {/* Accent filled dot at top-right room top-left corner (key node) */}
      <circle cx={vWall1} cy={fy} r={3.5} fill={accent} />

    </svg>
  );
}
