const argv = require('yargs')
    .command(
        'create', 'Create a task to do', {
            description: {
                demand: true,
                alias: 'd',
                desc: 'Description of the task'
            }
        })
    .command(
        'update', 'Update the state of a task', {
            description: {
                demand: true,
                alias: 'd',
                desc: 'Update the state of the specified task'
            },
            completed: {
                demand: true,
                alias: 'c',
                desc: 'Marks the task as finished'
            }
        })
    .command(
        'delete', 'Delete a task', {
            description: {
                demand: true,
                alias: 'd',
                desc: 'Delete the specified task'
            }
        })
    .help().argv;

module.exports = { argv };