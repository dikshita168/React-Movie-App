import React from 'react'
import "./global.css"
import Fire from "./assets/fire.png"
import Star from "./assets/star.png"
import Partying from "./assets/partying-face.png"
import Navbar from './components/Navbar'
import Movielist from './components/MovieListComponent/Movielist'
import Footer from './components/footer-section/Footer'

const App = () => {
  return (
    <div className='App'>
      <Navbar/>

      <Movielist type="popular" title = "Popular" emoji={Fire}/>
      <Movielist type="top_rated" title = "Top Rated" emoji={Star}/>
      <Movielist type="upcoming" title = "Upcoming" emoji={Partying}/>
      <Footer/>
    </div>
  )
}

export default App
