app.factory('session', function GetSession($http, $q) {
    var dataset = {};
    var service = this;
    return {
        getConfig: function (configuration) {
            if (!configuration) {
                configuration = "dataset";
            }
            return $http({
                url: "data/" + configuration + ".json",
                method: "GET",
                data: "{}",
                headers: { 'Content-Type': 'application/json' }
            }).then(function (data, status, headers, config) {
                console.log(data);
                return data.data;
            }, function (error) {
                console.log(error);
            });
        }
    }
});