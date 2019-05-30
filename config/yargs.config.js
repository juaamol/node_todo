const description = {
    demand: true,
    alias: 'd',
    desc: 'Delete the specified task',
};

const completed = {
    demand: true,
    alias: 'c',
    desc: 'Task status'
};

const listcompleted = {
    demand: false,
    alias: 'l',
    desc: 'If true, shows only completed tasks, else non completed tasks.'
};

const argv = require('yargs')
    .command(
        'create', 'Create a task to do', {
            description,
        })
    .command(
        'update', 'Update the state of a task', {
            description,
            completed,
        })
    .command(
        'delete', 'Delete a task', {
            description,
        })
    .command(
        'list', 'Lists tasks', {
            listcompleted,
        })
    .help().argv;

module.exports = { argv };