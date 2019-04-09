import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { connect } from 'react-redux'
import {Header, Left, Body, Right,Drawer,Tabs,Tab,ScrollableTab,Container } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Actions } from 'react-native-router-flux';
import DrawerMenuMainView from './DrawerMenuMainView'
import TodayMainView from './TodayPage/TodayMainView'
export class MainPageView extends Component {

  state={
    MenuOpen: false

  }

  RenderCityName(){
    if (this.props.weather){
      return(
<Body>

          
      <Text style={{fontSize:15,color:'white'}} >{this.props.weather[0].city.name}</Text>
      <Text style={{color:'white',fontSize:10}} >{this.props.weather[0].city.country}</Text>
      </Body>
)
    }else{return null}
  }

 
  render() {
    return (
      
      <Drawer  content={<DrawerMenuMainView/>} open={this.state.MenuOpen}     tapToClose={true}  >

      <Container>

        <Header hasTabs style={{backgroundColor:'#333333'}} androidStatusBarColor="#333333"  >



          <Left>
            <Icon color='white' onPress={()=>this.setState({
              MenuOpen: true })}   size={20} name='bars' />
          </Left>



          {this.RenderCityName()}


          <Right>
          <Icon color='white' onPress={()=>Actions.SearchPage()} style={{marginRight:10}} size={20} name='search' />
          <Icon color='white' onPress={()=>console.log('map clicked')} style={{marginRight:10}} size={20} name='map' />
          <Icon color='white' onPress={()=>console.log('share clicked')}  size={20} name='share-alt' />
          


          </Right>
         
        </Header>



        <Tabs tabContainerStyle={{backgroundColor:'#333333'}} renderTabBar={()=> <ScrollableTab />}>


          <Tab  tabStyle={{backgroundColor: '#333333'}} activeTabStyle={{backgroundColor:'#333333'}} heading="TODAY">
          <TodayMainView/>
          </Tab>
          <Tab tabStyle={{backgroundColor: '#333333'}} activeTabStyle={{backgroundColor:'#333333'}}  heading="FORECAST">
          </Tab>
          <Tab tabStyle={{backgroundColor: '#333333'}} activeTabStyle={{backgroundColor:'#333333'}}  heading="RADAR">
          </Tab>
          <Tab tabStyle={{backgroundColor: '#333333'}} activeTabStyle={{backgroundColor:'#333333'}}  heading={"SUN & MOON"}>
          </Tab>


        </Tabs>


        
      </Container>
         
      </Drawer>
    )
  }
}

const mapStateToProps = (state) => ({
  weather: state.Auth.weather

  
})



export default connect(mapStateToProps)(MainPageView)
