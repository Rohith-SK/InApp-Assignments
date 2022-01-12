import { Routes,
  Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MainPage from './Components/MainPage';
import RegisterPage from './Components/RegisterPage';
import NewsInfo from './Components/NewsInfo';
import NewsDetails from './Components/NewsDetails'
import TitleInfo from './Components/TitleInfo';
import TitleInfoDetails from './Components/TitleInfoDetails';
import RangeTitle from './Components/RangeTitle'
import RangeTitleDetails from './Components/RangeTitleDetails';



function App(){
return(
<div>
<Routes>
 <Route path='/' element={<MainPage />} />
 <Route path='/registerpage' element={<RegisterPage />} />
 <Route path='/newsinfo' element={<NewsInfo />} />
 <Route path='/titleinfo' element={<TitleInfo />} />
 <Route path='/newsdetails' element={<NewsDetails />} />
 <Route path='/titleinfodetails' element={<TitleInfoDetails />} />
 <Route path='/rangetitle' element={<RangeTitle />} />
 <Route path='/rangetitledetails' element={<RangeTitleDetails />} />
</Routes>
</div>
)
}

export default App