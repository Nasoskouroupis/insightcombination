app.factory('session', function GetSession($http, $q) {
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
					apphelper.setResolutions(data.resolutions);
					apphelper.setConfiguration(data);
					apphelper.setConfig("data/" + configuration + ".json");
					defer.resolve('done');
				}).error(function (data, status, headers, config) {
					console.log(data);
					defer.reject();
				});

				return defer.promise;
			}
		}
	});