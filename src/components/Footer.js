import React from 'react'
import { View, Text } from 'react-native'

import FilterLink from '../containers/FilterLink'

const Footer = () => (
  <View>
    <Text>Show:</Text>
    <FilterLink filter={'SHOW_ALL'}>ALL</FilterLink>
    <FilterLink filter={'SHOW_ACTIVE'}>ACTIVE</FilterLink>
    <FilterLink filter={'SHOW_COMPLETED'}>COMPLETED</FilterLink>
  </View>
)

export default Footer
