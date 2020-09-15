const description = {
    demand: true,
    alias: 'd',
    desc: 'Decription to task to do'
}
const completed = {
    alias: 'c',
    default: true,
    desc: 'Marks the task as completed or pending'
}

const argv = require('yargs')
    .command('create', 'To create a task to do', { description })
    .command('update', 'Updates the completed status of a task', { description, completed })
    .command('delete', 'To delete a task to do', { description })
    .help()
    .argv;


module.exports = {
    argv
}