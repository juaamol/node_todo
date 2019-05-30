const description = {
    demand: true,
    alias: 'd',
    desc: 'Delete the specified task',
};

const completed = {
    demand: true,
    alias: 'c',
    desc: 'Marks the task as finished'
};

const argv = require('yargs')
    .command(
        'create', 'Create a task to do', {
            description
        })
    .command(
        'update', 'Update the state of a task', {
            description,
            completed,
        })
    .command(
        'delete', 'Delete a task', {
            description
        })
    .help().argv;

module.exports = { argv };