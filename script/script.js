// Link listas:
// https://api.nytimes.com/svc/books/v3/lists/names.json?api-key=pGTysXfbyMzk5IpwygA7yvcbUnb6QAbT

// Link Libros en lista:
//https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=pGTysXfbyMzk5IpwygA7yvcbUnb6QAbT



        







window.addEventListener("load", function() {

    const listLink = "https://api.nytimes.com/svc/books/v3/lists/names.json?api-key=pGTysXfbyMzk5IpwygA7yvcbUnb6QAbT";

    fetch(listLink)
      .then(response => response.json())
      .then(data => {
        
        let headBox = document.createElement("header");
            headBox.style.display = "block";

        let boxImg = document.createElement("figure");
            boxImg.style.marginLeft = "8px";


        let titleImg = document.createElement("img");
            titleImg.src = "./assets/title.png";
            titleImg.style.height = "100%";
            titleImg.style.width = "75%";
            titleImg.style.objectFit = "contain";

        let titleList = document.createElement("h3");

        let mainBox = document.createElement("main");
            mainBox.style.display = "flex";
            mainBox.style.flexFlow = "row wrap";
            mainBox.style.justifyContent = "left";
            mainBox.style.alignItems = "flex-start";
            
        let footBox = document.createElement("footer");
            footBox.style.display = "block";
            footBox.style.margin = "8px";
            footBox.style.marginBottom = "20px";
            footBox.style.marginTop = "30px";

        let nytImg = document.createElement("img");
            nytImg.src = "./assets/poweredby_nytimes_200a.png";
            nytImg.style.cursor = "pointer";
            nytImg.addEventListener("click", function() {
                window.location.href = "https://developer.nytimes.com/";
            })


        document.body.appendChild(headBox);
        headBox.appendChild(titleList);
        headBox.appendChild(boxImg);   
        boxImg.appendChild(titleImg);
        document.body.appendChild(mainBox);
        document.body.appendChild(footBox);
        footBox.appendChild(nytImg);

        for (i = 0; i < data.results.length; i++) {

            let displayName = data.results[i].display_name;
            let linkName = data.results[i].list_name_encoded;
            let oldest = data.results[i].oldest_published_date;
            let newest = data.results[i].newest_published_date;
            let updated = data.results[i].updated;

            let item = document.createElement("article");
                item.style.width = "225px";
                item.style.height = "auto";
                item.style.margin = "8px";
                item.style.border = "1px solid rgb(231, 231, 231)";
                item.style.boxShadow = "1px 1px 2px 0px rgb(200, 200, 200)";
                item.style.paddingTop = "17px";
                item.style.paddingLeft = "13px";
                item.style.paddingRight = "13px";
                item.style.paddingBottom = "13px";
            let titleItm = document.createElement("p");
                titleItm.innerHTML = displayName;
                titleItm.style.fontSize = "1.2rem";
                titleItm.style.color = "rgb(80, 80, 80)";
                titleItm.style.marginTop = "5px";
            let bar = document.createElement("hr");
                bar.style.borderTop = "0";
                bar.style.borderBottom = "1px solid #eee";
                bar.style.marginBottom = "22px";
            let oldItm = document.createElement("p");
                oldItm.innerHTML = "Oldest: "+oldest;
                oldItm.style.fontSize = "0.7rem";
                oldItm.style.color = "rgb(120, 120, 120)";
                oldItm.style.margin = "0";
                oldItm.style.marginBottom = "7px";
            let newItm = document.createElement("p");
                newItm.innerHTML = "Newest: "+newest;
                newItm.style.fontSize = "0.7rem";
                newItm.style.color = "rgb(120, 120, 120)";
                newItm.style.margin = "0";
                newItm.style.marginBottom = "7px";
            let updItm = document.createElement("p");
                updItm.innerHTML = "Updated: "+updated;
                updItm.style.fontSize = "0.6rem";
                updItm.style.color = "rgb(120, 120, 120)";
                updItm.style.margin = "0";
                updItm.style.marginBottom = "15px";
            let btn = document.createElement("button");
                btn.innerHTML = "READ MORE! ►";
                btn.style.color = "rgb(80, 80, 80)";
                btn.style.fontSize = "0.7rem";
                btn.style.backgroundColor = "white";
                btn.style.border = "1px solid rgb(231, 231, 231)";
                btn.style.boxShadow = "1px 1px 2px 0px rgb(200, 200, 200)";
                btn.style.borderRadius = "3px";
                btn.style.padding = "10px";
                btn.style.cursor = "pointer";
                btn.addEventListener("click", function() {
                    window.location.href = "../pages/list.html";
                })

            mainBox.appendChild(item);
            item.appendChild(titleItm);
            item.appendChild(bar);
            item.appendChild(oldItm);
            item.appendChild(newItm);
            item.appendChild(updItm);
            item.appendChild(btn);

        };
/*
        let paragraph = document.createElement("p");
            paragraph.style.color = "green";
            paragraph.style.fontSize = "1.2em";
            document.body.appendChild(paragraph);
            paragraph.innerText = `
            Nombre de usuario: ${data.login}
  
            Número de repositorios: ${data.public_repos}
            `;
            let avatarGit = document.createElement("img");
            avatarGit.style.borderRadius = "40px";
            document.body.appendChild(avatarGit);
            avatarGit.src = data.avatar_url;  
            */
            document.getElementById("spinner").classList.toggle("spinner2");
        })
      .catch(error => console.log(error));
    });





    /*
fetch("https://fakestoreapi.com/products")
    .then(response=>response.json())
    .then(elementCard=>{
        let paragraph = document.createElement("p");
            document.body.appendChild(paragraph);
            paragraph.innerText = `
            Título: ${elementCard.title}
            
            Descripción: ${elementCard.description}

            Precio: ${elementCard.price}

        `;
        let photo = document.createElement("img");
            document.body.appendChild(photo);
            photo.src = elementCard.image;
    })
*/