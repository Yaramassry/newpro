import React, { Component } from "react";
import Movie from './Movie';
import Nav from './nav';
import './footer.css';
import Album from "./Album";

import axios from 'axios';

class home extends React.Component{
  constructor(){
    super();
    this.state={
        visible: true,
     movies:[
        {
            img : require('./photo/dump.jpg'),
            name: 'Dump & Dumper',
            price: '10$',
            id: 231243,
            
           
        },
        {   img : require('./photo/ted.jpg'),
            name: 'Ted',
            price: '10$',
            id: 231224
         
           
        },
        {img : require('./photo/plusOne.jpg'),
            name: 'Plus One',
            price: '10$',
            id: 233124
            
           
        },
        { img : require('./photo/dad.jpg'),
          name:'MyDad',
          price:'34$',
          id:235245
         
      },
         {img : require('./photo/harry.jpg'),
        name: 'Harry Potter',
        price: '10$',
        id: 23124
        
       
    },
    {img :require('./photo/game.jpg'),
        name:'Game of thrones',
        price:'20$',
        id:2566124
        
    },
    
    {img :require('./photo/titanic.jpg'),
        name:'Titanic',
        price:'25$',
        id:23520
        
    },
   {img : require('./photo/merage.jpg'),
        name:'Merage',
        price:'20$',
        id:23529
        
    },
    { img : require('./photo/lacasa.jpg'),
        name:'Lacaca',
        price:'35$',
        id:235251
       
    },
  
    {img : require('./photo/inception.jpg'),
        name:'Inception',
        price:'20$',
        id:23524
        
    }],
    s:'', 
    
    }}

    
  



  
updateSearch(event){
    this.setState({s : event.target.value})
   }
  
  
toggle(){ this.setState({visible:false}); }


render(){
  let filterdMov= this.state.movies.filter(

    (movie)=>{ return movie.name.toLowerCase().indexOf(this.state.s.toLowerCase())!== -1 })



    return(
        
<div className="footer-home">
<input  type="text" id="t" name="text" placeholder="Search by name" value={this.state.s}
            onChange={this.updateSearch.bind(this)} /> 


 <div className="container">


   <div class="row">
 
       
         {filterdMov.map(movie => (
            <div class="col-lg-3 col-md-4 col-sm-6 col-12"> 
          < Movie 
           name={movie.name}
            price={movie.price} 
            img={movie.img}
            key={movie.id} />  
        
      
           </div>
            ))} 
            
          </div> 
         



          </div>
 </div>
    )
}
}
export default home;



// class home extends React.Component{
//       constructor(){
//         super();
//         this.state={
//             albums: []
//         }}

        
//   componentDidMount() {
//     axios.get(`https://jsonplaceholder.typicode.com/photos`)
//       .then(res => {
//         const photos = res.data;
//         this.setState({ albums: photos });
//       })
//   }
  
// render(){
//     return(
  
//   <div className="footer-home">
  
//   <div className="container">
  
  
//    <div className="row">
  
  
//          {this.state.albums.map(album => (
//             <Album key={album.id} url={album.url} thumbnailUrl={album.thumbnailUrl} title={album.title} />
//             ))}
  
//           </div>
  
  
  
  
//           </div>
//   </div>
//     )
//   }
    
    // }
    //     export default home;