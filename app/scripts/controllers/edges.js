'use strict';

angular.module('swFrontApp')
  .controller('EdgesController', function ($scope, edges, categories, ranks) {
    $scope.edges = edges.query();
    
    $scope.categories = [ { name: 'All' } ];
    $scope.serverCategories = categories.query(function() {
      $scope.categories = $scope.categories.concat($scope.serverCategories);
    });
    
    $scope.ranks = ranks.query();
    $scope.clearRanks = $scope.ranks.slice(1);

    $scope.newEdge = new edges;
    $scope.createEdge = function() {
      var edge = $scope.newEdge.$save();
      edge.then(function(response){
        $scope.edges.push(response);
        $scope.newEdge = new edges;
      });
    }

    $scope.filterBy = {
      search: '',
      category: $scope.categories[0],
      rank: $scope.ranks[0]
    };
    
    var selectedEdge = null;

    $scope.selectedEdge = function(edge){
      selectedEdge = (selectedEdge === edge) ? null : edge;
    };

    $scope.isSelected = function(edge){
      return edge === selectedEdge;
    };

    $scope.displayRequirements = function(reqs){
      var result = '';
      for(var i=0; i < reqs.length; i++){
        if(result !== '') { result += ', '; }
        if(reqs[i].name){
          result += reqs[i].name + ' ';
        }
        result += reqs[i].value;
      }
      return result;
    };
});
