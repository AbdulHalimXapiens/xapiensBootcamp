import React, {Component} from 'react';

//1. JSX
function Judul() {
  return(
    <h2>Mengubah Data</h2>
  )
}

class App extends Component{
  //2. State
  state = {
    name: 'Abdul Halim',
    umur: 27,
    gender: 'Pria',
    kota: 'Kuningan'
  }

  //3. setState
  rubah = () => {
    this.setState({name: "Mia", umur: 25, gender: "wanita", kota: "Majalengka"})
  }
  

  render(){
    
    return (
      //1. JSX
      <div>
          <Judul />
          <p>Nama : {this.state.name}</p>
          <p>Umur : {this.state.umur}</p>
          <p>gender : {this.state.gender}</p>
          <p>Kota : {this.state.kota}</p>
          <items/>
        
        <button onClick = {this.rubah}>Update</button>
      </div>
    );
  }
  
}

export default App;
