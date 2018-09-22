import * as angular from 'angular';

export default function routes($routeProvider) {
    $routeProvider.when('/todo', { template: "<todo></todo>" });
}
routes.$inject = ['$routeProvider'];