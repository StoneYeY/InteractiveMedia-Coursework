/*------------------------------------------------------
    Author : www.webthemez.com
    License: Commons Attribution 3.0
    http://creativecommons.org/licenses/by/3.0/
---------------------------------------------------------  */

(function ($) {
    "use strict";
    var mainApp = {

        initFunction: function () {
            /*MENU 
            ------------------------------------*/
            $('#main-menu').metisMenu();
			
            $(window).bind("load resize", function () {
                if ($(this).width() < 768) {
                    $('div.sidebar-collapse').addClass('collapse')
                } else {
                    $('div.sidebar-collapse').removeClass('collapse')
                }
            });
			
            /* MORRIS DONUT CHART1
			----------------------------------------*/
            Morris.Donut({
                element: 'morris-donut-chart1',
                data: [{
                    label: "Correct",
                    value: 6
                }, {
                    label: "False",
                    value: 3
                }, {
                    label: "Not done",
                    value: 1
                }],
				   colors: ['#1abc9c','#f9243f','#22a7f0'],
                resize: true
            });
			
			
			/* MORRIS DONUT CHART2
			----------------------------------------*/
            Morris.Donut({
                element: 'morris-donut-chart2',
                data: [{
                    label: "Correct",
                    value: 5
                }, {
                    label: "False",
                    value: 1
                }, {
                    label: "Not done",
                    value: 4
                }],
				   colors: ['#1abc9c','#f9243f','#22a7f0'],
                resize: true
            });
			/* MORRIS DONUT CHART3
			----------------------------------------*/
            Morris.Donut({
                element: 'morris-donut-chart3',
                data: [{
                    label: "Correct",
                    value: 10
                }, {
                    label: "False",
                    value: 0
                }, {
                    label: "Not done",
                    value: 0
                }],
				   colors: ['#1abc9c','#f9243f','#22a7f0'],
                resize: true
            });
			/* MORRIS DONUT CHART4
			----------------------------------------*/
            Morris.Donut({
                element: 'morris-donut-chart4',
                data: [{
                    label: "Correct",
                    value: 9
                }, {
                    label: "False",
                    value: 0
                }, {
                    label: "Not done",
                    value: 1
                }],
				   colors: ['#1abc9c','#f9243f','#22a7f0'],
                resize: true
            });
			/* MORRIS DONUT CHART5
			----------------------------------------*/
            Morris.Donut({
                element: 'morris-donut-chart5',
                data: [{
                    label: "Correct",
                    value: 0
                }, {
                    label: "False",
                    value: 0
                }, {
                    label: "Not done",
                    value: 10
                }],
				   colors: ['#1abc9c','#f9243f','#22a7f0'],
                resize: true
            });
			/* MORRIS DONUT CHART6
			----------------------------------------*/
            Morris.Donut({
                element: 'morris-donut-chart6',
                data: [{
                    label: "Correct",
                    value: 18
                }, {
                    label: "False",
                    value: 2
                }, {
                    label: "Not done",
                    value: 0
                }],
				   colors: ['#1abc9c','#f9243f','#22a7f0'],
                resize: true
            });
			 
        
            $('.donut-chart').cssCharts({type:"donut"}).trigger('show-donut-chart');
	 
        },

        initialization: function () {
            mainApp.initFunction();

        }

    }
    // Initializing ///

    $(document).ready(function () {
        mainApp.initFunction(); 
		$("#sideNav").click(function(){
			if($(this).hasClass('closed')){
				$('.navbar-side').animate({left: '0px'});
				$(this).removeClass('closed');
				$('#page-wrapper').animate({'margin-left' : '260px'});
				
			}
			else{
			    $(this).addClass('closed');
				$('.navbar-side').animate({left: '-260px'});
				$('#page-wrapper').animate({'margin-left' : '0px'}); 
			}
		});
    });

}(jQuery));
