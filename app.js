const argv = require('yargs').argv;
// const colors = require('colors')

// comand= argv._[0]

let comand = argv._[0];

switch (comand) {
    case "create":
        console.log("to create");
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