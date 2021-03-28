import './App.scss';
import Header from './components/header/Header';
import {Container} from 'react-bootstrap'
import Sidebar from './components/sidebar/Sidebar';
import HomeScreen from './pages/homescreen/HomeScreen'
import { useEffect, useState } from 'react';
import Login from './pages/loginScreen/Login';
 import { Route,Switch, useHistory} from 'react-router-dom'
import { useSelector } from 'react-redux';
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
  const history = useHistory()
  const {accessToken,loading} = useSelector(state=>state.auth)
  useEffect(()=>{
    if(!loading && !accessToken){
      history.push('/')
       
    }


  },[accessToken,loading,history])
  return (
    <div className="app">
  
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
     
    </div>
  );
}

export default App;
