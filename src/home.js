export const home = ()=>
{
    const content = document.getElementById("content")
    content.innerHTML = "";
    
    const heading = document.createElement("h1");
    const desc = document.createElement("p");

    heading.innerHTML = "Elevenses";
    desc.textContent = " A cozy, hobbit-inspired retreat serving hearty meals and ale straight from the Shire"
    
    heading.classList.add("headingstyle");
    desc.classList.add("descstyle");

    content.append(heading,desc);

}
