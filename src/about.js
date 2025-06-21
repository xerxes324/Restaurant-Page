export const about = ()=>{

    const content = document.getElementById("content")
    content.innerHTML = "";
    
    const abouthead = document.createElement("h1");
    abouthead.textContent = "About Us";

    const aboutdiv = document.createElement("div");
    const aboutdesc = document.createElement("p")

    aboutdesc.textContent = "Nestled in the heart of Matamata, Elevenses offers a warm, rustic dining experience inspired by the rolling hills of the Shire. Our menu draws from the comforts of Middle-earth : fire-roasted meats worthy of a dwarf’s feast, Lembas-inspired bread, and Southfarthing-grown teas. Whether you're stopping in after an unexpected journey or just in time for elevenses, there's always a place at our table. Come hungry. Leave with stories."
    aboutdiv.append(aboutdesc)
    abouthead.classList.add("about-header")
    aboutdiv.classList.add("aboutdiv-style")

    const contact = document.createElement("h2");
    contact.textContent = " Contact us at 647-123-4567"
    const email = document.createElement("h2");
    email.textContent = "elevenses.nz@gmail.com";
    contact.classList.add("contact");
    email.classList.add("mail");

    content.append(abouthead,aboutdiv,contact,email);
}