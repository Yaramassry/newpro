import React, { Component } from "react";
import Nav from './nav';
import './footer.css';

import axios from 'axios';

class album extends React.Component{
  constructor(){
    super();
    this.state = {
      albums: []
    }
  }

  componentDidMount() {
    axios.get(`https://jsonplaceholder.typicode.com/photos`)
      .then(res => {
        const photos = res.data;
        this.setState({ albums: photos });
      })
  }

render(){
  return(

<div className="footer-home">

<div className="container">


 <div className="row">


       {this.state.albums.map(album => (
          <div key={album.id} className="col-lg-3 col-md-4 col-sm-6 col-12">
          <div  >
               <a href={album.url}><img className="img" src={album.thumbnailUrl}  /></a>
             <h3>{album.title}</h3>
             <br/> <br/> <br/>
          </div>


         </div>
          ))}

        </div>




        </div>
</div>
  )
}


}

export default album;
