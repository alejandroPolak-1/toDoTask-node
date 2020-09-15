const argv = require('./config/yargs').argv;
const { create } = require('./forToDo/forToDo');

// const colors = require('colors')

let comand = argv._[0];

switch (comand) {
    case "create":
        let task = create(argv.description)
        console.log(task);
        break;
    case "list":
        console.log("To list");
        break;
    case "update":
        console.log("to update");
        break;
    default:
        console.log("This command is not recognized");
        break;
}