import './App.scss';
import Header from './components/header/Header';
import {Container} from 'react-bootstrap'
import Sidebar from './components/sidebar/Sidebar';
import HomeScreen from './pages/homescreen/HomeScreen'
import { useState } from 'react';
import Login from './pages/loginScreen/Login';
 import { BrowserRouter as Router,Redirect,Route,Switch} from 'react-router-dom'
const Layout = ({children})=>{
  const [sidebar,setSidebar] = useState(false);
  const handleToggle = (tog)=> setSidebar(tog=>!tog);
  return(<>
      <Header handle = {handleToggle}/>
      <div className="app_container">
        <Sidebar sidebar={sidebar} handle={handleToggle}/>
        <Container className="app_main">
          <HomeScreen/>

        </Container>
          
        
      </div> </>

  )
}

function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path="/login" component={Login}/>
          <Route path="/search">
            <Layout>
            <h1>Search screen</h1>
            </Layout>
          </Route>
          <Route path="/">
            <Layout>
              <HomeScreen/>
            </Layout>
          </Route>
          
          
         

        </Switch>
      </Router>
    </div>
  );
}

export default App;
