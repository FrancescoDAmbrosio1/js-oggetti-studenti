
// creo array di oggetti vuoto
const students = [
    {
        name: 'Pino',
        surname: 'Lisciani',
        age: 23,
    },
    {
        name: 'Ludovica',
        surname: 'Massimino',
        age: 27,
    },
    {
        name: 'Lorenzo',
        surname: 'Rossi',
        age: 16,
    },
    {
        name: 'Giovanni',
        surname: 'Bianchi',
        age: 17,
    },
    {
        name: 'Cristina',
        surname: 'Bruschi',
        age: 21,
    },
]

console.log(students);
//PER OGNI oggetto dell'array pusho i valori all'interno della tabella
for(let i = 0; i < students.length; i++){
    const currentStudent = students[i] 
    //mi recupero il nome dell'oggetto i
    const name = currentStudent.name    //object   
    //mi recupero il cognome dell'oggetto i
    const surname = currentStudent.surname  //object
    //mi recupero l'età dell'oggetto i
    const age = currentStudent.age  //object
    //inserisco studende nella tabella
    addStudentInTable(currentStudent) 
}
const form = document.getElementById('form-new-student')
form.addEventListener('submit', addStudentInArray)

//funzione per stampare membro sul DOM
function addStudentInTable(currentStudent){
    //prendo dal DOM il body della tabella 
    const tableBodyElement = document.getElementById('table-body')
    //creo l'HTML da inserire nel DOM
    const currentTableBody =`
    <tr>
    <td>${currentStudent.name}</td>
    <td>${currentStudent.surname}</td>
    <td>${currentStudent.age}</td>
    </tr>`
    tableBodyElement.innerHTML += currentTableBody
}

//funzione per pushare studente dal form all'array
function addStudentInArray(e){
    //disabilitare il funzionamento del submit
    e.preventDefault()
    //prendo dal DOM i campi del form
    const name = document.getElementById('name').value;
    const surname = document.getElementById('surname').value;
    const age = document.getElementById('age').value;
    //creo il nuovo studente
    const newStudent = {
        name: name,
        surname: surname,
        age: age,
    }
    console.log(newStudent);
    //pusho il nuvo studente nell'array
    students.push(newStudent)
    console.log(students);
    addStudentInTable(newStudent)
}