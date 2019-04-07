import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { connect } from 'react-redux'
import HeaderMainView from '../Header/HeaderMainView'
import {Drawer } from 'native-base';
import DrawerMenuMainView from './DrawerMenu/DrawerMenuMainView'
export class MainPageView extends Component {
 
  render() {
    return (
      <Drawer  content={<DrawerMenuMainView/>} acceptTap={true}   tapToClose={true}  >
          <HeaderMainView/>
        <Text> main </Text>
      </Drawer>
    )
  }
}

const mapStateToProps = (state) => ({
    ShowMenu: state.Weather.ShowMenu

  
})



export default connect(mapStateToProps)(MainPageView)
