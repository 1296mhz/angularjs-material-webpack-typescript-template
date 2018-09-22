import _ from "underscore";
//window._ = _;
export default angular.module("underscore", [])
.factory("_", [
  "$window",
  function() {
    return $window._;
  }
]);
