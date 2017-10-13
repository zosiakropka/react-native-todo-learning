import React from 'react'
import { Text, TouchableHighlight } from 'react-native'
import PropTypes from 'prop-types'

import {TAB_STYLE} from '../../../styles/tabs'

const Link = ({children, active, onClick, style}) => {
  if (active) {
    return (<Text>{children}</Text>)
  }

  return (
    <TouchableHighlight onPress={() => onClick()} style={TAB_STYLE}>
      <Text>
        {children}
      </Text>
    </TouchableHighlight>
  )
}

Link.propTypes = {
  children: PropTypes.node.isRequired,
  active: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired
}

export default Link
