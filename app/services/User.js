angular.module('wifiUffLocation').service("User", ["$http", "API_URL", function($http, API_URL) {

  this.index = function() {
    return $http.get(API_URL + "/users");
  };

  this.show = function(id) {
    return $http.get(API_URL + "/users/" + id);
  };

  this.create = function(user) {
    return $http.post(API_URL + "/users", {
      "user": user
    });
  };

  this.update = function(id, user) {
    return $http.put(API_URL + "/users/" + id, {
      "user": user
    });
  };

  this.delete = function(id) {
    return $http.delete(API_URL + "/users/" + id);
  };
}]);
