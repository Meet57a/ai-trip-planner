import { Link, useLocation } from "react-router-dom"
import { getTrip } from "@/services/trip"
import { Fragment, useEffect, useState } from "react"
import { buttonVariants } from "@/components/ui/button"
import { Trip } from "@/models/trip"
import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
} from "@/components/ui/hover-card"

import PopUpDetails from "@/components/tirp/pop-up-details"
import AcomodationPopup from "@/components/tirp/acomodation-popup"




const TripPage = () => {
    const data = useLocation()

    const id = data?.state
    const [trip, setTrip] = useState<Trip>();
    const get = async () => {
        if (!id) {
            console?.error("Trip ID is undefined");
            return;
        }
        const response = await getTrip(id)

        if (response?.status) {
            setTrip(response?.trip)
            console?.log(response?.trip);

        }

    }

    useEffect(() => {
        console?.log(id);

        get()
    }, [id])
    return (

        id ? (
            <div className="flex flex-col items-center max-sm:px-4">
                <div className="w-3/4 flex justify-center items-center gap-4 text-white max-sm:flex-col max-sm:w-full ">
                    <div className="h-80 w-full bg-gradient-to-r from-[#000428] to-[#004e92]  rounded-lg mt-10 tracking-widest flex justify-center items-center text-3xl font-bold relative max-sm:h-40 max-sm:px-4">
                        <div className="absolute top-4 left-4 text-xl text-white max-sm:hidden">
                            ☀️{trip?.data?.weatherForecast?.temperature?.low}°C -  {trip?.data?.weatherForecast?.temperature?.high}°C
                        </div>
                        <span className="text-3xl text-center">
                            {trip?.data?.queryParameters?.destination}
                        </span>
                    </div>
                    {trip?.data?.weatherForecast ? (
                        <div className="h-80 tracking-widest w-2/4 bg-gradient-to-r from-[#2980b9] to-[#6dd5fa] rounded-lg mt-10 text-white flex justify-center items-center text-3xl  relative max-sm:w-full max-sm:h-60 max-sm:mt-2">
                            <div className="absolute top-4 right-4 text-xl text-white">
                                🍃{trip?.data?.weatherForecast?.windSpeed} {trip?.data?.weatherForecast?.windUnit}
                            </div>
                            <div className="absolute bottom-4 left-4 text-xl text-white">
                                {trip?.data?.weatherForecast?.date}
                            </div>
                            <div className="flex flex-col items-center justify-center h-full w-full">
                                <div>
                                    ☀️{trip?.data?.weatherForecast?.temperature?.low}°C -  {trip?.data?.weatherForecast?.temperature?.high}°C
                                </div>
                                <div className="text-2xl">
                                    {trip?.data?.weatherForecast?.condition}
                                </div>
                            </div>
                            <HoverCard>
                                <HoverCardTrigger className="h-6 w-6 text-[15px] rounded-full border flex justify-center items-center absolute bottom-4 right-4 cursor-pointer">i</HoverCardTrigger>
                                <HoverCardContent className="text-xl" side="top">
                                    {trip?.data?.weatherForecast?.aiRecommendation}
                                </HoverCardContent>
                            </HoverCard>
                        </div>
                    ) : null}
                </div>
                <div className="flex items-center justify-between w-3/4 mt-4 max-sm:w-full">
                    <span>{trip?.data?.queryParameters?.startDate}</span>
                    <div className="flex-1 border-t-2 border-dashed border-black mx-2 "></div>
                    <span>{trip?.data?.queryParameters?.endDate}</span>
                </div>
                <span className="text-2xl mt-4 tracking-widest text-center">
                    {trip?.data?.planName}
                </span>
                <hr className="w-3/4 mt-4 max-sm:w-full" />

                <div className="flex items-center justify-between w-3/4 mt-4 max-sm:w-full">
                    <span className="text-xl font-bold">Trip Plan</span>
                    <span className="text-xl">{trip?.data?.itinerary?.length} Days</span>
                </div>

                <div className="w-3/4 max-sm:w-full">
                    {trip?.data?.itinerary?.map((value, index) => (
                        <Fragment key={index}>
                            <div className="h-10 bg-white border rounded-lg shadow-lg mt-4">
                                <div className="flex items-center justify-between h-full px-4 ">
                                    <span className="font-bold">Day {value?.day}</span>
                                    <span className="">{value?.date}</span>
                                </div>
                            </div>
                            <div className="grid grid-cols-3 gap-4 max-sm:grid-cols-1 text-white ">
                                {trip?.data?.itinerary[index]?.schedule?.map((item, index) => (
                                    <PopUpDetails key={index} item={item} index={index} />

                                ))}
                            </div>
                        </Fragment>
                    ))}
                </div>
                <div className="flex items-center justify-between w-3/4 mt-4 max-sm:w-full">
                    <span className="text-xl font-bold">Budget Estimation</span>
                    <span className="text-xl">{trip?.data?.budgetEstimation?.totalEstimatedCost} {trip?.data?.budgetEstimation?.currency}</span>
                </div>
                <div className="w-3/4 max-sm:w-full bg-white border rounded-lg shadow-lg mt-4 p-4 mb-4">
                    <div>
                        <span className="font-bold">Accommodation: </span>
                        <span>{trip?.data?.budgetEstimation?.accommodation?.estimatedCost} {trip?.data?.budgetEstimation?.currency}</span>
                        <div className="text-sm">{trip?.data?.budgetEstimation?.accommodation?.description}</div>
                    </div>
                    <hr className="w-full mt-2 max-sm:w-full" />

                    <div className="mt-2">
                        <span className="font-bold">Travel: </span>
                        <span>{trip?.data?.budgetEstimation?.travel?.estimatedCost} {trip?.data?.budgetEstimation?.currency}</span>
                        <div className="text-sm">{trip?.data?.budgetEstimation?.travel?.description}</div>
                    </div>
                    <hr className="w-full mt-2 max-sm:w-full" />

                    <div className="mt-2">
                        <span className="font-bold">Activities: </span>
                        <span>{trip?.data?.budgetEstimation?.activities?.estimatedCost} {trip?.data?.budgetEstimation?.currency}</span>
                        <div className="text-sm">{trip?.data?.budgetEstimation?.activities?.description}</div>
                    </div>
                    <hr className="w-full mt-2 max-sm:w-full" />

                    {trip?.data?.budgetEstimation?.food ? <div className="mt-2">
                        <span className="font-bold">Food: </span>
                        <span>{trip?.data?.budgetEstimation?.food?.estimatedCost} {trip?.data?.budgetEstimation?.currency}</span>
                        <div className="text-sm">{trip?.data?.budgetEstimation?.food?.description}</div>
                    </div> : null}
                    <hr className="w-full mt-2 max-sm:w-full" />

                    <div className="mt-2">
                        <span className="font-bold">Miscellaneous: </span>
                        <span>{trip?.data?.budgetEstimation?.miscellaneous?.estimatedCost} {trip?.data?.budgetEstimation?.currency}</span>
                        <div className="text-sm">{trip?.data?.budgetEstimation?.miscellaneous?.description}</div>
                    </div>
                </div>
                <div className="flex items-center justify-between w-3/4 mt-4 max-sm:w-full">
                    <span className="text-xl font-bold">Accommodation Options</span>
                    <span className="text-xl">{trip?.data?.accommodationOptions?.length}</span>
                </div>
                <div className="mt-4 w-3/4 max-sm:w-full grid grid-cols-3 gap-4 max-sm:grid-cols-1">

                    {trip?.data?.accommodationOptions?.map((item, index) => (
                        <AcomodationPopup trip={item} index={index} currency={trip?.data?.budgetEstimation?.currency} />
                    ))}

                </div>
                <div className="flex items-center justify-between w-3/4 mt-4 max-sm:w-full">
                    <span className="text-xl font-bold">Ai Recommendations</span>   
                </div>
                <div className="w-3/4 max-sm:w-full bg-white border rounded-lg shadow-lg mt-4 p-4 mb-4">
                    <div className="flex flex-col items-center justify-center">
                        <div className="text-lg font-bold">Attractions</div>
                        <div className="text-md text-center">{trip?.data?.aiRecommendations?.attractions}</div>
                    </div>
                    <div className="flex flex-col items-center justify-center mt-4">
                        <div className="text-lg font-bold">Restaurants</div>
                        <div className="text-md text-center">{trip?.data?.aiRecommendations?.restaurants}</div>
                    </div>
                    <div className="flex flex-col items-center justify-center mt-4">
                        <div className="text-lg font-bold">Transport</div>
                        <div className="text-md text-center">{trip?.data?.aiRecommendations?.transport}</div>
                    </div>
                </div>
            </div>
        ) : (
            <div className="w-full mt-40 flex justify-center items-center">
                <div className="flex flex-col items-center justify-center">
                    <h1 className="text-3xl font-bold">Trip Not Found</h1>
                    <Link to={"/recents"} className={buttonVariants({ variant: "default" }) + " mt-4"}>Go Back</Link>
                </div>
            </div>
        )
    )
}

export default TripPage