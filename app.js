const { argv } = require('./config/yargs.config');
const { createTask } = require('./todo/todo');

let command = argv._[0];

switch (command) {
    case 'create':
        let task = createTask(argv.description);
        console.log(task);
        break;
    case 'list':
        console.log('List all to do tasks');
        break;
    case 'update':
        console.log('Updated a todo task');
        break;
    default:
        console.log('Unknown command');
        break;
}