import React, { Component } from 'react'
import Form from 'react-native-form'
import { View, TextInput, Button } from 'react-native'
import { connect } from 'react-redux'

import { addTodo } from '../actions'

class AddTodoItem extends Component {
  constructor ({dispatch}) {
    super()
    this.dispatch = dispatch
    this.state = {todoItemValue: ''}
  }

  render () {
    return (
      <View>
        <Form>
          <TextInput
            value={this.state.todoItemValue}
            placeholder={'Type "Go shopping"'}
            onChangeText={(todoItemValue) => this.setState({todoItemValue})} />
          <Button
            title='Add TODO'
            onPress={() => { this.onSubmit() }} />
        </Form>
      </View>
    )
  }

  onSubmit () {
    const text = this.state.todoItemValue.trim()

    if (!text) {
      return
    }

    this.dispatch(addTodo(text))
    this.setState({
      todoItemValue: ''
    })
  }
}

const ConnectedAddTodoItem = connect()(AddTodoItem)

export default ConnectedAddTodoItem
