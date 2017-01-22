app.component("firstPage", {
    templateUrl: "app/templates/first-page.html",
    bindings: {
        $router: "<"
    },
    controllerAs: "model",
    controller: function ($routeParams, session) {
        var model = this;
        model.results = [];
        model.$onInit = function () {
            model.dataset = session.getDataset();
            var r1 = model.random(0, mmodel.dataset);
            var r2 = model.random(0, mmodel.dataset);
            model.results.push(model.dataset[r1]);
            model.results.push(model.dataset[r2]);
        };
        model.random = function (min, max) {
            let rand = Math.floor(Math.random() * (max - min + 1) + min);
            return rand;
        }
    }
});