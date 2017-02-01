(function() {
    var app = angular.module('menuManager', []);

    app.controller('MenuController', function(){
        var entreeSpecials = [];
        var entrees = [
            { name: 'Asperges Vinaigrette', isChoose: false},
            { name: 'Oeufs durs mayonnaise', isChoose: false}
        ];

        this.entree = entrees;
        this.entreeSpecials = entreeSpecials;
    });

    app.controller('MenuFormController', function () {
        this.menusFinal = [];
        this.menu = {};
        this.count = 0;

        this.addMenu = function(menu) {
            console.log(menu);
            this.menusFinal.push(menu);

            this.menu = {};
        };
    });

    app.controller('CustomController', function () {
        this.entreeSpecial = {name:"", isChoose: false};

        this.addEntreeSpecial = function () {
            this.entreeSpecials.push(this.entreeSpecial);
            this.entreeSpecial = {name:"", isChoose: false};
        };
    });
})();
