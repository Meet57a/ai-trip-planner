export const createTrip = async (data: any) => {
    const response = await fetch(import.meta.env.VITE_URL + "/trip/create-trip", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${localStorage.getItem('token')}`
        },
        body: JSON.stringify({ "prompt": data }),
    });
    return response.json();
}

export const getTrip = async (id:string) => {
    const response = await fetch(import.meta.env.VITE_URL + "/trip/get-trip/" + id, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${localStorage.getItem('token')}`
        },
    });
    return response.json();
}

export const getAllTrips = async () => {
    const response = await fetch(import.meta.env.VITE_URL + "/trip/get-trip-by-user", {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${localStorage.getItem('token')}`
        },
    });
    return response.json();
}