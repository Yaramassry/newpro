import {createStore} from 'redux';
import axios from 'axios';


const initialState = {
    albums: []
}

const reducers = (state = initialState , action) => {
    switch (action.type) {
        case 'getAlbums' :
            return {
                albums: action.payload
            }
        default : return state ;
    }
}
export default createStore (reducers , initialState);