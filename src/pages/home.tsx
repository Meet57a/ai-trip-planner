import { buttonVariants } from '@/components/ui/button'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div>
            <div className='flex justify-center items-center'>
                <div className='text-center mt-20'>
                    <div className='text-5xl font-bold tracking-wider'>Plan Your Perfect Trip with AI</div>
                    <div className='tracking-wider text-2xl font-light mt-2 mb-8'>Smart, hassle-free travel planning with AI-generated itineraries.</div>
                    <Link to={'/create-trip'} className={buttonVariants({ variant: "default" })}>Get Started</Link>
                </div>
            </div>
            <div className='flex justify-center items-center mt-10'>
                <div className='text-center'>
                    <div className='text-3xl font-bold'>Recent Trips</div>
                    <div className='text-xl font-light mt-2 mb-8'>Explore the latest trips created by our users.</div>
                    <Link to={'/recents'} className={buttonVariants({ variant: "default" })}>View All Trips</Link>
                </div>
            </div>
        </div>
    )
}

export default Home