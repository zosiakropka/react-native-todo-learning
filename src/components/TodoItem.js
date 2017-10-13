import React from 'react'
import PropTypes from 'prop-types'

import ButtonWithImageBackground from './ui/ButtonWithImageBackground'

const TodoItem = ({ text, completed, imageSource, onClick }) => {
  let prefix = completed ? 'COMPLETED' : 'NOT COMPLETED'

  return (
    <ButtonWithImageBackground onClick={onClick} backgroundSource={imageSource}>
      {`${prefix} ${text}`}
    </ButtonWithImageBackground>
  )
}

TodoItem.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
  imageSource: PropTypes.any.isRequired
}

export default TodoItem
