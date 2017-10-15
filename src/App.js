import React, { Component } from 'react'
import { View } from 'react-native'
import { Provider } from 'react-redux'
import reduxStore from './reduxStore'

import WithHeaderAndFooter from './components/ui/layouts/WithHeaderAndFooter'
import Footer from './components/Footer'
import VisibleTodoList from './containers/VisibleTodoList'
import AddTodoItem from './containers/AddTodoItem'
import { SCREEN_STYLE } from './styles/screen'

export default class App extends Component {
  render () {
    return (
      <Provider store={reduxStore}>
        <View style={SCREEN_STYLE}>
          <WithHeaderAndFooter
            footer={<Footer />}>
            <AddTodoItem />
            <VisibleTodoList />
          </WithHeaderAndFooter>
        </View>
      </Provider>
    )
  }
}
