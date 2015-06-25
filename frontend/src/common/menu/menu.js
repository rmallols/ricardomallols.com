console.log('MEEE v2!!')
app.directive('menu', [function () {
    return {
        templateUrl: 'menu.html',
        replace: true,
        link: function () {
            console.log('hello menu!');
        }
    }
}]);