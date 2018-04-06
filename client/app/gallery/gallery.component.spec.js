'use strict';

describe('Component: GalleryComponent', function() {
  // load the controller's module
  beforeEach(module('arifdbApp.gallery'));

  var GalleryComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($componentController) {
    GalleryComponent = $componentController('gallery', {});
  }));

  it('should ...', function() {
    expect(1).to.equal(1);
  });
});
