import React, { Component } from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import About from './views/About'
import Home from './views/Home'
import News from './views/News'
import Tools from './views/Tools'

export default class App extends Component {

  constructor() {
    super(); // To run all the things imported from Component
    this.state = {
      name: 'Shoha',
      age: 9000,
      people: ['andrew', 'david', 'anthony', 'tyler', 'tomm', 'christopher']
    }
  }

  componentDidMount() {

  }





  render() {
    return (
      <>
        <Navbar />
        {/* <h1>Hi, I am {this.state['name']} and my age is {this.state['age']}.</h1>
        <button onClick={()=>this.happyBirthday()}>Happy Birthday</button> */}

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About myClass={this.state.people} />} />
          <Route path='/news' element={<News />} />
          <Route path='/tools' element={<Tools />} />
        </Routes>
      </>
    )
  }

}
