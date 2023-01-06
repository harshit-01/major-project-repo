import { Route, Routes } from 'react-router-dom';
import About from './pages/About/about'
import Home from './views/Home';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={< About/>} />
    </Routes>
  );
};

export default App;
