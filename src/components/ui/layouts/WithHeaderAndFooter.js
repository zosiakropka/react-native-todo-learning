import StatusBarBackground from './../../ui/StatusBarBackground'
import React from 'react'
import { View, ScrollView } from 'react-native'

import { FLEX_1_STYLE } from 'styles/generic'

const WithHeaderAndFooter = ({children, header, footer}) => (
  <View style={FLEX_1_STYLE}>
    <StatusBarBackground />
    <View style={{flexDirection: 'column', justifyContent: 'space-between', flex: 1}}>
      {
        header
        ? <View style={{height: 40}}>{header}</View>
          : null
      }

      <ScrollView style={{flex: 1}}>{children}</ScrollView>
      <View style={{height: 40, backgroundColor: 'red'}}>{footer}</View>
    </View>
  </View>
)

export default WithHeaderAndFooter
