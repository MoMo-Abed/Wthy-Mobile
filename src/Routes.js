import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { Scene, Router,Stack } from 'react-native-router-flux';
import MainPageView from './MainPage/MainPageView';
import PrivacyPolicyMainView from './DrawerPages/Privacy Policy/PrivacyPolicyMainView'
import HelpPageMainView from './DrawerPages/HelpPage/HelpPageMainView'
export class Routes extends Component {
  render() {
    return (
      <Router>
          <Stack>
<Scene  hideNavBar key="MainPageView" >
<Scene hideNavBar key='MainPageView' component={MainPageView}  />
<Scene hideNavBar key='PrivacyPolicyView' initial component={PrivacyPolicyMainView}  />
<Scene hideNavBar key='HelpPageView' initial component={HelpPageMainView}  />

</Scene>
          </Stack>
      </Router>
    )
  }
}

export default Routes
