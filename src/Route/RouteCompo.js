import React from 'react'
import Home from '../Component/Home'
import { Route, Routes } from "react-router-dom"
import Footer from './Footer'
import ReadCompo from '../Component/ReadCompo'
import Navbar from './Navbar'
import CommonBlog from '../Component/CommonBlog'

export default function RouteCompo() {
  return (
    <div className='pages'>
      <h1 className='head'><p id='head'>The</p>  Siren</h1>
      <Navbar />
        <hr></hr>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/:blog' element={<CommonBlog />} />
            <Route path="/Blog/:id" element={<ReadCompo />} />
          </Routes>
        <Footer />
    </div>
  )
}
