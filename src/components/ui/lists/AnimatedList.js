import React, { Component } from 'react'
import { LayoutAnimation, FlatList } from 'react-native'

var CustomLayoutSpring = {
  duration: 150,
  create: {
    type: LayoutAnimation.Types.spring,
    property: LayoutAnimation.Properties.opacity,
    springDamping: 0.5
  },
  update: {
    type: LayoutAnimation.Types.spring,
    springDamping: 0.5
  }
}

export default class AnimatedList extends Component {
  componentWillReceiveProps () {
    LayoutAnimation.configureNext(CustomLayoutSpring)
  }

  render () {
    return (
      <FlatList
        data={this.props.data}
        renderItem={({item}) => (this.props.renderItem({item}))} />
    )
  }
}
