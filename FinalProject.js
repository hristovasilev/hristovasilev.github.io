let btn = document.getElementById("getFlightsButton");

btn.onclick = function(e){
    e.preventDefault();
    let currentFlight = flights[0];

    let ctn = document.getElementById("FlightCtn");

    let message = ` 
        <p> Date: ${currentFlight.flightDate} </p>
        <p> Number of Seats: ${currentFlight.companyName} </p>
        <p> From: ${currentFlight.from} </p>
        <p> To: ${currentFlight.to} </p>
        <p> Departure: ${currentFlight.departureTime} </p>
        <p> Arrival: ${currentFlight.arrivalTime} </p>
        <p> Max Amount: ${currentFlight.amount } </p>
 
    `

    FlightCtn.innerHTML = message;
}
