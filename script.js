let firstName = prompt("Ismingizni kiriting:");
let lastName = prompt("Familyangizni kiriting:");
let age = prompt("Yoshingizni kiriting:");
let sizeChoice = prompt("\n1) Katta\n2) Kichik");

if (!firstName || !lastName || !age || !sizeChoice) {
    alert("Iltimos, barcha ma'lumotlarni kiriting!");
} else if (sizeChoice !== "1" && sizeChoice !== "2") {
    alert("Iltimos, 1 yoki 2 ni tanlang");
} else {
    let fontSize = sizeChoice === "1" ? "20px" : "10px";

    let result = `
        <p>Ism: <span style="font-size: ${fontSize}; color: black;">${firstName}</span></p>
        <p>Familiya: <span style="font-size: ${fontSize}; color: black;">${lastName}</span></p>
        <p>Yosh: <span style="font-size: ${fontSize}; color: black;">${age}</span></p>
    `;

    document.body.innerHTML = `
        <div style="position: absolute; top: 0; left: 0; margin: 10px; line-height: 1.5;">
            ${result}
        </div>
    `;
}