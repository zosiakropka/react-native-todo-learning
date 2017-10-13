import React, { PropTypes } from 'react'
import { Text, TouchableHighlight } from 'react-native'

import { BUTTON_TYPES, BUTTON_STYLES, BUTTON_TEXT_STYLES } from '../../../styles/buttons'

const BasicButton = ({children, onPress, type, style}) => (
  <TouchableHighlight
    onPress={onPress}
    style={{...BUTTON_STYLES[type], ...style}}>
    <Text style={BUTTON_TEXT_STYLES.DEFAULT}>
      {children}
    </Text>
  </TouchableHighlight>
)

BasicButton.propTypes = {
  type: PropTypes.oneOf(BUTTON_TYPES),
  onPress: PropTypes.func.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.string.isRequired,
    PropTypes.arrayOf(PropTypes.string.isRequired).isRequired])
}

export default BasicButton
