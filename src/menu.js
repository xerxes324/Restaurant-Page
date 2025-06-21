export const menu = ()=>{
    
    const content = document.getElementById("content")
    content.innerHTML = "";

    const maindiv = document.createElement("div");
    maindiv.classList.add("menudiv");
    content.append(maindiv)
    
    const menuitems = [
        {
            title :"Lembas Bread",
            desc : "Elvish travel bread from Lothlórien ; lightly sweet, dense, and made to last. Just one piece will keep you going for hours. Wrapped in leaf, baked with care.",
            imageclass : "image1",
            price : "$5"
        },
        {
            title :"Red Meat off the bone",
            desc : "Open-flame roast, served hot and bone-in. The kind of meal once longed for in the depths of Moria.",
            imageclass : "image2",
            price : "$13"
        },
        {
            title :"Fish and nasty Chips",
            desc : "Fried river fish with rough-cut chips. Cooked, unlike the raw kind found in dark places. Definitely not Gollum’s version.",
            imageclass : "image3",
            price : "$13"
        },
        {
            title :"Salted Pork",
            desc : "Served warm and plentiful, just like the hobbits found it in the ruins of Isengard. Particularly good, they say.",
            imageclass : "image4",
            price : "$15"
        },
        {
            title :"Just tea, thank you",
            desc : "Southfarthing-grown leaves, steeped simply. The sort of cup you'd find on any quiet morning in Hobbiton.",
            imageclass : "image5",
            price : "$3"
        }
    ]

    menuitems.forEach(e => {
        const horizontaldivs = document.createElement("div");
        horizontaldivs.classList.add("menu-inner-divs");

        const innerdiv = document.createElement("div");
        const heading = document.createElement("h2");
        const para = document.createElement("p");
        const price = document.createElement("h4");
        const imagediv = document.createElement("div");

        heading.textContent = e.title;
        para.textContent = e.desc;
        price.textContent = e.price;

        heading.classList.add("menuheading");
        para.classList.add("menudesc");
        imagediv.classList.add(e.imageclass);
        imagediv.classList.add("imagecommonstyle")

        innerdiv.append(heading,para,price);
        horizontaldivs.append(innerdiv,imagediv);
        maindiv.append(horizontaldivs);
    });
}
