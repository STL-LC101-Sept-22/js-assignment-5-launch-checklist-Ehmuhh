// Write your helper functions here!
//require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {

    let pickedPlanet = document.getElementById("missionTarget").innerHTML = (
    //pickedPlanet.innerHTML =
     `
    <h2>Mission Destination</h2>
    <ol>
        <li>Name: ${name}</li>
        <li>Diameter: ${diameter}</li>
        <li>Star: ${star}</li>
        <li>Distance from Earth: ${distance}</li>
        <li>Number of Moons: ${moons}</li>
    </ol>
    <img src="${imageUrl}">`
    )
}

function validateInput(testInput) {
    
    if(testInput === ""){
        return "empty";
    } else if(isNaN(testInput)){
        return "Not A Number";
    } else {
        return "number"
    };
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {

    let pilotStatus = document.getElementById("pilotStatus");
    let copilotStatus = document.getElementById("copilotStatus");
    let fuelStatus = document.getElementById("fuelStatus");
    let cargoStatus = document.getElementById("cargoStatus");
    let launchStatus = document.getElementById("launchStatus");
    let faultyItems = document.getElementById("faultyItems")


    if (validateInput(pilot) === "empty" || validateInput(copilot) === "empty" || validateInput(fuelLevel) === "empty" || validateInput(cargoLevel) === "empty"){
        alert("\nAll fields are required!");
    } else if (validateInput(fuelLevel) === "Not A Number" || validateInput(cargoLevel) === "Not A Number"){
        alert("\nFuel Level and Cargo Mass must be numbers.");
    } else if (validateInput(pilot) === "number" || validateInput(copilot) === "number"){
        alert("\nPilot & Copilot names must be words.");
    } else {
        list.style.visibility = "visible";
    }

    //fuelLevel = Number(fuelLevel);

    pilotStatus.innerHTML = `Pilot ${pilot} is ready to launch.`;
    copilotStatus.innerHTML = `Copilot ${copilot} is ready to launch.`;
    //fuelStatus.innerHTML = `You typed ${fuelLevel}`;
    


    // if (fuelLevel < 10,000){
    //     fuelStatus.innerHTML = `Insufficient fuel for launch.`;
    //     fuelStatus.style.color = "red";
    //     launchStatus.innerHTML = `Shuttle not ready for launch!`;
    //     launchStatus.style.color = "red";
    // } else if (cargoLevel > 10,000){
    //     cargoStatus.innerHTML = `Cargo exceeds weight limit.`;
    //     cargoStatus.style.color = "red";
    //     launchStatus.innerHTML = `Shuttle not ready for launch!`;
    //     launchStatus.style.color = "red";
    // } else if (cargoLevel > 10,000 || fuelLevel < 10,000){
    //     launchStatus.innerHTML = `Shuttle not ready for launch!`;
    //     launchStatus.style.color = "red";
    // } else if (fuelLevel > 10,000 && cargoLevel < 10,000){
    //         fuelStatus.innerHTML = `Fuel level: ${fuelLevel}L is sufficient for launch.`;
    //         cargoStatus.innerHTML = `Cargo mass: ${cargoLevel} within weight limit for launch.`;
    //         launchStatus.innerHTML = `Shuttle ready for launch!`;
    //         launchStatus.style.color = "green";
    // }


    //fuel level conditionals

   if(fuelLevel > 10000) {
        fuelStatus.innerHTML = `Fuel level: ${fuelLevel}L is sufficient for launch.`;
        //fuelStatus.style.color = "green";
   } else {
        fuelStatus.innerHTML = `Insufficient fuel for launch.`;
        fuelStatus.style.color = "red";
        // launchStatus.innerHTML = `Shuttle not ready for launch!`;
        // launchStatus.style.color = "red";
   }

   //cargo level conditionals

    if(cargoLevel < 10000) {
        cargoStatus.innerHTML = `Cargo mass: ${cargoLevel}kg within weight limit for launch.`;
       // cargoStatus.style.color = "green";
    } else {
        cargoStatus.innerHTML = `Cargo exceeds weight limit.`;
        cargoStatus.style.color = "red";
        // launchStatus.innerHTML = `Shuttle not ready for launch!`;
        // launchStatus.style.color = "red";
   }

   //fuel level and cargo level conditionals for launch status

   if (fuelLevel > 10000 && cargoLevel < 10000){
    launchStatus.innerHTML = `Shuttle ready for launch!`;
    launchStatus.style.color = "green";
    } else {
    launchStatus.innerHTML = `Shuttle is not ready for launch!`;
    launchStatus.style.color = "red";
}


    
}


async function myFetch() {
    //pull in planets.json
    let planetsReturned = await fetch('https://handlers.education.launchcode.org/static/planets.json').then( function(response) { return response.json() });
        
   // let planetsFetched = await response.json()

    return planetsReturned;
}


function pickPlanet(planets) {
    let randomPlanetNumber = Math.floor(Math.random() * planets.length);

    return planets[randomPlanetNumber];
    
    //math.random random number generator
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
