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

            scope.$on('$stateChangeSuccess', function (event, currentState) {
                scope.currentState = {
                    linkText: getLinkText(currentState.name),
                    name: currentState.name
                };
                scope.toggledMenu = false;
            });

            scope.toggleMenu = function () {
                scope.toggledMenu = !scope.toggledMenu;
            }

            function getLinkText(currentStateName) {
                var linkText = ''
                scope.links.forEach(function (link) {
                    if (link.id === currentStateName) {
                        linkText = link.text;
                    }
                });
                return linkText;
            }
        }
    }
}]);