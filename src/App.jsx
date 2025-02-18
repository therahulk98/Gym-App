import React, { useState } from 'react'
import Hero from './components/Hero'
import Generator from './components/Generator'
import Workout from './components/Workout'
import {generateWorkout} from './utils/functions'




const App = () => {

  const [workout, setWorkout] = useState(null)
  const [poison, setPoison] = useState('individual')
  const [muscles, setMuscles] = useState([])
  const [goal, setGoal] = useState('strength_power')


  const updatedWorkout = () => {
    if (muscles.length <1) {
      console.log("No muscles selected.")
      return
    }

    let newWorkout = generateWorkout({muscles, poison, goal})
    console.log("Generated workout:", newWorkout)
    setWorkout(newWorkout)

    window.location.href = '#workout'
  }

  return (
    <main className='min-h-screen flex flex-col bg-gradient-to-r from-slate-800 to bg-slate-950 text-white text-sm sm:text-base'>
      <Hero />
      <Generator muscles={muscles} updatedWorkout={updatedWorkout} setMuscles={setMuscles} workout={workout} setWorkout={setWorkout} poison={poison} setPoison={setPoison} goal={goal} setGoal={setGoal}/>
      {workout && workout.length > 0 && <Workout workout={workout} />}
    </main>
  )
}

export default App