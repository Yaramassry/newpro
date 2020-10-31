import React, { Component } from "react";
import Nav from './nav';
import './footer.css';
import Album from "./Album";

import axios from 'axios';

class albums extends React.Component{
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
          <Album key={album.id} url={album.url} thumbnailUrl={album.thumbnailUrl} title={album.title} />
          ))}

        </div>




        </div>
</div>
  )
}


}

export default albums;
//https://www.youtube.com/watch?v=xOYhFstJMUU&list=PL1FWK-sgJ9emg4u0GSQMhY5AFVjd9MHim&index=3