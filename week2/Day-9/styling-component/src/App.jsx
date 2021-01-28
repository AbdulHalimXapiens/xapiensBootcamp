import React from 'react'
// import Content from './components/content'
//import './App.css';
import Header from './components/header'
import Body from './components/body'
import Footer from './components/footerComponent'
import Image from './components/ImageGrid'
// import Profile from './profile'


// //Pemanggilan COmponent
// function App() {
//   return (
//     <div className="App">export default class App extends React.Component {
//   constructor(props){
//     super(props);

//     //deklarasi isi state nya
//     this.state = {
//       header: "ini header",
//       footer: "ini footer"
//     };
//   }

// //mengubah isi header dengan setState
// changeHeader(i){
//   this.setState({header: i.target.value});
// }

// //mengubah isi footer dengan setState
// changeFooter(i){
//   this.setState({footer: i.target.value})
// }

// //dataState: props untuk lempar data state ke comp body
// //changeHeader, changeFooter: props buat menambgkap perubahan dari comp body
// //dataHeader: props buat lempar data state ke comp header
// //dataFooter: props buat lempar datat state ke comp footer

// render(){
//   return(
//     <div>
//       <Header dataHeader={this.state.header} />
//       <Body 
//       dataState={this.state}
//       changeHeader={this.changeHeader.bind(this)}
//       changeFooter={this.changeFooter.bind(this)} />
//       <Footer dataFooter={this.state.footer} />
//     </div>
//   )
// }

// }


//       <Body />
//       <Footer />
//       <Header />
//       <Profile />
      
//     </div>
//   );
// }

// export default App;

//Props dan State

// export default class App extends React.Component {
//   constructor(props){
//     super(props);

//     //deklarasi isi state nya
//     this.state = {
//       header: "ini header",
//       footer: "ini footer"
//     };
//   }

// //mengubah isi header dengan setState
// changeHeader(i){
//   this.setState({header: i.target.value});
// }

// //mengubah isi footer dengan setState
// changeFooter(i){
//   this.setState({footer: i.target.value})
// }

// //dataState: props untuk lempar data state ke comp body
// //changeHeader, changeFooter: props buat menambgkap perubahan dari comp body
// //dataHeader: props buat lempar data state ke comp header
// //dataFooter: props buat lempar datat state ke comp footer

// render(){
//   return(
//     <div>
//       <Header dataHeader={this.state.header} />
//       <Body 
//       dataState={this.state}
//       changeHeader={this.changeHeader.bind(this)}
//       changeFooter={this.changeFooter.bind(this)} />
//       <Footer dataFooter={this.state.footer} />
//     </div>
//   )
// }

// }


// export default class App extends React.Component{

//   constructor(props){
//     super(props);

//     this.state = {
//       data: 0
//     }

//     this.setNewNumber = this.setNewNumber.bind(this) 
//   };

//   setNewNumber(){
//     this.setState({data: this.state.data + 1})
//   }

//   render(){
//     return(
//       <div>
//         <button onClick={this.setNewNumber}>Increment</button>
//         <Content myNumber={this.state.data}></Content>
//       </div>
//     )
//   }
// }

//Styling Component
function App() {
  return (
    <div className="App">
      <Header />
      <Body/>
      <Image/>
      <Footer/>
    </div>
  )
}

export default App;