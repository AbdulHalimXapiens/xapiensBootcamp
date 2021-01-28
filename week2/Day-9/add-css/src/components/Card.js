import React from 'react';
import '../assets/css/bootstrap.css';
import img1 from "../assets/img/com1.jpg";
import img2 from "../assets/img/com2.jpg";
import img3 from "../assets/img/com3.jpg";
import img4 from "../assets/img/com4.jpg";


export default function Card() {
    return(
        <div className="container-fluid">
        <div className="row">
            <div className="card col-sm" style={{width: '18rem'}}>
            <img className="card-img-top" src={img1} alt="Card image cap"/>
            <div className="card-body">
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
            </div>
            <div className="card col-sm" style={{width: '18rem'}}>
            <img className="card-img-top" src={img2} alt="Card image cap"/>
            <div className="card-body">
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
            </div>
            <div className="card col-sm" style={{width: '18rem'}}>
            <img className="card-img-top" src={img3} alt="Card image cap"/>
            <div className="card-body">
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
            </div>
            <div className="card col-sm" style={{width: '18rem'}}>
            <img className="card-img-top" src={img4} alt="Card image cap"/>
            <div className="card-body">
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
            </div>
        </div>
        </div>
        
    )
}