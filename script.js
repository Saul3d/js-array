const dinosaurs = [
    {
        dinoType: 't-rex'
    },
    {
        dinoType: 'steogsaurus'
    },
    {
        dinoType: 'velociraptor'
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
        domString += `<h3>${dinosaurs[i].dinoType}</h3>`;
        // console.log(dinosaurs[i].dinoType);  
        printToDom('display', domString);
    }
};

const init = () => {
    buildDinosaurs();
};

init();