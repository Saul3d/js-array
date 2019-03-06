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

//total of five assignments
//buildAssignment Cards - Loop over the assignments and make a domString
//reuse the printToDom function to displayt the domString

const assignments = [
    {
        title: 'product cares',
        dueDate: '03-05-2019',
        topic: 'HTML/CSS',
        notes: 'Use flexbox',
        assignmentURL:'http://www.marvel.com'
    },
    {
        title: 'Build a Function',
        dueDate: '03-06-2019',
        topic: 'JS',
        notes: 'javascript functions',
        assignmentURL:'http://www.marvel.com'
    },
    {
        title: 'Build an Array',
        dueDate: '03-07-2019',
        topic: 'JS',
        notes: 'arrays',
        assignmentURL:'http://www.marvel.com'
    },
    {
        title: 'Build an Object',
        dueDate: '03-08-2019',
        topic: 'JS',
        notes: 'javascript objects',
        assignmentURL:'http://www.marvel.com'
    },
    {
        title: 'Create a Repo',
        dueDate: '03-04-2019',
        topic: 'console',
        notes: 'linux commands',
        assignmentURL:'http://www.imagecomics.com'
    },
    {
        title: 'Put it all together',
        dueDate: '03-09-2019',
        topic: 'HTML/CSS/JS',
        notes: 'All the skills',
        assignmentURL:'http://www.dccomics.com'
    },
];

const buildAssignments = () => {
    let domString = ``;
    for(let i = 0; i < assignments.length; i++){
        domString += `<div class="container">`;
        domString += `<h3>${assignments[i].title}</h3>`;
        domString += `<h2>Due Date:${assignments[i].dueDate}</h2>`;
        domString += `<p>${assignments[i].topic}</p>`;
        domString += `<p>${assignments[i].notes}</p>`;
        domString += `<a href=${assignments[i].assignmentURL}>link</a>`;
        domString += `</div>`;
        printToDom('assignments', domString);
    }
    
}



const init = () => {
    buildDinosaurs();
    buildAssignments();
};


init();