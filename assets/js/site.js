// write cool JS hwere!!
const userSelect = document.getElementById("userSelect");
const nameInput = document.getElementById("nameInput");
const ageInput = document.getElementById("ageInput");
const colorInput = document.getElementById("colorInput");
const saveButton = document.getElementById("saveButton");

// Event listener: vis data for valgt bruger
function userSelectChange() {
    const selectedUser = userSelect.value;
    console.log('change user to: ' + selectedUser);

    // TODO: Hent data fra localStorage og vis i formularen
    const userData = JSON.parse(localStorage.getItem(selectedUser));

    if (userData) {
        nameInput.value = userData.name || "";
        ageInput.value = userData.age || "";
        colorInput.value = userData.color || "#000000 ";
        document.body.style.backgroundColor = userData.color || "#000000"; 
    } else {
        nameInput.value = "";
        ageInput.value = "";
        colorInput.value = "#000000";
        document.body.style.backgroundColor = "#000000"; 
    }
};

// Event listener: gem data fra formularen
saveButton.addEventListener("click", () => {
    console.log("save data");

    const selectedUser = userSelect.value;
    const name = nameInput.value;
    const age = ageInput.value;
    const color = colorInput.value;

    // TODO: Gem data i localStorage for den valgte bruger
    const userData = { name, age, color };
    localStorage.setItem(selectedUser, JSON.stringify(userData));

    console.log("Saved:", selectedUser, userData);
});

// Vis data for første bruger ved load
window.onload = userSelectChange;


userSelect.addEventListener("change", userSelectChange);
colorInput.addEventListener("input", () => {
    document.body.style.backgroundColor = colorInput.value;
});
