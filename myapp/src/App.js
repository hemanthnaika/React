import { useState,useEffect } from 'react'
import Calculator from './components/Calculator';

import Navbar from './layouts/Navbar'
import Info from './components/Info';
import Timer from './components/Timer';
import Tap from './components/Tap'



const App = () => {
  // const currentcomp='timer'
  const [currentComp,setcurrentComp]=useState('info')
  return (
    <div className="App">
      <Navbar setcurrentComp={setcurrentComp} />
      {
        currentComp==='calculator'? <Calculator />
        :currentComp==='timer'? <Timer />
         :currentComp==='tap'?<Tap />
           :<Info />
      }
      {/* <Info />
      <Timer />
       <Calculator />
       <Tap /> */}
    </div >
  );
}



export default App;

