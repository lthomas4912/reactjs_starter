import React, { Component } from 'react'

import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';

import avatar from './img/avatar.png';
import avatar2 from './img/avatar2.png';
import avatar3 from './img/avatar3.png';
import avatar4 from './img/avatar4.png';

import './Avatar.css';

export default class Avatar extends Component{
    render(){
        return(
            <div>
           <h1> <center><b>Choose Your Avatar</b></center></h1>
            <button><Image src={avatar} alt="Avatar" class="avatar" height="150px" width= "150px" ></Image></button>
            <button><Image src={avatar2} alt="Avatar1" class="avatar1" height="150px" width= "150px" ></Image></button> 
            <button><Image src={avatar3} alt="Avatar2" class="avatar2"  height="150px" width= "150px"></Image></button> 
            <button><Image src={avatar4} alt="Avatar3" class="avatar3"  height="150px" width= "150px"></Image></button>
            {/* <Image src={Avatar4Icon} alt="Avatar4" class="avatar4" height="150px" width= "200px"></Image>  
            <Image src={Avatar5Icon} alt="Avatar5" class="avatar5" height="150px" width= "200px"></Image>  */}

            <a href="/userhome" className="complete " to="/avatar">Complete</a>
     </div>
        );
    }
}
