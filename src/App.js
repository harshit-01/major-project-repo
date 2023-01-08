import { Route, Routes } from 'react-router-dom';
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
    </Routes>
  );
};

export default App;
