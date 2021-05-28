import './App.css';
import Header from './components/Header'
import Sidebar from "./components/Sidebar";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import EmailList from './components/EmailList';
import Mail from './components/Mail';
function App() {
  return (
    <Router>
    <div className="app">  
      <Header/>
      <div className="app_body">
      <Sidebar/>
      <Switch>
       <Route exact  path="/">
         <EmailList/>       
      </Route> 
     <Route exact path = "/mail">
       <Mail/>
       </Route> 

     </Switch>
      </div>
    </div>
    </Router>
  );
}

export default App;
