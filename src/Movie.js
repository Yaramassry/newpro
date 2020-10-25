import React from 'react';
import Toolbar from './Toolbar.css';


const Movie = props => {
 return(
   
    <div > 
         <a href="props.img"><img className="img" src={props.img}  /></a>
       <h3>{props.name}</h3>
       <p>{props.price} </p>
       <br/> <br/> <br/>
     
    </div>
   
);

};

export default Movie;