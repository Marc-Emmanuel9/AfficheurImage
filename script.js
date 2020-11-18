//Sauvegarde des données tapé dans les input.
let url = document.querySelector('.url');
let caption = document.querySelector('.caption');

//Sauvegarde des balises de stockage.
let select = document.querySelector('.element');
let div = document.querySelector('.block');

let listImageAdd = [];

//Taille de l'image.
let widthI = 372;
let heightI = 323;

//Fonction simple pour ajouter un élément à une liste.
function addToList(list, elt){
    list.push(elt);
}

//Fonction qui renvoie une figure en fonction de sa légende.
function getElementByCaption(list, caption){
    for(let i = 0; i < list.length; i++){
        if(list[i][1] == caption){
            return list[i][0];
        }
    }
}

document.querySelector('.bouttonAjout').addEventListener('click', function(){

    let isCorrect = false;        

    if(url.value != '' && caption.value != ''){
        isCorrect = true;
    }

    if(isCorrect){
        //Ajout de l'image en question à une figure.
        let figure = document.createElement('figure');

        let figcaption = document.createElement('figcaption');
        figcaption.textContent = caption.value;

        let img = document.createElement('img');
        img.src = url.value;
        img.width = widthI;
        img.height = heightI;

        figure.appendChild(img);
        figure.appendChild(figcaption);

        div.appendChild(figure);

       
        addToList(listImageAdd, [figure, caption.value]);

        //Ajout de l'image à la liste déroulante pour la suppression.
        let opt = document.createElement('option');
        opt.textContent = caption.value;
        opt.className = caption.value;

        select.appendChild(opt);
    }else{
        alert('Le formulaire est mal remplis !!');
    }
});

document.querySelector('.bouttonSupression').addEventListener('click', function(){

    let isCorrect = false;        

    if(listImageAdd.length > 0){
        isCorrect = true;
    }

    if(isCorrect){
        div.removeChild(getElementByCaption(listImageAdd, select.value));
        let opt = document.querySelector('.'+select.value);
        select.removeChild(opt);

    }else{
        alert('Aucune image selectionné');
    }
});