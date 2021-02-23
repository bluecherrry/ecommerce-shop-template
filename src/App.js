import Header from "./Components/Header/Navbars/Header";
import LandingPage from "./Components/landingPage/LandingPage";
import {BrowserRouter as Router , Switch,Route}from 'react-router-dom'

function App() {
  return (
    <Router >
     <Header/>
     <Switch>
       <Route path="/" exact component={LandingPage}/>
     </Switch>
     

    </Router>
  );
}

export default App;
