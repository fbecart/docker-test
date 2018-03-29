module.exports = {
    'Add a new Todo' : function (browser) {
        browser.url(browser.launchUrl);

        const addTodoForm = browser.page.add();
        addTodoForm.setValue('@input', 'Run first test');
        addTodoForm.click('@submit');

        addTodoForm.expect.element('@input').value.to.equal('');

        browser.end();
    }
};

