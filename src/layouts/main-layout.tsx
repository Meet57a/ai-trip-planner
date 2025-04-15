import Header from '@/components/header'
import { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom'

const MainLayout = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem('token');

  useEffect(() => {

    if (token) {
      navigate('/home')
    }
  }, [token])
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