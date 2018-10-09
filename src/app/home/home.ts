import { HomeService } from './home.service';

class HomeCtrl {
    constructor(
        private $mdSidenav: ng.material.ISidenavService,
        private homeService: HomeService,
        private app: any,
    ) {
        this.app = app;
    }

    $onInit() {
        console.log("homeCtrl.oninit");
        console.log(this.app)
    }

    folders = [
        { title: "list item 1", icon: "folder", updated: new Date('1/1/16') },
        { title: "list item 2", icon: "folder", updated: new Date('1/1/16') },
        { title: "list item 3", icon: "folder", updated: new Date('1/1/16') },
    ];
}

HomeCtrl.$inject = ["$mdSidenav", "homeService", "app"];

export default {
    bindings: {},
    templateUrl: require("./home.html"),
    controller: HomeCtrl
}