import { 
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Users from './Pages/Users';
import About from './Pages/About'
import Team from './Pages/Team';
import Works from './Pages/Works';
import UserDetails from './Components/UserDetails';


function App(){
  return(
    <div>
      <Router>
          <Navbar />
          <h1 className="welcome">Welcome! User</h1>
          <Routes>
            <Route path='/home' element={<Home />}/>
            <Route path='/users' element={<Users />}/>
            <Route path='/user-details/:userName' element={<UserDetails />}/>
            <Route path='/about' element={<About />}/>
            <Route path='/team' element={<Team />}/>
            <Route path='/works' element={<Works />}/>
          </Routes>
      </Router>
    </div>
  )
}

export default App;

