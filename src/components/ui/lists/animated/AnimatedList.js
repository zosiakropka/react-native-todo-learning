import React from 'react'
import { FlatList } from 'react-native'
import AnimatedListRow from './AnimatedListRow'

const wrapWithRow = (children) => (
  <AnimatedListRow>
    {children}
  </AnimatedListRow>
)

const AnimatedList = ({data, renderItem}) => (
  <FlatList
    data={data}
    renderItem={({item}) => (wrapWithRow(renderItem({item})))} />
)

export default AnimatedList
