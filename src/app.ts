import * as angular from 'angular';
import * as ngRoute from 'angular-route';
import * as ngAnimate from 'angular-animate';
import * as ngAria from 'angular-aria';
import * as ngMaterial from 'angular-material';
import * as ngMessages from 'angular-messages';
import * as angularMoment from 'angular-moment';
import * as moment from 'moment';
import * as momentTimezone from 'moment-timezone';
import * as momentLocaleRu from 'moment/locale/ru';
import * as hmTouchEvents from 'angular-hammer';
import 'angular-material/angular-material.scss';
import 'hammerjs';
import routes from './app.routes';
import mainModule from './app/main/main.module';
import settingsModule from './app/settings/settings.module';
import homeModule from './app/home/home.module';
import todoModule from './app/todo/todo.module';

import './assets/style.scss';

angular.module("app", [ngRoute, ngAnimate, ngAria, ngMaterial, ngMessages, hmTouchEvents, mainModule, settingsModule, homeModule, todoModule, angularMoment]);
angular.module("app").config(routes);
angular.module("app").constant('moment', moment);
angular.module("app").constant('moment-timezone', momentTimezone);
angular.module("app").constant('ru', momentLocaleRu);
angular.module("app").constant('app', {
    title: "MyOffice"
});

angular.module("app").config(["$mdThemingProvider", function ($mdThemingProvider) {
    $mdThemingProvider.theme("blue")
        .primaryPalette("blue")
        .accentPalette("red");

    $mdThemingProvider.theme("green")
        .primaryPalette("teal")
        .accentPalette("red");

    $mdThemingProvider.alwaysWatchTheme(true);
}]);

angular.module("app").config(['$compileProvider', function ($compileProvider) {
    $compileProvider.debugInfoEnabled(false);
    $compileProvider.commentDirectivesEnabled(false);
    $compileProvider.cssClassDirectivesEnabled(false);
}]);

angular.bootstrap(document, ["app"]);
