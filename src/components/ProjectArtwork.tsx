export function ProjectArtwork({ theme }: { theme: string }) {
  return (
    <svg className={`project-artwork artwork-${theme}`} viewBox="0 0 600 400" fill="none" aria-hidden="true">
      {theme === 'festival' && <>
        <g className="artwork-spin" style={{ transformOrigin: '400px 200px' }}>
          {Array.from({ length: 32 }, (_, i) => <path key={i} d="M400 65V20" stroke="currentColor" strokeWidth={i % 4 === 0 ? 8 : 2} transform={`rotate(${i * 11.25} 400 200)`} />)}
        </g>
        <circle cx="400" cy="200" r="105" stroke="currentColor" strokeWidth="2" />
        <circle cx="400" cy="200" r="75" stroke="currentColor" strokeDasharray="2 9" />
        <path d="m367 145 90 55-90 55z" fill="currentColor" />
        <path className="artwork-trace" d="M0 340Q90 260 180 340T360 340T540 340T720 340" stroke="currentColor" strokeWidth="2" strokeDasharray="8 8" />
        <circle cx="520" cy="55" r="5" fill="currentColor" />
      </>}
      {theme === 'creator' && <>
        <g className="artwork-drift">
          <rect x="275" y="55" width="245" height="260" rx="3" fill="#f4f1ea" transform="rotate(9 397 185)" />
          <rect x="250" y="75" width="245" height="260" rx="3" fill="#e6e2d6" stroke="currentColor" strokeWidth="2" transform="rotate(-7 372 205)" />
          <g transform="rotate(-7 372 205)" stroke="#283d6b" strokeWidth="4">
            <path d="M277 110H365M277 135H464M277 152H442M277 169H457M277 228H464M277 245H420M277 262H449M277 297H381" />
            <path className="artwork-edit" d="M271 169H465" stroke="#e65a2d" strokeWidth="13" opacity=".65" />
            <path d="M277 195H425" stroke="#e65a2d" />
          </g>
        </g>
        <circle cx="500" cy="285" r="43" fill="#e65a2d" />
        <path d="m491 267 25 18-25 18z" fill="#f4f1ea" />
      </>}
      {theme === 'community' && <>
        <path className="artwork-trace" d="M355 190 250 85 500 65 480 300 355 190 255 330 160 235 250 85M355 190 500 65M160 235 480 300" stroke="currentColor" strokeWidth="1.5" strokeDasharray="5 7" />
        {[[250, 85], [500, 65], [480, 300], [255, 330], [160, 235]].map(([x, y], i) => <g key={i}>
          <circle cx={x} cy={y} r={i % 2 ? 27 : 35} fill="#d9dfbd" stroke="currentColor" strokeWidth="1.5" />
          <circle cx={x} cy={y - 5} r="7" fill="currentColor" />
          <path d={`M${x - 12} ${y + 13}q12 -18 24 0`} stroke="currentColor" strokeWidth="3" />
        </g>)}
        <circle className="artwork-pulse" cx="355" cy="190" r="60" stroke="currentColor" strokeWidth="1" />
        <circle cx="355" cy="190" r="39" fill="currentColor" />
        <path d="m338 191 11 11 24-25" stroke="#edf0dc" strokeWidth="4" />
      </>}
      {theme === 'global' && <>
        <g transform="translate(390 200) rotate(-18)">
          <circle r="153" stroke="currentColor" strokeWidth="2" />
          <ellipse rx="68" ry="153" stroke="currentColor" />
          <ellipse rx="124" ry="153" stroke="currentColor" />
          <ellipse rx="153" ry="57" stroke="currentColor" />
          <ellipse rx="153" ry="113" stroke="currentColor" />
          <path d="M-153 0H153M0 -153V153" stroke="currentColor" />
          <ellipse className="artwork-trace" rx="180" ry="74" stroke="#c55232" strokeWidth="3" strokeDasharray="7 8" transform="rotate(-28)" />
          <circle cx="94" cy="-80" r="8" fill="#c55232" />
          <circle cx="-68" cy="38" r="6" fill="#c55232" />
          <circle className="artwork-pulse" cx="94" cy="-80" r="21" stroke="#c55232" />
        </g>
        <path d="M185 65h30m-15-15v30M525 333h30m-15-15v30" stroke="currentColor" />
      </>}
    </svg>
  );
}
