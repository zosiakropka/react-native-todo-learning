import React from 'react'
import { View } from 'react-native'
import { TABS_CONTAINER_STYLE } from '../../../styles/tabs'

const TabsContainer = ({children}) => (
  <View style={TABS_CONTAINER_STYLE}>
    {children}
  </View>
)

export default TabsContainer
