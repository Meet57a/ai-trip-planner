import {
    Dialog,
    DialogContent,

    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"



const PopUpDetails = ({ item, index }: any) => {


    return (
        <Dialog >
            <DialogTrigger>
                <div key={index} className={`relative text-center flex justify-center items-center h-60 w-full rounded-lg shadow-lg mt-2 bg-gradient-to-r ${index % 2 !== 0 ? "from-[#2C3E50] to-[#4CA1AF]" : "from-[#1e130c] to-[#9a8478]"} px-4`}>
                    <div className="absolute left-4 top-4">🕛 {item.time}</div>
                    <div className="text-xl">{item.locationName}</div>
                </div>
            </DialogTrigger>
            <DialogContent className={`max-sm:w-[350px] rounded-lg bg-gradient-to-r from-[#2C3E50] to-[#4CA1AF] text-white border-none ${index % 2 !== 0 ? "from-[#2C3E50] to-[#4CA1AF]" : "from-[#1e130c] to-[#9a8478]"}`}>
                <div className="">
                    <DialogHeader className="flex justify-center items-center flex-col">
                        <DialogTitle className="text-2xl font-bold">{item.locationName}</DialogTitle>
                        <div className="text-xl mt-2">{item.time}</div>
                    </DialogHeader>
                    <div className="flex justify-center items-center flex-col mt-4">
                        <div className="text-lg font-bold">Description</div>
                        <div className="text-md text-center">{item.description}</div>
                    </div>
                    <div className="flex justify-center items-center flex-col mt-4">
                        <div className="text-lg font-bold">Estimated Travel Time</div>
                        <div className="text-md text-center">{item.estimatedTravelTime}</div>
                    </div>
                    <div className="flex justify-center items-center flex-col mt-4">
                        <div className="text-lg font-bold">Ai Recommendation</div>
                        <div className="text-md text-center">{item.aiRecommendation}</div>
                    </div>
                    <div className="flex justify-center items-center flex-col mt-4">
                        <div className="text-lg font-bold">Geo Coordinates</div>
                        <div className="text-md text-center">Latitude: {item.geoCoordinates.latitude}</div>
                        <div className="text-md text-center">Longitude: {item.geoCoordinates.longitude}</div>
                    </div>
                    {item.ticketPricing ? (
                        <div className="flex justify-center items-center flex-col mt-4">
                        <div className="text-lg font-bold">Ticket Pricing</div>
                        <div className="text-md text-center">Adult: {item.ticketPricing.adult} {item.ticketPricing.currency}</div>
                        <div className="text-md text-center">Child: {item.ticketPricing.child} {item.ticketPricing.currency}</div>
                    </div>
                    ):null}
                </div>
            </DialogContent>
        </Dialog>

    )
}

export default PopUpDetails