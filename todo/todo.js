const fs = require('fs');

let todoList = [];

function createTask(description) {
    loadDB();
    let todo = {
        description,
        completed: false,
    };

    todoList.push(todo);
    saveDB();

    return todo;
}

function saveDB() {
    let data = JSON.stringify(todoList);

    fs.writeFile('db/data.db.json', data, (err) => {
        if (err) throw new Error('Data not saved' + err);
    });
}

function loadDB() {
    try {
        todoList = require('../db/data.db.json');
    } catch (error) {
        todoList = [];
    }

}

function getTasksList(completed) {
    loadDB();

    if (completed === 'true' || completed === 'false') {
        return todoList.filter((task) => {
            return `${task.completed}` === completed;
        });
    }
    return todoList;
}

function updateTask(description, completed = true) {
    loadDB();
    for (let task of todoList) {
        if (task.description === description) {
            task.completed = completed;
        };
    }
    saveDB();
}

function deleteTask(description) {
    loadDB();

    howManyBeforeDeletion = todoList.length;
    todoList = todoList.filter((task) => task.description !== description);

    deletedSuccesfully = todoList.length !== howManyBeforeDeletion;

    if (deletedSuccesfully) {
        saveDB();
    }

    return deletedSuccesfully;
}

module.exports = {
    createTask,
    getTasksList,
    updateTask,
    deleteTask,
};