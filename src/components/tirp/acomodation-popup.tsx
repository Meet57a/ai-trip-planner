import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"

const AcomodationPopup = ({ trip, index, currency }: any) => {
    return (

        <Dialog >
            <DialogTrigger>
                <div key={index} className="flex flex-col items-center justify-center text-white h-60 bg-gradient-to-r from-[#43c6ac] to-[#191654] border rounded-lg shadow-lg mt-4 px-4 relative text-center">
                    <div className="text-xl">{trip.hotelName}</div>
                    <span className="absolute right-4 top-4">{trip.pricePerNight} {currency}/pernight</span>
                </div>
            </DialogTrigger>
            <DialogContent className={`max-sm:w-[350px] rounded-lg bg-gradient-to-r from-[#43c6ac] to-[#191654] text-white border-none `}>
                <div className="">
                    <DialogHeader className="flex justify-center items-center flex-col">
                        <DialogTitle className="text-2xl font-bold">{trip.hotelName}</DialogTitle>
                        <div className="text-xl mt-2">{trip.pricePerNight} {currency}/pernight</div>
                    </DialogHeader>
                    <div className="flex justify-center items-center flex-col mt-4">
                        <div className="text-lg font-bold">Description</div>
                        <div className="text-md text-center">{trip.description}</div>
                    </div>
                
                    <div className="flex justify-center items-center flex-col mt-4">
                        <div className="text-lg font-bold">Ai Recommendation</div>
                        <div className="text-md text-center">{trip.aiRecommendation}</div>
                    </div>
                    <div className="flex justify-center items-center flex-col mt-4">
                        <div className="text-lg font-bold">Geo Coordinates</div>
                        <div className="text-md text-center">Latitude: {trip.geoCoordinates.latitude}</div>
                        <div className="text-md text-center">Longitude: {trip.geoCoordinates.longitude}</div>
                    </div>
                    
                </div>
            </DialogContent>
        </Dialog>


    )
}

export default AcomodationPopup