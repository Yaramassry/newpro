import {createStore} from 'redux';
import axios from 'axios';


const initialState = {
    albums: []
}

const reducers = (state , action) => {
    switch (action.type) {
        case 'true' : return (
            axios.get(`https://jsonplaceholder.typicode.com/photos`)
        .then(res => {
          const photos = res.data;
          this.setState({ albums: photos });
        }))
     
        default : return state ;
    }
}
export default createStore (reducers , initialState);