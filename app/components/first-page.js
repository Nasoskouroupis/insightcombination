app.component("firstPage", {
    templateUrl: "app/templates/first-page.html",
    bindings: {
        $router: "<"
    },
    controllerAs: "model",
    controller: function ($routeParams, session) {
        var model = this;
            model.resultArtists = {};
            model.resultSenses = {};
        model.$onInit = function () {
            // session.getConfig().then(function (data) {
            //     model.dataset = data.Artists;
            //     var r1 = model.random(0, model.dataset.length - 1);
            //     var r2 = model.random(0, model.dataset.length - 1);
            //     model.results.push(model.dataset[r1]);
            //     model.results.push(model.dataset[r2]);
            // });
        };
        model.onClick = function () {
            model.resultArtists = {};
            model.resultSenses = {};
            session.getDatabaseOne().then(function (data) {
                model.Artists = data.Artists;
                var r1 = model.random(0, model.Artists.length - 1);
                model.resultArtists=model.Artists[r1];
            });
            session.getDatabaseTwo().then(function (data) {
                model.Senses = data.Senses;
                var r1 = model.random(0, model.Senses.length - 1);
                model.resultSenses=model.Senses[r1];
            });
        };
        model.random = function (min, max) {
            let rand = Math.floor(Math.random() * (max - min + 1) + min);
            return rand;
        }
    }
});