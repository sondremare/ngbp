/**
 * Each section of the site has its own module. It probably also has
 * submodules, though this boilerplate is too simple to demonstrate it. Within
 * `src/app/home`, however, could exist several additional folders representing
 * additional modules that would then be listed as dependencies of this one.
 * For example, a `note` section could have the submodules `note.create`,
 * `note.delete`, `note.edit`, etc.
 *
 * Regardless, so long as dependencies are managed correctly, the build process
 * will automatically take take of the rest.
 *
 * The dependencies block here is also where component dependencies should be
 * specified, as shown below.
 */
angular.module( 'ngBoilerplate.home', [
  'ui.router',
  'plusOne'
])

/**
 * Each section or module of the site can also have its own routes. AngularJS
 * will handle ensuring they are all available at run-time, but splitting it
 * this way makes each module more "self-contained".
 */
.config(function config( $stateProvider ) {
  $stateProvider.state( 'home', {
    url: '/home',
    views: {
      "main": {
        controller: 'HomeCtrl',
        templateUrl: 'home/home.tpl.html'
      }
    },
    data:{ pageTitle: 'Home' }
  });
})

/**
 * And of course we define a controller for our route.
 */
.controller( 'HomeCtrl', function HomeController( $scope, $location ) {
        var options = {
            adimpressions:true,
            adsparam:"WT.ac",
            anchor:false,
            dcsid:"dcssxsnsvuz5bdb3age4v40mz_7d9c",
            domain:"statse.webtrendslive.com",
            download:true,
            downloadtypes:"csv,doc,docx,epub,eps,gif,gzip,jpg,pdf,png,pps,ppsx,ppt,pptx,rar,rtf,sdv,txt,xls,xlsx,zip",
            enabled:true,
            fpcdom:".landkredittbank.no",
            i18n:false,
            javascript:true,
            offsite:true,
            onsitedoms:"",
            paidsearchparams:"gclid",
            rightclick:true,
            timezone:1,
            trimoffsiteparams:false
        };

        window.webtrendsAsyncInit = function () {
            var dcs = new Webtrends.dcs().init(options).track();
        };

        function loadTrackerScript(src) {
            var script = document.createElement('script');
            var firstScript = document.getElementsByTagName('script')[0];
            script.async = 1;
            script.src = src;
            firstScript.parentNode.insertBefore(script,firstScript);
            return script;
        }
        function loadWebtrendsScript() {
            return loadTrackerScript('//s.webtrends.com/js/webtrends.js');
        }

        var script = loadWebtrendsScript();


        $scope.trackPageView = function () {
            var pageView = $location.path();
            if (typeof Webtrends !== 'undefined') {
                window.dcsMultiTrack(
                    'DCS.dcsuri', pageView,
                    'WT.ti', pageView,
                    'WT.dl', '0',
                    'WT.cg_n', 'SMARTbank',
                    'DCSext.wa_app', 'smartbank'
                );
            }
        };
})

;

