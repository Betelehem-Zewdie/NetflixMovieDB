import { useState } from 'react'
import reactLogo from './assets/react.svg'

import './App.css'
// import TestOne from './Components/Test/TestOne'
// import TestTwo from './Components/Test/TestTwo'
import Header from './Components/Header/Header'
import Banner from './Components/Banner/Banner'
import DisplayRow from './Components/DisplayRow/DisplayRow'
import Footer from './Components/Footer/Footer'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    {/* <TestOne/> */}
    {/* <TestTwo/> */}
    <Header/>
    <Banner/>
    <DisplayRow/> 
    <Footer/>
    </>
  )
}

export default App
