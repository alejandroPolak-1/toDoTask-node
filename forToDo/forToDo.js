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

    return toDo;
}

const getList = () => {
    loadDB()
    return toDoList
};

const update = (description, completed = true) => {
    loadDB();

    let index = toDoList.findIndex(task => task.description === description)

    if (index >= 0) {
        toDoList[index].completed = completed;
        saveDB();
        return true
    } else {
        return false
    }
}

const deleteTask = (description) => {
    loadDB();

    let newToDoList = toDoList.filter(task => task.description !== description)

    if (newToDoList.length === toDoList.length) false
    else {
        toDoList = newToDoList
        saveDB()
        return true
    }


}


module.exports = {
    create,
    getList,
    update,
    deleteTask
}