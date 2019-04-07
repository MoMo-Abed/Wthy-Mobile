import React, { Component } from 'react'
import { View, Text } from 'react-native'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Icon from 'react-native-vector-icons/FontAwesome';
import { Actions } from 'react-native-router-flux';

export class DrawerMenuMainView extends Component {
  static propTypes = {
    prop: PropTypes
  }

  render() {
    return (
      <View style={{backgroundColor:'white',height:'100%'}} >

        <View style={{backgroundColor:'blue',height:'20%'}} >
            <Text>Logo</Text>
        </View>

        <View   style={{flexDirection:'row',justifyContent:'space-between',borderBottomWidth:2,borderBottomColor:'gray',}} >
            <Text style={{fontSize:20,fontWeight:'900'}} >Locations</Text>
            <Icon onPress={()=>console.log('add city clicked')} name='edit' style={{marginTop:5,paddingBottom:5}} size={25} />
            </View  >


            <View style={{marginTop:60,height:'15%',justifyContent:'space-between'}} >
            <Text onPress={()=>Actions.PrivacyPolicyView()} style={{fontSize:20,fontWeight:'900'}} >Privacy Policy</Text>
            <Text onPress={()=>console.log('Help clicked')} style={{fontSize:20,fontWeight:'900'}} >Help</Text>
            <Text onPress={()=>console.log('Setting clicked')} style={{fontSize:20,fontWeight:'900'}} >Settings</Text>

                
            </View>

        


</View>
    )
  }
}





const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(DrawerMenuMainView)
