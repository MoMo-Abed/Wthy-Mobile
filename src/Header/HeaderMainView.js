import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { connect } from 'react-redux'
import Icon from 'react-native-vector-icons/FontAwesome';
import {Header, Left, Body, Right } from 'native-base';

export class HeaderMainView extends Component {
 

  render() {
    return (
      <View>
        <Header style={{backgroundColor:'#333333'}} androidStatusBarColor="#333333"  >
          <Left>
            <Icon color='white' onPress={()=>console.log('menu clicked')}    size={20} name='bars' />
          </Left>
          <Body>
          <Text style={{fontSize:15,color:'white'}} >Cairo</Text>
          <Text style={{color:'white',fontSize:10}} >EG</Text>
          </Body>

          <Right>
          <Icon color='white' onPress={()=>console.log('search clicked')} style={{marginRight:10}} size={20} name='search' />
          <Icon color='white' onPress={()=>console.log('map clicked')} style={{marginRight:10}} size={20} name='map' />
          <Icon color='white' onPress={()=>console.log('share clicked')}  size={20} name='share-alt' />
          


          </Right>
        </Header>
      </View>
    )
  }
}

const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderMainView)
