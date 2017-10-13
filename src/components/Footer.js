import React from 'react'
import { View } from 'react-native'
import TabsContainer from '../components/ui/tab/TabsContainer'

import FilterTab from '../containers/FilterTab'

const Footer = () => (
  <View>
    <TabsContainer>
      <FilterTab filter={'SHOW_ALL'}>ALL</FilterTab>
      <FilterTab filter={'SHOW_ACTIVE'}>ACTIVE</FilterTab>
      <FilterTab filter={'SHOW_COMPLETED'}>COMPLETED</FilterTab>
    </TabsContainer>
  </View>
)

export default Footer
