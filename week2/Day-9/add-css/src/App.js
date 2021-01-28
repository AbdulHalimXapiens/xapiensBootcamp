import './App.css';
import Header from './components/Header'
import Introduction from './components/Introduction'
import Card from './components/Card'
import Footer from './components/Footer'
import Testimonials from './components/Testimonials'

function App(){
  return(
    <div style={{backgroundColor:'#2F4F4F'}}>
      <Header/>
      <Introduction/>
      <Card/>
      <Testimonials/>
      <Footer/>
    </div>
  );
}

export default App;