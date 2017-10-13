import React from 'react'
import {TextInput} from 'react-native'

import { INPUT_STYLE } from 'styles/inputs'

const Input = ({value, placeholder, onChangeText, style}) => (
  <TextInput
    value={value}
    placeholder={placeholder}
    onChangeText={onChangeText}
    style={{...INPUT_STYLE, ...style}} />
)

export default Input
