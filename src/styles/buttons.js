import COLOR_PALETTE from './colorPalette'
import { PADDING, BORDER_RADIUS } from './constants'

const BUTTON_STYLE = {
  padding: PADDING,
  borderRadius: BORDER_RADIUS
}

export const BUTTON_STYLES = {
  NEUTRAL: {
    ...BUTTON_STYLE,
    backgroundColor: COLOR_PALETTE.BLUE
  }
}

export const BUTTON_TEXT_STYLES = {
  DEFAULT: {
    color: COLOR_PALETTE.WHITE
  }
}

export const BUTTON_TYPES = Object.keys(BUTTON_STYLES)
