import React from 'react'
import { View, Text } from 'react-native'

import FilterLink from '../containers/FilterLink'

const Footer = () => (
  <View>
    <Text>Show:</Text>
    <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between'}}>
      <FilterLink
        style={{alignSelf: 'stretch', alignItems: 'center'}}
        filter={'SHOW_ALL'}>
          ALL
        </FilterLink>
      <FilterLink
        style={{alignSelf: 'stretch', alignItems: 'center'}}
        filter={'SHOW_ACTIVE'}>
          ACTIVE
        </FilterLink>
      <FilterLink
        style={{alignSelf: 'stretch', alignItems: 'center'}}
        filter={'SHOW_COMPLETED'}>
          COMPLETED
        </FilterLink>
    </View>
  </View>
)

export default Footer
