import { Route, Routes } from 'react-router-dom';
import Home from './views/Home';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      {/* <Route path='/about' element={< About/>} /> */}
    </Routes>
  );
};

export default App;
