import React, { Component } from 'react'
import { Animated, PanResponder } from 'react-native'

const VELOCITY_TRESHOLD = 0.4

export default class DismissableItem extends Component {
  constructor (props) {
    super(props)
    this.state = {
      translateXAnimated: new Animated.Value(0),
      opacityAnimated: new Animated.Value(0)
    }

    this._panResponder = PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onStartShouldSetPanResponderCapture: (evt, gestureState) => true,
      onPanResponderMove: Animated.event([null, {
        dx: this.state.translateXAnimated
      }]),

      onPanResponderRelease: (evt, gestureState) => {
        this.onDismissReleased({vx: gestureState.vx})
      }
    })
  }

  onDismissReleased ({vx}) {
    if (vx < VELOCITY_TRESHOLD) {
      this.dismissWillBeCancelled()
      return
    }

    this.performDismiss()
  }

  dismissWillBeCancelled () {
    Animated.spring(
      this.state.translateXAnimated,
      {toValue: 0}
    ).start()
  }

  performDismiss () {
    Animated.spring(
      this.state.translateXAnimated,
      {toValue: this.state.width}
    ).start(() => { this.itemWasDismissed() })
  }

  itemWasDismissed () {
    const {onDismiss} = this.props
    onDismiss && onDismiss()
  }

  componentWidthIsKnown (width) {
    this.setState({
      width: width,
      opacityAnimated: this.state.translateXAnimated.interpolate({
        inputRange: [0, width],
        outputRange: [1, 0]
      })
    })
  }

  render () {
    return (
      <Animated.View
        onLayout={(event) => this.componentWidthIsKnown(event.nativeEvent.layout.width)}
        style={{
          transform: [
              {translateX: this.state.translateXAnimated}
          ],
          opacity: this.state.opacityAnimated
        }}
        {...this._panResponder.panHandlers}>
        {this.props.children}
      </Animated.View>
    )
  }
}
