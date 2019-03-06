const dinosaurs = [
    {
        dinoType: 't-rex',
        name:'Sam'
    },
    {
        dinoType: 'steogsaurus',
        name:'Greg'
    },
    {
        dinoType: 'velociraptor',
        name:'Josh'
    }
];

//loop over dinosaurs
//build up a domstring
//print domstring to the dom
const printToDom = (divId, textToPrint) => {
    const getElement = document.getElementById(divId);
    getElement.innerHTML = textToPrint;

}

const buildDinosaurs = () => {
    let domString = '';
    for (let i = 0; i < dinosaurs.length; i++){
        domString += `<div class="dinosaur">`;
        domString += `<p>${dinosaurs[i].name}</p>`;
        domString += `<h3>${dinosaurs[i].dinoType}</h3>`;
        domString += '</div>'
        // console.log(dinosaurs[i].dinoType);  
        printToDom('display', domString);
    }
};

const init = () => {
    buildDinosaurs();
};

init();