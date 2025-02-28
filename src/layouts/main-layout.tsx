import Header from '@/components/header'
import React from 'react'
import { Outlet } from 'react-router-dom'

const MainLayout = () => {
  return (
    <div>
        <Header />
        <main>
            <Outlet />
        </main>
    </div>
  )
}

export default MainLayout