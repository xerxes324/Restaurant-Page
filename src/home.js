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

    const workhours = document.createElement("p");
    workhours.classList.add("workhours-style")
    workhours.textContent = "Working hours ";

    content.append(heading,desc,workhours);

    const restauranttimings = [
        {
            Day : "Sunday",
            Hours : "6am - 11pm"
        },
        {
            Day : "Monday",
            Hours : "7am - 9pm"
        },
        {
            Day : "Tuesday",
            Hours : "7am - 9pm"
        },
        {
            Day : "Wednesday",
            Hours : "7am - 9pm"            
        },
        {
            Day : "Thursday",
            Hours : "7am - 9pm"            
        },
        {
            Day : "Friday",
            Hours : "7am - 9pm"            
        },
        {
            Day : "Saturday",
            Hours : "9am - 5pm"
        }
    ]

    restauranttimings.forEach(e => {
        const timings = document.createElement("h3");
        timings.textContent = e.Day + ":" + e.Hours;
        timings.classList.add("descstyle","timings-style");
        content.append(timings);
    });

    const location = document.createElement("h2")
    location.textContent = "12 Hobbiton Hill Lane, Matamata 3472, Waikato, New Zealand";
    location.classList.add("locationstyle")
    content.append(location);

    const footer = document.createElement("div")
    footer.classList.add("footer")
    const footnote = document.createElement("h3");
    footnote.textContent = "© 2025 Elevenses · Matamata, New Zealand ·  Second breakfast served daily ";
    footer.append(footnote);
    content.append(footer);
}
