import React from 'react';
import '../assets/css/Header.css';
import '../assets/css/bootstrap.css';

import img1 from '../assets/img/social/fb.png';
import img2 from '../assets/img/social/ig.png';
import img3 from '../assets/img/social/twitter.png';

export default function Footer() {
    return(
        <footer className="border-top p-3" style={{backgroundColor:'#483D8B',color:'white',marginTop:160}}>
        <div className="container-fluid">
            <div className="row mb-0 justify-content-between">
                <div className="col-5 pl-3">
                    <p style={{fontFamily:'Montserrat',fontSize:17,fontWeight:'bold',color:'white'}}>© Copyright - HEYTECH Media 2020</p>
                </div>
                <div className="col-2    text-right">
                    <a href="">
                        <img src={img1} style={{marginRight:16}} alt=""/>
                    </a>
                    <a href="">
                        <img src={img2} style={{marginRight:16}} alt=""/>
                    </a>
                    <a href="">
                        <img src={img3} style={{marginRight:16}} alt=""/>
                    </a>
                </div>
            </div>
        </div>
    </footer>
    )
}