import React from 'react'
import { Text, Button } from 'react-native'
import PropTypes from 'prop-types'

const Link = ({children, active, onClick}) => {
  if (active) {
    return (<Text>{children}</Text>)
  }

  return (
    <Button onPress={() => onClick()} title={children} />
  )
}

Link.propTypes = {
  children: PropTypes.node.isRequired,
  active: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired
}

export default Link
