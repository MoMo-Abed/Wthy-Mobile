import { SIGNUPUSER,LOGIN_USER,REST_PASSWORD_FAIL
    ,REST_PASSWORD_SUCC,LOGIN_USER_FAIL
    ,LOGIN_USER_SUCCESS,SIGNUPUSER_FAIL
    ,SIGNUPUSER_SUCCESS,REST_PASSWORD,
    GET_WEATHER,
    SIGN_OUT,SIGNUPLOGINSUCC,
UPDATE_PROFILE,FETCH_PROFILE,GET_WEATHER_BY_ID
   } from './types'



   import firebase from 'react-native-firebase';
import { Actions } from 'react-native-router-flux';
import axios from 'axios';



/** for login user */

export function UserLogin({loginemail, loginpassword}) {
    return function (dispatch){
        dispatch ({type : LOGIN_USER});
        firebase.auth().signInWithEmailAndPassword(loginemail, loginpassword)
        .then(user => loginUserSuccess(dispatch, user))
        .catch(()=>loginUserFail(dispatch))
       }}

       
       const loginUserFail = (dispatch) => {
        dispatch({ type: LOGIN_USER_FAIL });
      };
      
      const loginUserSuccess = (dispatch, user) => {
        dispatch({
          type: LOGIN_USER_SUCCESS,
          payload: user
        });
      
       Actions.mainApp();
      };    
      
      
/** FOR SIGNOUT USER */

export function SignOut() {
  return function (dispatch){
      dispatch ({type : SIGN_OUT});
      firebase.auth().signOut()
      .then(() => Actions.auth())
      .catch((err)=>console.log(err))
     }}


    

        /** for signup user */

    export function UserSignUp({SignUpEmail, SignUpPassword}) {
            return function (dispatch){
                dispatch ({type : SIGNUPUSER});
                firebase.auth().createUserWithEmailAndPassword(SignUpEmail, SignUpPassword)
                .then(user => {
                  firebase.auth().signInWithEmailAndPassword(SignUpEmail, SignUpPassword)
                  .then(user => SignUploginUserSuccess(dispatch, user))
                 

                 })
                .catch(()=>SignUpUserFail(dispatch))
               }}
        
          
       const SignUpUserFail = (dispatch) => {
        dispatch({ type: SIGNUPUSER_FAIL });
      };
      
      const SignUploginUserSuccess = (dispatch, user) => {
        dispatch({
          type: SIGNUPLOGINSUCC,
          payload: user
        });
      
        Actions.UpdateProfile(); 
      };      

            
      /** rest password */

      export function RestPassword({RestEmail}) {
        return function (dispatch){
            dispatch ({type : REST_PASSWORD});
            firebase.auth().sendPasswordResetEmail(RestEmail)
            .then(user => RestSucc(dispatch, user))
            .catch(()=>RestFail(dispatch))
           }}



           const RestFail = (dispatch) => {
            dispatch({ type: REST_PASSWORD_FAIL });
          };
          
          const RestSucc = (dispatch, user) => {
            dispatch({
              type: REST_PASSWORD_SUCC,
              payload: user
            });
          
            Actions.login(); 
          };      

          /** FOR PROFILE */


export function ProfileUpdate({image,username,fullname,uid}) {

  const { currentUser } = firebase.auth();


  return () => {


    firebase.database().ref(`/users/${currentUser.uid}/profile/${uid}`)
  .push({image,username,fullname})
  Actions.mainApp(); 

  }

}

export function ProfileUpdatenew({image,username,fullname,uid}) {

  const { currentUser } = firebase.auth();


  return () => {


    firebase.database().ref(`/users/${currentUser.uid}/profile/${uid}`)
  .push({image,username,fullname})

  }


}
 
    



export const FetchProfile = () => {
  const { currentUser } = firebase.auth();

  return (dispatch) => {

    firebase.database().ref(`/users/${currentUser.uid}/profile`)
    .on('value', snapshot =>{
      dispatch ({
        type: FETCH_PROFILE,
        payload: snapshot.val()
      })
    })}}










    

 /** get weather by name */


const API_KEY = 'f827cf65d703d03250289556685302e4';


    export function getweather  ({city,country}){
             
              
          
      const res =  axios.get (`http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID=${API_KEY}&q=${city},${country}&units=metric&cnt=5`).then(res=>{
        const data = res.data;
        
        return data;
    })    
              return({
                     type: GET_WEATHER,
                     payload: res
                 })
          }


          export function getweatherByID(id){
   
    

            const res =  axios.get (`http://api.openweathermap.org/data/2.5/forecast/?id=${id}&APPID=${API_KEY}&units=metric`).then(res=>{
                const data = res.data;
                
                return data;
            })
            
               
            return({
                   type: GET_WEATHER_BY_ID,
                   payload: res
               })
        }