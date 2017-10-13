import React, { PropTypes } from 'react'
import { TouchableOpacity, Image, View, Text } from 'react-native'

import { FLEX_1_STYLE, ABSOLUTE_VIEW_STYLE } from '../../styles/generic'

const styles = {
  absoluteView: {
    ...ABSOLUTE_VIEW_STYLE,
    alignItems: 'center',
    justifyContent: 'center'
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 100
  },
  text: {
    color: 'white'
  },
  withPadding: {
    padding: 20
  }
}

const ButtonWithImageBackground = ({backgroundSource, onClick, children}) => (
  <TouchableOpacity onPress={onClick} style={styles.button}>
    <Image
      resizeMode={'cover'}
      source={backgroundSource}
      style={FLEX_1_STYLE}
      alignSelf={'stretch'}
      width={undefined}
      height={undefined} />
    <View style={{...styles.absoluteView, ...styles.withPadding}}>
      <Text
        textShadowRadius={4}
        numberOfLines={2}
        style={styles.text}>
        {children}
      </Text>
    </View>
  </TouchableOpacity>
)

ButtonWithImageBackground.propTypes = {
  backgroundSource: PropTypes.any.isRequired,
  onClick: PropTypes.func.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.string.isRequired,
    PropTypes.arrayOf(PropTypes.string.isRequired).isRequired])
}

export default ButtonWithImageBackground
