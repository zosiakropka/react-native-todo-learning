import React, { Component } from 'react'
import { View } from 'react-native'
import { Provider } from 'react-redux'
import reduxStore from './reduxStore'

import StatusBarBackground from './components/StatusBarBackground'
import Footer from './components/Footer'
import VisibleTodoList from './containers/VisibleTodoList'
import AddTodoItem from './containers/AddTodoItem'

export default class App extends Component {
  render () {
    return (
      <Provider store={reduxStore}>
        <View>
          <StatusBarBackground />
          <AddTodoItem />
          <VisibleTodoList />
          <Footer />
        </View>
      </Provider>
    )
  }
}
