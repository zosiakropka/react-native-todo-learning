import React, { Component } from 'react'
import { Animated, PanResponder } from 'react-native'

const VELOCITY_TRESHOLD = 0.2

export default class DismissableItem extends Component {
  constructor (props) {
    super(props)
    this.state = {
      translateXAnimated: new Animated.Value(0),
      opacityAnimated: new Animated.Value(1)
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
      this.cancelDismiss()
      return
    }

    this.performDismiss()
  }

  cancelDismiss () {
    Animated.spring(
      this.state.translateXAnimated,
      {toValue: 0}
    ).start()
  }

  performDismiss () {
    Animated.parallel([
      Animated.spring(
        this.state.translateXAnimated,
        {toValue: this.state.width}
      ),
      Animated.spring(
        this.state.opacityAnimated,
        {toValue: 0}
      )
    ]).start(() => { this.onDismiss() })
  }

  onDismiss () {
    const {onDismiss} = this.props
    onDismiss && onDismiss()
  }

  onLayout (event) {
    const width = event.nativeEvent.layout.width
    this.setState({
      width: width
    })
  }

  render () {
    return (
      <Animated.View
        onLayout={(event) => this.onLayout(event)}
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
