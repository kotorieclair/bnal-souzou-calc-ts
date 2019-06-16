import * as Color from 'color'
import * as font from './font.css'

export const withAlpha = (color: string, alpha: number) => {
  return Color(color)
    .alpha(alpha)
    .string()
}

interface SizeAdjuster {
  readonly add?: number
  readonly mult?: number
}

export const getFontSize = (adj: SizeAdjuster = {}) => {
  const baseSize = font.baseFontSize.replace(font.baseFontSizeUnit, '')
  return `${baseSize * (adj.mult || 1) + (adj.add || 0)}${
    font.baseFontSizeUnit
  }`
}
