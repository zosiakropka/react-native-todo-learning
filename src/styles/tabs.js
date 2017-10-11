import COLOR_PALETTE from './colorPalette'

export const TABS_CONTAINER_STYLE = {
  flex: 1,
  flexDirection: 'row',
  justifyContent: 'space-between'}

export const TAB_STYLE = {
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
  height: 40,
  backgroundColor: COLOR_PALETTE.WHITE,
  borderBottomWidth: 5,
  borderBottomColor: '#d6d7da'}

export const TAB_SELECTED_STYLE = {
  ...TAB_STYLE,
  backgroundColor: 'red'
}
