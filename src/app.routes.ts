export default function routes($routeProvider) {
    $routeProvider.otherwise('/');
}
routes.$inject = ['$routeProvider'];