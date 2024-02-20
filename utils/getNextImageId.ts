export default function (
  currentValue: number,
  offset: number,
  maxValue: number,
  minValue = 1
): number {
  return (
    ((currentValue - minValue + (offset % maxValue) + maxValue) % maxValue) +
    minValue
  )
}
