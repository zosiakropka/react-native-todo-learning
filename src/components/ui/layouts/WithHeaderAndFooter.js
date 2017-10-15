import React from 'react'
import { View, ScrollView } from 'react-native'

const WithHeaderAndFooter = ({children, header, footer}) => (
  <View style={{flexDirection: 'column', justifyContent: 'flex-end', flex: 1}}>
    <View style={{flex: 0.1}}>{header}</View>
    <ScrollView style={{flex: 1}}>{children}</ScrollView>
    <View style={{height: 40, backgroundColor: 'red'}}>{footer}</View>
  </View>
)

export default WithHeaderAndFooter
