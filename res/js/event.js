function displayDropdown(ev){
    console.log("EVENT!!!!!");
    let dropdown = document.getElementsByClassName("dropdown").item("0");
    dropdown.classList.toggle("hide");
}

let pic = document.getElementById("profile-pic");
pic.addEventListener('click', displayDropdown);