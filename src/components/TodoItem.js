import React from 'react'
import { Button, View } from 'react-native'
import PropTypes from 'prop-types'

const TodoItem = ({ text, completed, imageSource, onClick }) => {
  let prefix = completed ? 'COMPLETED' : 'NOT COMPLETED'

  return (
    <View onClick={onClick}>
      <Button title={`${prefix} ${text}`} onPress={onClick} />
    </View>
  )
}

TodoItem.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
  imageSource: PropTypes.any.isRequired
}

export default TodoItem
