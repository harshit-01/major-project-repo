import { Route, Routes } from 'react-router-dom';
import About from './pages/About/about'
import Home from './views/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import Predict from './views/Predict';
import ProjectTeam from './views/ProjectTeam';
import Journals from './pages/Publications/journals';
import Patents from './pages/Publications/patents';
import Conferences from './pages/Publications/conferenceWorkshops';
import Chapter from './pages/Publications/chapter';
import Statistics from './pages/Publications/statistics';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/predict' element={<Predict/>}/>
      <Route path='/projectTeam' element={<ProjectTeam/>}/>
      <Route path='/about' element={< About/>} />
      <Route path='/journals' element={<Journals/>} />
      <Route path='/patents' element={<Patents/>} />
      <Route path='/conferences' element={<Conferences/>} />
      <Route path='/chapters' element={<Chapter/>} />
      <Route path='/statistics' element={<Statistics/>} />

    </Routes>
  );
};

export default App;
