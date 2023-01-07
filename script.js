// Write your JavaScript code here!

//const { formSubmission, myFetch } = require("./scriptHelper");

window.addEventListener("load", function(){

    myFetch().then(function(planets) {    
        let planet = pickPlanet(planets);    
        addDestinationInfo(document, planet.name, planet.diameter, planet.star, planet.distance, planet.moons, planet.image);  
    });

    let pilotInput = document.querySelector("input[name=pilotName]");
    let copilotInput = document.querySelector("input[name=copilotName]");
    let fuelLevelInput = document.querySelector("input[name=fuelLevel]");
    let cargoMassInput = document.querySelector("input[name=cargoMass]");
    let button = document.getElementById("formSubmit");
    let faultyItems = document.getElementById("faultyItems");
    let form = document.querySelector("form");

    //fuelLevelInput = Number(fuelLevelInput);
    
    faultyItems.style.visibility = "hidden";

    //form.addEventListener('submit', function(event){
    form.addEventListener("submit", function(event){
        event.preventDefault()
        // let validatedPilotInput = validateInput(pilotInput.value);
        // let validatedCopilotInput = validateInput(copilotInput.value);
        // let validatedFuelLevel = validateInput(fuelLevelInput.value);
        // let validatedCargoMass = validateInput(cargoMassInput.value);

        formSubmission(document, faultyItems, pilotInput.value, copilotInput.value, fuelLevelInput.value, cargoMassInput.value)

        console.log(fuelLevelInput);

    })

});

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;