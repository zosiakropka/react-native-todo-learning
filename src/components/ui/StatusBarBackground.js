import React from 'react'
import { View } from 'react-native'
import StatusBarSizeIOS from 'react-native-status-bar-size'

const StatusBarBackground = () => (
  <View height={StatusBarSizeIOS.currentHeight} />
)

export default StatusBarBackground
