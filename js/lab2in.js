var Lab2in = {
    lab2inInput: '.lab2in-input',
    lab2inLabel: 'lab2in-label',
    location: 'https://jsonplaceholder.typicode.com/users',

    init: function(){
        Lab2in.hideInput();
        Lab2in.showLabel();

        console.log('Lab2In inicializado');
    },

    hideInput: function () {
        $(Lab2in.lab2inInput).hide();
    },

    showLabel: function () {
        var lab2inLabel = $('<div>')
            .addClass(Lab2in.lab2inLabel)
            .text($(Lab2in.lab2inInput).val())
            .insertAfter($(Lab2in.lab2inInput));
    },

    hideLabel: function () {
        $(Lab2in.lab2inLabel).hide();
    }
};