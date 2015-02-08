'use strict';

describe('EdgesController', function () {

  var location, scope;

  beforeEach(module('swFrontApp'));

  beforeEach(inject(function ($controller, $rootScope, $location) {
    location = $location;
    scope = $rootScope.$new();
    $controller('EdgesController', {
      $scope: scope
    });
  }));

  describe('[displayRequirements]', function(){
    it('[concatenates name and value of the requirement]', function(){
      
      var reqs = [{ name: 'Agility', value: 'd6'}];
      expect(scope.displayRequirements(reqs)).toEqual('Agility d6');
    });

    it('[ignores name if it is null]', function(){
      
      var reqs = [{ name: null, value: 'Novice'}];
      expect(scope.displayRequirements(reqs)).toEqual('Novice');
    });

    it('[requirements are delimited by a comma]', function(){
      
      var reqs = [{ name: null, value: 'Novice'}, { name: 'Agility', value: 'd6'}];
      expect(scope.displayRequirements(reqs)).toEqual('Novice, Agility d6');
    });
  });

});  
 