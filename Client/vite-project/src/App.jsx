import { useState } from 'react'
import './App.css'
import { Fragment } from 'react'
import Layout from './components/layout/Layout'
import Login from './pages/Login'
import AllBlog from './pages/AllBlogs'
import New from './pages/New'

import Register from '../src/pages/Register'

import { Link } from 'react-router-dom'
import { Routes, Route } from 'react-router-dom';

function App() {
  

  return (
    <>
    <Layout>
    
      <Routes>
      <Route path='/' element={<AllBlog />} />
      
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/new' element={<New />} />
        
  
    
        
      </Routes>
    </Layout>

  </>
  )
}

export default App