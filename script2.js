const responseCallBack = (response) => response.json();

const catchError = (error) => console.log(error);

const resultCallBack = (result) => display(result.map(obj => Person.fromObj(obj)));


fetch('https://62860d21f0e8f0bb7c0f434d.mockapi.io/persons').then(responseCallBack).then(resultCallBack).catch(catchError);

function display (array){
    const container = document.createElement('div');

    for (const element of array) {
        const card = document.createElement('div');
        card.classList.add('card')


        const photo = document.createElement('img');
        photo.src = element.img;
        photo.classList.add('image');
        card.appendChild(photo);

        const infoContainer = document.createElement('span');
        const infoText = document.createTextNode('Nome: ' + element.name);
        infoContainer.appendChild(infoText);
        card.appendChild(infoContainer);

        const surnameContainer = document.createElement('span');
        // surnameContainer.classList.add('disable');
        surnameContainer.style.display = 'none';
        const surnameText = document.createTextNode('Nome: ' + element.surname);
        surnameContainer.appendChild(surnameText);
        card.appendChild(surnameContainer);

        const expandButton = document.createElement('button');
        const textButton  = document.createTextNode('Visualizza');
        expandButton.onclick = () => viewCallback(surnameContainer)
        expandButton.appendChild(textButton);
        card.appendChild(expandButton);
        
        container.appendChild(card)
    }
    document.body.appendChild(container)
}

function viewCallback(container) {
    // container.classList.toggle('disable')
    if (container.style.display==='none') {
        container.style.display='inline'
    } else {
        container.style.display='none'
    }
}

// function viewAllInformation (array){
//     const container = document.createElement('div');

//     for (const element of array) {
//         const card = document.createElement('div');
//         card.classList.add('card')


//         const photo = document.createElement('img');
//         photo.src = element.img;
//         photo.classList.add('image');
//         card.appendChild(photo);

//         const infoContainer = document.createElement('span');
//         const infoText = document.createTextNode('Nome: ' + element.name + ' ' + 'Cognome: ' + element.surname);
//         infoContainer.appendChild(infoText);
//         card.appendChild(infoContainer);

//         const expandButton = document.createElement('button');
//         const textButton  = document.createTextNode('Visualizza');
//         expandButton.onclick = () => viewCallback 
//         expandButton.appendChild(textButton);
//         card.appendChild(expandButton);
        
//         container.appendChild(card)
//     }
//     document.body.appendChild(container)
// }


// const viewCallback = () => {
//     viewAllInformation(result.map(obj => Person.fromObj(obj)));
// }

// const viewPerson = (id) => {
//     const viewUrl = 'https://62860d21f0e8f0bb7c0f434d.mockapi.io/students/' + id;
//     fetch(viewUrl)
//     .then(responseCallBack)
//     .then(viewCallback)
// }
