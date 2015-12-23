'use strict';

/* jasmine specs for controllers go here */

describe('controllers', function() {

  it("should do something", function() {

  });

});

describe('PhonelistCtrl', function() {
  
  beforeEach(module('phonecatApp'));
             
  it('should create "phones" model with 3 phones', inject(function($controller) {
    var scope = {},
        ctrl = $controller('PhoneListCtrl', {$scope:scope});
    
    expect(scope.phones.length).toBe(3);
  }));
  
  it('name hould be "Taylor"', inject(function($controller) {
    var scope = {},
        ctrl = $controller('PhoneListCtrl', {$scope:scope});
    
    expect(scope.name).toBe("Taylor");
    
  }));
  
});