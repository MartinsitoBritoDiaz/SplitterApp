import { useState } from 'react'
import { Header } from './components/Header'
import { Card } from './components/Card'
import { Footer } from './components/Footer'


function SplitterApp() {
  
  return (
    <div className="App">
      <Header/>

      <Card />

      {/* <Footer /> */}
    </div>
  )
}

export default SplitterApp
