import { Routes,
         Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MainPage from './Components/MainPage';
import RegisterPage from './Components/RegisterPage';
import NewsInfo from './Components/NewsInfo';

function App(){
  return(
    <div>
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/registerpage' element={<RegisterPage />} />
        <Route path='/newsinfo' element={<NewsInfo />} />
      </Routes>
    </div>
  )
}

export default App