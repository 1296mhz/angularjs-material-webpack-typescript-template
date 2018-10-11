class MainCtrl {
    constructor(
        private $scope: ng.IScope,
        private $mdSidenav: ng.material.ISidenavService,
        private $location: ng.ILocationService,
        private app: any,
    ) {
        this.$scope.$on('update-theme', (event, args) => {
            this.currentTheme = args;
        });
        this.app = app;
    }

    $onInit() { }

    currentTheme = "blue";

    title = "MyOffice"
    menu = [
        { link: "home", title: "Home", icon: "home" },
        { link: "settings", title: "Settings", icon: "settings" },
        { link: "todo", title: "ToDo", icon: "list" }
    ];

    toggleNav() {
        this.$mdSidenav("left").toggle();
    }

    openNav() {
        this.$mdSidenav("left").open();
    }

    closeNav() {
        this.$mdSidenav("left").close();
    }

    goTo(link: string) {
        this.$mdSidenav("left").close();
        this.$location.path(link);
    }
}

MainCtrl.$inject = ["$scope", "$mdSidenav", "$location", "app"];

export default {
    bindings: { title: "<" },
    templateUrl: require("./main.html"),
    controller: MainCtrl
}