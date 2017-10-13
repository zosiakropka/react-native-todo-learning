import React, { Component } from 'react'
import { View } from 'react-native'
import { connect } from 'react-redux'

import { addTodo } from '../actions'
import BasicButton from '../components/ui/button/BasicButton'
import Input from '../components/ui/input/Input'

class AddTodoItem extends Component {
  constructor ({dispatch}) {
    super()
    this.dispatch = dispatch
    this.state = {todoItemValue: ''}
  }

  render () {
    return (
      <View style={{padding: 20}}>
        <Input
          style={{marginBottom: 20}}
          value={this.state.todoItemValue}
          placeholder={'Type "Go shopping"'}
          onChangeText={(todoItemValue) => this.setState({todoItemValue})} />
        <BasicButton
          onPress={() => { this.onSubmit() }}
          type={'NEUTRAL'}>
          Add a TODO
        </BasicButton>
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
