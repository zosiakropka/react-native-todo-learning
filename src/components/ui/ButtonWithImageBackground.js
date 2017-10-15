import React, { PropTypes, Component } from 'react'
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
    color: 'white',
    textShadowColor: 'black',
    textShadowRadius: 10,
    textShadowOffset: {
      width: 0,
      height: 0
    }
  },
  withPadding: {
    padding: 20
  }
}

export default class ButtonWithImageBackground extends Component {
  getBlurRadius () {
    return this.props.shouldBlur
      ? 20
      : 0
  }

  render () {
    const {backgroundSource, onClick, children} = this.props

    return (
      <TouchableOpacity onPress={onClick} style={styles.button}>
        <Image
          resizeMode={'cover'}
          source={backgroundSource}
          style={FLEX_1_STYLE}
          alignSelf={'stretch'}
          width={undefined}
          height={undefined}
          blurRadius={this.getBlurRadius()} />
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
  }
}

ButtonWithImageBackground.propTypes = {
  backgroundSource: PropTypes.any.isRequired,
  onClick: PropTypes.func.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.string.isRequired,
    PropTypes.arrayOf(PropTypes.string.isRequired).isRequired])
}
