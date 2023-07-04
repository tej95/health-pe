import React from 'react'
import Header from './components/Header';
import Navbar from './components/Navbar';
import { Stack } from '@chakra-ui/react';
import Doctor from './components/Doctor';
import Footer from './components/Footer'

const App = () => {
  return (
    <>
    <Stack direction='column'  spacing={24}>
    <Navbar></Navbar>
      <Header></Header>
      <Doctor></Doctor>
      <Footer></Footer>

    </Stack>
      
      </>
   

  )
}

export default App