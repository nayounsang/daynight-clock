
import './App.css'
import { DayNightClock,useTime } from '../dist';
import React from 'react';

function App() {
  const time = useTime();

  return (
    <>
      <div>
      <DayNightClock size="medium" time={time} nightStyle={{backgroundColor:"indigo"}} dayStyle={{backgroundColor:"orange"}}/>
      </div>
    
    </>
  )
}

export default App
