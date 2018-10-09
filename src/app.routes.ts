// import * as angular from 'angular';

export default function routes($routeProvider) {
    $routeProvider.otherwise('/');
}
routes.$inject = ['$routeProvider'];