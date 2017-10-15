import React from 'react'
import PropTypes from 'prop-types'
import GestureRecognizer from 'react-native-swipe-gestures';

import ButtonWithImageBackground from './ui/ButtonWithImageBackground'

const TodoItem = ({ text, completed, imageSource, onClick, onSwipe }) => {
  let prefix = completed ? '+' : '-'

  return (
    <GestureRecognizer
        onSwipeRight={onSwipe}>
      <ButtonWithImageBackground onClick={onClick} backgroundSource={imageSource} shouldBlur={completed}>
        {`${prefix} ${text}`}
      </ButtonWithImageBackground>
    </GestureRecognizer>
  )
}

TodoItem.propTypes = {
  onClick: PropTypes.func.isRequired,
  onSwipe: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
  imageSource: PropTypes.any.isRequired
}

export default TodoItem
