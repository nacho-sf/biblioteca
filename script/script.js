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
            boxImg.style.marginLeft = 0;

        let titleImg = document.createElement("img");
            titleImg.src = "./assets/title.png";
            titleImg.style.height = "100%";
            titleImg.style.width = "75%";
            titleImg.style.objectFit = "contain";

        let titleList = document.createElement("h3");

        let mainBox = document.createElement("main");
            mainBox.style.display = "flex";
            mainBox.style.flexFlow = "row wrap";
            

        document.body.appendChild(headBox);
        headBox.appendChild(titleList);
        headBox.appendChild(boxImg);   
        boxImg.appendChild(titleImg);
        document.body.appendChild(mainBox);

        for (i = 0; i < data.results.length; i++) {

            let displayName = data.results[i].display_name;
            let linkName = data.results[i].list_name_encoded;
            let oldest = data.results[i].oldest_published_date;
            let newest = data.results[i].newest_published_date;
            let updated = data.results[i].updated;

            let item = document.createElement("article");
            let titleItm = document.createElement("h3");
            titleItm.innerHTML = "Título largo";
            let oldItm = document.createElement("p");
            let newItm = document.createElement("p");
            let updItm = document.createElement("p");
            let btn = document.createElement("button");

            mainBox.appendChild(item);
            item.appendChild(titleItm);
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
      .catch(err => console.log(error));
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