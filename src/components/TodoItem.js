import React from 'react'
import { View, Image, TouchableOpacity, Text } from 'react-native'
import PropTypes from 'prop-types'

const styles = {
  absoluteView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    backgroundColor: 'transparent'
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 100
  },
  text: {
    color: 'white'
  },
  withPadding: {
    padding: 20
  }
}

const TodoItem = ({ text, completed, imageSource, onClick }) => {
  let prefix = completed ? 'COMPLETED' : 'NOT COMPLETED'

  return (
    <TouchableOpacity onPress={onClick} style={styles.button}>
      <Image
        resizeMode={'cover'}
        source={imageSource}
        style={{flex: 1}}
        alignSelf={'stretch'}
        width={undefined}
        height={undefined}/>
      <View style={{...styles.absoluteView, ...styles.withPadding}}>
        <Text
          textShadowRadius={4}
          numberOfLines={2}
          style={styles.text}>
          {`${prefix} ${text}`}
        </Text>
      </View>
    </TouchableOpacity>
  )
}

TodoItem.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
  imageSource: PropTypes.any.isRequired
}

export default TodoItem
