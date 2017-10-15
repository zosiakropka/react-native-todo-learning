import React from 'react'
import PropTypes from 'prop-types'

import ButtonWithImageBackground from './ui/ButtonWithImageBackground'
import DissmissableItem from './ui/lists/DissmissableItem'

const TodoItem = ({ text, completed, imageSource, onClick, onDismiss }) => {
  let prefix = completed ? '+' : '-'

  return (
    <DissmissableItem onDismiss={onDismiss}>
      <ButtonWithImageBackground
        onClick={onClick}
        backgroundSource={imageSource}
        shouldBlur={completed}>
        {`${prefix} ${text}`}
      </ButtonWithImageBackground>
    </DissmissableItem>
  )
}

TodoItem.propTypes = {
  onClick: PropTypes.func.isRequired,
  onDismiss: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
  imageSource: PropTypes.any.isRequired
}

export default TodoItem
