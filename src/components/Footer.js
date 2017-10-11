import React from 'react'
import { View, Text } from 'react-native'
import TabsContainer from '../components/ui/tab/TabsContainer'

import {TABS_CONTAINER_STYLE, TAB_STYLE} from '../styles/tabs'

import FilterTab from '../containers/FilterTab'

const Footer = () => (
  <View>
    <Text>Show:</Text>
    <TabsContainer style={TABS_CONTAINER_STYLE}>
      <FilterTab filter={'SHOW_ALL'} style={TAB_STYLE}>
        ALL
      </FilterTab>
      <FilterTab filter={'SHOW_ACTIVE'} style={TAB_STYLE}>
        ACTIVE
      </FilterTab>
      <FilterTab filter={'SHOW_COMPLETED'} style={TAB_STYLE}>
        COMPLETED
      </FilterTab>
    </TabsContainer>
  </View>
)

export default Footer
