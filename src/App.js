import './App.css';
import Header from './Component/Header';

import {Routes, Route} from "react-router-dom"
import Cards from './Component/Cards';


function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route path='/' element={<Cards/>}/>
      </Routes>

    </>
  );
}

export default App;
