


let btn = document.getElementById("btn");
btn.addEventListener("click", randomFunction);

function randomFunction () {
    let randomize = Math.floor(Math.random() * data.length);

    let idDisplay = document.getElementById("id");
    idDisplay.innerHTML = `${data[randomize].id.name}`;

    let nameDisplay = document.getElementById("Name");
    nameDisplay.innerHTML = `${data[randomize].name.first} ${data[1].name.last}`

    let genderDisplay = document.getElementById("Gender");
    genderDisplay.innerHTML = `${data[randomize].gender}`;

    let dobDisplay = document.getElementById("DOB");
    dobDisplay.innerHTML = `${data[randomize].dob.date}` 

    let locationDisplay = document.getElementById("Location");
    locationDisplay.innerHTML = `${data[randomize].location.country} - ${data[randomize].location.state} - ${data[randomize].location.city} - ${data[randomize].location.street.name} - ${data[randomize].location.street.number}`

    let emailDisplay = document.getElementById("Email");
    emailDisplay.innerHTML = `${data[randomize].email}`;

    let numberDisplay = document.getElementById("PhoneNumber");
    numberDisplay.innerHTML = `${data[randomize].phone}`

    let imageDisplay = document.getElementById("image");
    imageDisplay.src = `${data[randomize].picture.medium}`;

}