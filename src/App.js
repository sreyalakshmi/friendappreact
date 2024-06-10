import logo from './logo.svg';
import './App.css';
import Add from './components/Add';
import ViewAll from './components/ViewAll';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route path="/" element={<Add/>}/>
    <Route path="/view" element={<ViewAll/>}/>
   </Routes>
   </BrowserRouter>
  );
}

export default App;
