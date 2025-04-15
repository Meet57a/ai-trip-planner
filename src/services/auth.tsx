export const signUp = async (data: any) => {
console.log(import.meta.env.VITE_URL);

    const response = await fetch(import.meta.env.VITE_URL + "/auth/sign-up", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });
    return response.json();
}

export const signIn = async (data: any) => {
    const response = await fetch(import.meta.env.VITE_URL + "/auth/sign-in", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });
    return response.json();
}