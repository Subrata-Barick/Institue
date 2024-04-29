import React from 'react'
import Bgimage from './Bgimage'
import Counter from '../component/Counter'
import Choose from './Choose'
import Course from './Course'
import Code from './Code'

const Home = () => {
  return (
    <div>
      <Bgimage/>
      <Code/>
      <Counter/>
      <Choose/>
      <Course/>
    </div>
  )
}

export default Home