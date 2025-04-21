import {  buttonVariants } from '@/components/ui/button'
import { Link } from 'react-router-dom'

const LandingPage = () => {
    return (
        <div className='flex justify-center items-center'>
            <div className='text-center mt-36'>
                <div className='text-5xl font-bold tracking-wider'>Plan Your Perfect Trip with AI</div>
                <div className='tracking-wider text-2xl font-light mt-2 mb-8'>Smart, hassle-free travel planning with AI-generated itineraries.</div>
                <Link className={buttonVariants({ variant: "default",size: "lg" })} to={'/create-trip'} >Get Started</Link>
            </div>
        </div>
    )
}

export default LandingPage