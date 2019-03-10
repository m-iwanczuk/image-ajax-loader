/* 

Za pomoca funkcji felch pobierz obiekt pierwszego obrazka z adresu: 
https://jsonplaceholder.typicode.com/photos/1

Stworz element figure z klasą single-post. 

Stworz element img - wartosc atrybutu src ustaw url pobranego obiektu, 

jako tekst alt ustaw wartosc title pobranego obiektu 

Stworz element figcaption. Jako tresc ustaw wartosc atrybuty title bobranego obiektu.

Elementy img i figcaption dodaj (appendChild) do elementu figure.

Element Figure dodaj do kontenera z id #image-holder.

*/


function getPost(i, paginator) {

    fetch('https://jsonplaceholder.typicode.com/photos/' + i )
        .then(resp => resp.json())
        .then(json => {

            let imageHolderFigure = document.createElement('figure');
            imageHolderFigure.classList.add('single-post');

            let imgHolder = document.createElement('img');
            // imageHolder.classList.add('image');
            imgHolder.setAttribute('src', json.url); 
            imgHolder.setAttribute('alt', json.title); 

            let figcaptionHolder = document.createElement('figcaption');
            figcaptionHolder.innerText = json.id + '. ' + json.title

            imageHolderFigure.appendChild(imgHolder);
            imageHolderFigure.appendChild(figcaptionHolder);

            console.log(imageHolderFigure);

            document.getElementById('image-holder').appendChild(imageHolderFigure);
            

            if(i>=(paginator+10)) return;

            getPost(++i, paginator);

        });
}

getPost(1, 0);


document.getElementById('more-image-button').addEventListener('click', function(){

    let postCount = document.getElementsByClassName('single-post').length;
    getPost((postCount+1), postCount);
});
