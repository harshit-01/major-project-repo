import { Route, Routes } from 'react-router-dom';
import About from './pages/About/about'
import Home from './views/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import Predict from './views/Predict';
import ProjectTeam from './views/ProjectTeam';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/predict' element={<Predict/>}/>
      <Route path='/projectTeam' element={<ProjectTeam/>}/>
      <Route path='/about' element={< About/>} />
    </Routes>
  );
};

export default App;
