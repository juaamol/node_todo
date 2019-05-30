const { argv } = require('./config/yargs.config');
const { createTask, getTasksList } = require('./todo/todo');
let colors = require('colors');

let command = argv._[0];

switch (command) {
    case 'create':
        let task = createTask(argv.description);
        console.log(task);
        break;
    case 'list':
        let list = getTasksList();

        for (let task of list) {
            console.log('====== Tasks to do ====='.green);
            console.log(task.description);
            console.log('State: ', task.completed);
            console.log('========================'.green);
        }
        break;
    case 'update':
        console.log('Updated a todo task');
        break;
    default:
        console.log('Unknown command');
        break;
}