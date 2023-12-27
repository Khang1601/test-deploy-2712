import React from 'react'
import { Outlet } from 'react-router-dom'


import Navbar from './home/components/navbar/Navbar'
import Footer from './home/components/footer/Footer'
import Translate from '@/i18n'

export default function Home() {
  return (
    <div>
      <Navbar></Navbar>

      <div>
        <Translate></Translate>
        Home
        <Outlet />
      </div>


      <Footer></Footer>
    </div>
  )
}
