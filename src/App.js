import './App.scss';
import Header from './components/header/Header';
import {Container} from 'react-bootstrap'
import Sidebar from './components/sidebar/Sidebar';
import HomeScreen from './pages/homescreen/HomeScreen'
import { useState } from 'react';
 


function App() {
  const [sidebar,setSidebar] = useState(false);
  const handleToggle = (tog)=> setSidebar(tog=>!tog);
  return (
    <div className="app">
      <Header handle = {handleToggle}/>
      <div className="app_container">
        <Sidebar sidebar={sidebar} handle={handleToggle}/>
        <Container className="app_main">
          <HomeScreen/>

        </Container>
          
      </div>

    
    </div>
  );
}

export default App;
