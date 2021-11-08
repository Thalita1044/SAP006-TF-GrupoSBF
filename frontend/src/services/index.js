export const getPromotions = async() => {

    const myInit = {
        method: "GET",
        headers: {
          "Content-type": "application/json",
        },
    };

    const response = await fetch("http://localhost:3000/promotions", myInit);

    const data = await response.json();
    return data
};