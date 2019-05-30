const { argv } = require('./config/yargs.config');

console.log(argv);

let command = argv._[0];

switch (command) {
    case 'create':
        console.log('Create task');
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