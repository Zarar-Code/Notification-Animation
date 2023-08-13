import React from 'react'
import "./Home.css"
import { AiOutlineBell } from 'react-icons/ai';


const Home = () => {
  return (
    <div className='container'>
      <h1>BELL NOTIFICATION ANIMATION</h1>
    <button type='button'>
   <AiOutlineBell className='bell'/>
    </button>
    </div>
  )
}

export default Home