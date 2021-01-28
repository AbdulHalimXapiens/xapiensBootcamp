import React from 'react'
import '../assets/header.css'

//props dan state
// export default class Header extends React.Component{
//     render(){
//         return(
//             <div>
//                 <h1>{this.props.dataHeader}</h1>
//             </div>
//         )
//     }
// }

const Header = () => {
    return(
        <div className="header">
            <a href="#default" className="logo">MyLogo</a>
            <div class="header-right">
                <a href="home">Home</a>
                <a className="active" href="#profile">Profile</a>
                <a href="contact">Contact</a>
                <a href="#about">About</a>
            </div>
        </div>
    )
}
export default Header;