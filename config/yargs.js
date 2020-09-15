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
    .command('create', 'To create a element to do', { description })
    .command('update', 'Updates the completed status of a task', { description, completed })
    .help()
    .argv;


module.exports = {
    argv
}