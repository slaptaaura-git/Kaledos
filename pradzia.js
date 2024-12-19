// Prisijungimo funkcija, kuri nustato vartotojo vardą
function showLogin(person) {
    // Nustatome, kuris puslapis bus atidarytas pagal pasirinkimą
    sessionStorage.setItem("person", person);
    
    // Parodome prisijungimo langą
    document.getElementById("login-modal").style.display = "block";
}

// Uždaryti prisijungimo langą
function closeLogin() {
    document.getElementById("login-modal").style.display = "none";
}

// Pateikiame prisijungimo formą
function loginSubmit(event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Kiekvienam vartotojui unikalūs vardai ir slaptažodžiai
    const users = {
        Daiva: "daiva123",
        Laura: "laura456",
        Vyginte: "vyginte789",
        Guste: "guste741",
        Kamile: "kamile852",
        Gerda: "gerda963",
        Silvija: "silvija654"
    };

    // Tikriname, ar vartotojo vardas ir slaptažodis teisingi
    if (users[username] && users[username] === password) {
        // Jei teisingi, nukreipiame į atitinkamą puslapį
        window.location.href = sessionStorage.getItem("person") + ".html"; // Perkelia į puslapį su tuo vardu
    } else {
        document.getElementById("error-message").classList.remove("hidden"); // Klaidos pranešimas
    }
}
