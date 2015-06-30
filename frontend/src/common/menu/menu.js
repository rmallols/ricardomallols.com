console.log('MEEE v2!!')
app.directive('menu', [function () {
    return {
        templateUrl: 'menu.html',
        replace: true,
        link: function (scope) {
            scope.links = [
                {id: 'who', text: 'Who I am'},
                {id: 'what', text: 'What I do'},
                {id: 'where', text: 'Where I am'}
            ];
        }
    }
}]);