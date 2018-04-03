module.exports = {
    'Add a new Todo' : function (browser) {
        browser.mongo(function(db) {
            console.log('Dropping all Todos');
            const col = db.collection('todos');
            return col.remove({});
        });

        browser.url(browser.launchUrl);

        const addTodoForm = browser.page.add();
        addTodoForm.setValue('@input', 'Run first test');
        addTodoForm.click('@submit');

        addTodoForm.expect.element('@input').value.to.equal('');

        const todosList = browser.page.todos();
        todosList.expect.element('.item:nth-child(1) label').text.to.equal('Run first test');
        todosList.assert.cssClassNotPresent('.item:nth-child(1) .checkbox', 'checked');

        browser.end();
    }
};

