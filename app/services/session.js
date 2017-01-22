app.factory('session', function GetSession($http, $q) {
    var dataset = {};

    return {
        getConfig: function (configuration) {
            var defer = $q.defer();

            if (!configuration) {
                configuration = "default";
            }
            $http({
                url: "data/" + configuration + ".json",
                method: "GET",
                data: "{}",
                headers: { 'Content-Type': 'application/json' }
            }).success(function (data, status, headers, config) {
                setConfig(data);
                defer.resolve('done');
            }).error(function (data, status, headers, config) {
                console.log(data);
                defer.reject();
            });

            return defer.promise;
        },
        setDataset: function(data){
            dataset = data;
        },
        getDataset: function(){
            return dataset;
        }
    }
});