const API_URL = "http://localhost:3000/";

const config = {
    headers: {
        "Content-Type": "application/json"
    }
}

navigator.geolocation.getCurrentPosition(async (position) => {
    console.log(position);
    let requestBody = {
        latitude: parseFloat(position.coords.latitude).toFixed(2),
        longitude: parseFloat(position.coords.longitude).toFixed(2),
    }
    try {
        let result = await axios.post(`${API_URL}location`, JSON.stringify(requestBody), config);
        console.log(result.data);
    } 
    catch (err) {
        console.log(`Error: ${err.message}`);
    }  

}, (error) => {
    console.error("Error getting location:", error);
});