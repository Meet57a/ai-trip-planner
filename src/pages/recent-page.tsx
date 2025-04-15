import { buttonVariants } from '@/components/ui/button';
import { Trip } from '@/models/trip';
import { getAllTrips } from '@/services/trip';
import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';


const RecentPage = () => {
    const navigate = useNavigate()
    const [trip, setTrip] = useState<Trip[]>([]);

    const get = async () => {
        const response = await getAllTrips();
        if (response.status) {
            setTrip(response.trip);
        }
    }

    const handleClick = (tripId: string) => {
        console.log(tripId);

        navigate('/trip', { state: tripId })

    }

    useEffect(() => {
        get()

    }, [])

    return (
        trip.length > 0 ? (
            <div className='flex flex-col items-center mt-10 px-4'>
                {trip.map((trip, index) => (
                    <div key={index} onClick={() => handleClick(trip._id)} className="h-14 w-3/4 mt-4 cursor-pointer bg-white justify-between flex items-center px-4  border rounded-lg shadow-lg max-sm:w-full">
                        <span className='font-bold'>
                            {trip.data.queryParameters.destination}
                        </span>
                        <span className='max-sm:hidden'>{trip.data.queryParameters.startDate} --------- {trip.data.queryParameters.endDate}</span>
                        <span className='text-xl' >{'>'}</span>
                    </div>

                ))}
                <Link to={'/create-trip'} className={buttonVariants({ variant: "default" }) + " mt-4"}>Create Trip</Link>

            </div>
        ) : (
            <div className='flex flex-col items-center mt-10 px-4'>
                <div className="h-14 w-3/4 mt-4 mb-4 cursor-pointer bg-white justify-between flex items-center px-4  border rounded-lg shadow-lg max-sm:w-full">
                    <span className='font-bold'>
                        No Trips Found
                    </span>
                </div>
                <Link to={'/create-trip'} className={buttonVariants({ variant: "default" })}>Create Trip</Link>

            </div>
        )


    )
}

export default RecentPage