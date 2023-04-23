import { useState } from 'react'
import './App.css'
import Home from './Components/Home/HomePage/Home'
import { ChakraProvider } from '@chakra-ui/react'

function App() {

  return (
    <>
    <ChakraProvider>
      <Home />
    </ChakraProvider>
    </>
  )
}

export default App
