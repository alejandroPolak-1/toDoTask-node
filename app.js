const argv = require('./config/yargs').argv;
const forToDo = require('./forToDo/forToDo');

const colors = require('colors');

let comand = argv._[0];

switch (comand) {
    case "create":
        let task = forToDo.create(argv.description)
        console.log(task);
        break;

    case "list":
        let list = forToDo.getList()

        for (let task of list) {
            // console.log(task);
            console.log('========To Do==========='.cyan);
            console.log(colors.green(task.description));
            console.log('State: '.red, task.completed);
            console.log('========================'.cyan);
        }
        console.log("To list");
        break;

    case "update":
        let updated = forToDo.update(argv.description, argv.completed);
        console.log(updated);
        break;

    case "delete":
        let deleted = forToDo.deleteTask(argv.description);
        console.log(deleted, colors.red(argv.description), "has been deleted");
        break;

    default:
        console.log("This command is not recognized");
        break;
}