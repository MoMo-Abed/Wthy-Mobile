import {GET_WEATHER} from '../Actions/wthyActions';


const initialState = {
    weather: [],
};



export default function(state=initialState,action){
    
    switch (action.type){
        case GET_WEATHER:
            return {
                
                weather: [action.payload,...state.weather]

            }

        default:
        return state
        
        
        
        
        
        
        
        
        
        }}