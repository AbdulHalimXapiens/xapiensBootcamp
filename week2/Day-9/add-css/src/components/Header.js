import React from 'react';
import '../assets/css/bootstrap.css';
import img1 from '../assets/img/background/code.jpg';


export default function Headers() {
    return(
    
    <div style={{height: 600}}>
            <nav className="navbar navbar-expand-md navbar-light bg-lightt fixed-top"  style={{backgroundColor: '#483D8B', opacity:1}}>
                <div className="container-fluid">
                    <a class="navbar-brand" href="#">
                        <h3 style={{fontFamily: 'Montserrat',fontWeight:'bold', letterSpacing: 5}}>HEY TECH</h3>
                    </a>
                    <button className="navbar-toogle" type="button" dataToggle="collapse" dataTarget="#navbarResponsive">
                        <span className="navbar-toggle-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" >
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Profile</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Product</a>
                        </li>
                        
                        <li className="nav-item">
                            <a className="nav-link" href="#">Teams</a>
                        </li>
                    </ul>
                    </div>
                </div>
            </nav>
            <div id="slides" className="carousel slide" dataRide="carousel">
            
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img className="d-block w-100" style={{height:590}} src={img1}/>
                    </div>
                    
                </div>
                
                
            </div>
            
    </div>
    )
}