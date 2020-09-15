const fs = require('fs');


let toDoList = [];

let saveDB = () => {

    let data = JSON.stringify(toDoList)

    fs.writeFile('db/data.json', data, (err) => {
        if (err) throw new Error("It couldn't be record");
        console.log("The file has been saved!!");
    })

}

const loadDB = () => {

    try {
        toDoList = require('../db/data.json')
    } catch (error) {
        toDoList = []
    }

    // console.log(listToDo);

}

const create = (description) => {

    loadDB();

    let toDo = {
        description,
        completed: false
    };

    toDoList.push(toDo);

    saveDB();

    return toDo
}

const getList = () => {
    loadDB()
    return toDoList
};

module.exports = {
    create,
    getList
}