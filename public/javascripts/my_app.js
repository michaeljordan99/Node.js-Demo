/* AngularJS */
function UserCtrl($scope) {
    
    $scope.user = {firstName: 'Miguel', lastName: 'Jordan'};
}

function UserRestCtrl($scope, $http) {
    
    $scope.user = {firstName: 'Miguel', lastName: 'Jordan'};

	delete $http.defaults.headers.common['X-Requested-With'];

    $http({ method: 'GET', url: 'http://localhost:8080/hello/mark' }).
	  success(function (data, status, headers, config) {
	  	$scope.user = data;
	  }).
	  error(function (data, status, headers, config) {
	  	alert('error');
	  });
}

/* jQuery */

$(function () {

    $(window).scroll(function (eventData) {

        var pos = $(document).scrollTop();
        
        if(pos > 0)
        {
            $("header").addClass("bottom-header");
        }
        else{
            $("header").removeClass("bottom-header");
        }

        if(pos > 50)
        {
            $("#top").removeClass("hidden");
        }
        else{
            $("#top").addClass("hidden");
        }
    });

    $("#top").on("click", function(){
        $('html, body').animate({scrollTop:0}, 'slow');
    });

    $("#startTour").on("click", function(){
        $('html, body').animate({scrollTop: $("#popover1").position().top - 150 }, 'slow');
        $('#popover1').popover('show');
    });

    var popoverAdminContent = "<div style='width: 300px;'>"
                            + "<a class='close' onclick='hidePopover(&quot;popoverAdmin&quot;);''>×</a>"
                            + "<h4>Account</h4>"
                            + "<div id='popoverInnerContent'>"
                            + "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor "
                            + "incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud "
                            + "exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure "
                            + "</div>"
                            + "<div id='popoverFooter'>"
                            + "<button onclick='hidePopover(&quot;popoverAdmin&quot;);'' class='btn btn-primary'>Close</button>"
                            + "</div>"
                            + "</div>";

    $('#popoverAdmin').popover({
       html: true,
       content: function(ele) { return popoverAdminContent; }
    });

    var popoverCartContent  = "<div>"
                            + "<a class='close' onclick='hidePopover(&quot;popoverCart&quot;);'>×</a>"
                            + "<h4>Your Shopping Cart</h4>"
                            + "<div id='popoverInnerContent'>"
                            + "<table class='table table-striped table-hover'>"
                            + "<tbody><tr><td>Restful Web Services, Joe Author</td><td>1</td><td>$24.99</td></tr><tr><td>MongoDB: The Definitive Guide, Joe Author</td><td>1</td><td>$49.99</td></tr></tbody>"
                            + "<tfoot><tr style='font-weight: bold;'><td colspan='2' style='text-align: right;'>Total</td><td>$74.98</td></tr></tfoot>"
                            + "</table>"
                            + "</div>"
                            + "<div id='popoverFooter'>"
                            + "<button onclick='hidePopover(&quot;popoverCart&quot;);' class='btn btn-primary'>Checkout</button>"
                            + "</div>"
                            + "</div>";

    $('#popoverCart').popover({
       html: true,
       content: function(ele) { return popoverCartContent; }
    });

    var popover1Content = "<div>"
                        + "<a class='close' onclick='hidePopover(&quot;popover1&quot;);''>×</a>"
                        + "<h4>Prerequisites</h4>"
                        + "<div id='popoverInnerContent'>"
                        + "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor "
                        + "incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud "
                        + "exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure."
                        + "</div>"
                        + "<div id='popoverFooter'>"
                        + "<button onclick='show1();' class='btn btn-primary'>Next</button>"
                        + "</div>"
                        + "</div>";

    $('#popover1').popover({
       html: true,
       content: function(ele) { return popover1Content; }
    });

    var popover2Content = "<div>"
                        + "<a class='close' onclick='hidePopover(&quot;popover2&quot;);''>×</a>"
                        + "<h4>Setup</h4>"
                        + "<div id='popoverInnerContent'>"
                        + "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor "
                        + "incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud "
                        + "exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure."
                        + "</div>"
                        + "<div id='popoverFooter'>"
                        + "<button onclick='show2();' class='btn btn-primary'>Next</button>"
                        + "</div>"
                        + "</div>";

    $('#popover2').popover({
       html: true,
       content: function(ele) { return popover2Content; }
    });

    var popover3Content = "<div>"
                        + "<a class='close' onclick='hidePopover(&quot;popover3&quot;);''>×</a>"
                        + "<h4>Payments</h4>"
                        + "<div id='popoverInnerContent'>"
                        + "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor "
                        + "incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud "
                        + "exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure."
                        + "</div>"
                        + "<div id='popoverFooter'>"
                        + "<button onclick='show3();' class='btn btn-primary'>Next</button>"
                        + "</div>"
                        + "</div>";

    $('#popover3').popover({
       html: true,
       content: function(ele) { return popover3Content; }
    });

    var popover4Content = "<div>"
                        + "<a class='close' onclick='hidePopover(&quot;popover4&quot;);''>×</a>"
                        + "<h4>Customers</h4>"
                        + "<div id='popoverInnerContent'>"
                        + "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor "
                        + "incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud "
                        + "exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure."
                        + "</div>"
                        + "<div id='popoverFooter'>"
                        + "<button onclick='hidePopover(&quot;popover4&quot;);'' class='btn btn-primary'>Close</button>"
                        + "</div>"
                        + "</div>";

    $('#popover4').popover({
       html: true,
       content: function(ele) { return popover4Content; }
    });
});

function hidePopover(control) {
    $("#" + control).popover('hide');
    return false;
}

function show1(){
    $('#popover1').popover('hide');
    $('html, body').animate({scrollTop: $("#popover2").position().top - 150 }, 'slow');
    $('#popover2').popover('show');
    return false;
}

function show2(){
    $('#popover2').popover('hide');
    $('html, body').animate({scrollTop: $("#popover3").position().top - 150 }, 'slow');
    $('#popover3').popover('show');
    return false;
}

function show3(){
    $('#popover3').popover('hide');
    $('html, body').animate({scrollTop: $("#popover4").position().top - 150 }, 'slow');
    $('#popover4').popover('show');
    return false;
}
