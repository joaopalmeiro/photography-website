// https://dev.to/timothee/using-modulo-to-shift-a-value-and-keep-it-inside-a-range-8fm
// https://nuxt.com/docs/guide/directory-structure/composables

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
