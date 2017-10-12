import React from 'react'
import {TextInput} from 'react-native'

import { INPUT_STYLE } from '../../../styles/inputs'

const Input = ({value, placeholder, onChangeText}) => (
  <TextInput
    value={value}
    placeholder={placeholder}
    onChangeText={onChangeText}
    style={INPUT_STYLE} />
)

export default Input
