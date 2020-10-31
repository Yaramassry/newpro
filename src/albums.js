import React, { Component } from "react";
import Nav from './nav';
import './footer.css';
import Album from "./Album";
import {connect} from 'react-redux';


//import axios from 'axios';

class albums extends React.Component{
  // constructor(){
  //   super();
    // this.state = {
    //   albums: []
    // }
  // }

  // componentDidMount() {
  //   axios.get(`https://jsonplaceholder.typicode.com/photos`)
  //     .then(res => {
  //       const photos = res.data;
  //       this.setState({ albums: photos });
  //     })
  // }


  

render(){
  return(

<div>

<div className="container">


 <div className="row">


       {this.state.albums.map(album => (
          <Album key={album.id} url={album.url} thumbnailUrl={album.thumbnailUrl} title={album.title} />
          ))}

        </div>




        </div>
</div>
  )

}


}
const mapStateToProps = (state) => {
  return { album: state.album}
}
const mapDispatchtoprops =(dispatch) => {
  return {
    true: ()=> dispatch({type:'TRUE'}),
 
  }

}
export default connect (mapStateToProps , mapDispatchtoprops)(albums);
