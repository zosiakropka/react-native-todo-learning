import React, { Component } from 'react'
import {Animated} from 'react-native'

const ANIMATION_INITIAL_VALUE = 0
const ANIMATION_ADDED_VALUE = 1
const ANIMATION_DURATION_MS = 250

const getStylesForAnimation = (animation) => ([
  {
    opacity: animation,
    transform: [{
      scaleY: animation
    }]
  }
])

export default class AnimatedListRow extends Component {
  animation = new Animated.Value(ANIMATION_INITIAL_VALUE)

  componentDidMount () {
    Animated.timing(this.animation, {
      toValue: ANIMATION_ADDED_VALUE,
      duration: ANIMATION_DURATION_MS
    }).start()
  }

  render () {
    return (
      <Animated.View style={getStylesForAnimation(this.animation)}>
        {this.props.children}
      </Animated.View>
    )
  }
}
