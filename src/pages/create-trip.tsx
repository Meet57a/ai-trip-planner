import { Input } from "@/components/ui/input"

const CreateTrip = () => {
  return (
    <div className='w-1/2 mx-auto mt-10 '>
        <div>
            <div className='text-3xl font-bold tracking-wider'>Create a Trip</div>
            <div className='text-lg tracking-wider'>Create a new trip and get started with your travel planning.</div>
        </div>
        <div className="mt-10">
            <div className="text-xl tracking-wider">Trip Details</div>
            <div className="mt-2">
                <Input placeholder='Destination (City/Country)' />
            </div>
        </div>
    </div>
  )
}

export default CreateTrip