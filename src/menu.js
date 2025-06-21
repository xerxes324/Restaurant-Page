export const menu = ()=>{
    const content = document.getElementById("content")
    content.innerHTML = "";

    const maindiv = document.createElement("div");
    maindiv.classList.add("menudiv");
    content.append(maindiv)

    const div1 = document.createElement("div");
    const div2 = document.createElement("div");
    const div3 = document.createElement("div");
    const div4 = document.createElement("div");
    const div5 = document.createElement("div");

    const outerarr = [div1,div2,div3,div4,div5];

    outerarr.forEach(element => {
        element.classList.add("menu-inner-divs")
    });

    // div1.innerHTML = "Lembas Bread";
    // div2.innerHTML = "Red Meat off the bone"
    // div3.innerHTML = "Fish and nasty chips"
    // div4.innerHTML = "Salted Pork"
    // div5.innerHTML = "Just tea, thank you"
    maindiv.append(div1,div2,div3,div4,div5); 
    
    const innerdiv1 = document.createElement("div");
    const innerdiv2 = document.createElement("div");
    const innerdiv3 = document.createElement("div");
    const innerdiv4 = document.createElement("div");
    const innerdiv5 = document.createElement("div");

    const innerarr = [innerdiv1,innerdiv2,innerdiv3,innerdiv4,innerdiv5];

    innerarr.forEach(element => {
        element.classList.add("menu-desc");
    });

    innerdiv1.textContent = "Elvish travel bread from Lothlórien — lightly sweet, dense, and made to last. Just one piece will keep you going for hours. Wrapped in leaf, baked with care.";
    innerdiv2.textContent = "Open-flame roast, served hot and bone-in. The kind of meal once longed for in the depths of Moria.";
    innerdiv3.textContent = "Fried river fish with rough-cut chips. Cooked, unlike the raw kind found in dark places. Definitely not Gollum’s version."
    innerdiv4.textContent = "Served warm and plentiful, just like the hobbits found it in the ruins of Isengard. Particularly good, they say."
    innerdiv5.textContent = "Southfarthing-grown leaves, steeped simply. The sort of cup you'd find on any quiet morning in Hobbiton."

    div1.appendChild(innerdiv1)
    div2.appendChild(innerdiv2)
    div3.appendChild(innerdiv3)
    div4.appendChild(innerdiv4)
    div5.appendChild(innerdiv5)


    const innerimg1  = document.createElement("div");
    const innerimg2  = document.createElement("div");
    const innerimg3  = document.createElement("div");
    const innerimg4  = document.createElement("div");
    const innerimg5  = document.createElement("div");

    innerimg1.classList.add("image1");
    innerimg2.classList.add("image2");
    innerimg3.classList.add("image3");
    innerimg4.classList.add("image4");
    innerimg5.classList.add("image5");

    const imgarr = [innerimg1,innerimg2,innerimg3,innerimg4,innerimg5]
    imgarr.forEach(element => {
        element.classList.add("imagecommonstyle");
    });

    div1.append(innerimg1);
    div2.append(innerimg2);
    div3.append(innerimg3);
    div4.append(innerimg4);
    div5.append(innerimg5);


}