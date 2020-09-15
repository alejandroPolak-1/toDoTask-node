const fs = require('fs');


let toDoList = [];

let saveDB = () => {

    let data = JSON.stringify(toDoList)

    fs.writeFile('db/data.json', data, (err) => {
        if (err) throw new Error("It couldn't be record");
        console.log("The file has been saved!!");
    })

}

const create = (description) => {

    let toDo = {
        description,
        completed: false
    };

    toDoList.push(toDo);

    saveDB();

    return toDo
}

module.exports = {
    create
}