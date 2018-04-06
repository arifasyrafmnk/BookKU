'use strict';

export default function($stateProvider) {
  'ngInject';
  $stateProvider
    .state('gallery', {
      url: '/gallery',
      template: '<gallery></gallery>',
      onEnter:function () {
                var timer = setInterval(DoSomething);
                function DoSomething() {
                    var a = $('select')[0]
                    if (a){
                        a.classList.contains('initialized')
                        clearInterval(timer)
                    }
                    console.log( "window loaded dlm onenter" );
                    $('select').material_select();
                }
              }
    });
}
