import { Link, Outlet, useLocation } from 'react-router-dom'

const HomeLayout = () => {
    const location = useLocation()
    const path = location.pathname

    return (
        <div>
            <div className='flex justify-center gap-5'>
                <Link to={'/home'} className={`${path === "/home" && 'border-b-2 border-black'}`}>Home</Link>
                <Link to={'/recents'} className={`${path === "/recents" && 'border-b-2 border-black'}`}>Recents</Link>
                <Link to={'/trip'} className={`${path === "/trip" && 'border-b-2 border-black'}`}>Trip</Link>

            </div>
            <main>
                <Outlet />
            </main>
        </div>
    )
}

export default HomeLayout