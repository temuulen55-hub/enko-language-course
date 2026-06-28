export default function EnkoLogo({ size = 36, light = false }) {
  const stroke = light ? '#ffffff' : '#0f172a'
  const text = light ? '#ffffff' : '#0f172a'
  const bg = light ? 'rgba(255,255,255,0.08)' : 'white'
  const fontSize = size * 0.42
  const mid = size / 2
  const labelSize = size * 0.19

  return (
    <svg
      width={size * 1.65}
      height={size * 1.42}
      viewBox={`0 0 ${size * 1.65} ${size * 1.42}`}
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Enko Language Center logo"
    >
      {/* Outer rounded rect */}
      <rect
        x="1"
        y="1"
        width={size * 1.65 - 2}
        height={size - 2}
        rx={size * 0.14}
        fill={bg}
        stroke={stroke}
        strokeWidth={size * 0.045}
      />
      {/* Centre divider */}
      <line
        x1={mid * 1.65 * 0.5 + size * 0.825 * 0.5}
        y1="1"
        x2={mid * 1.65 * 0.5 + size * 0.825 * 0.5}
        y2={size - 1}
        stroke={stroke}
        strokeWidth={size * 0.045}
      />
      {/* A */}
      <text
        x={size * 0.415}
        y={size * 0.68}
        textAnchor="middle"
        fontFamily="system-ui,-apple-system,sans-serif"
        fontSize={fontSize}
        fontWeight="600"
        fill={text}
      >
        A
      </text>
      {/* 大 */}
      <text
        x={size * 1.235}
        y={size * 0.70}
        textAnchor="middle"
        fontFamily="Georgia,serif"
        fontSize={fontSize * 0.95}
        fontWeight="400"
        fill={text}
      >
        大
      </text>
      {/* ENKO label */}
      <text
        x={size * 0.825}
        y={size * 1.30}
        textAnchor="middle"
        fontFamily="system-ui,-apple-system,sans-serif"
        fontSize={labelSize}
        fontWeight="600"
        letterSpacing={labelSize * 0.55}
        fill={text}
      >
        ENKO
      </text>
    </svg>
  )
}
