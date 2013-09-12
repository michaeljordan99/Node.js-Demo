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

    function goTo(control){
        $('html, body').animate({scrollTop: $(control).position().top - 50 }, 'slow');
    }

    $("#processTransaction").on("click", function () {

        var request = {
            "merchantName": "TestUser1",
            "merchantKey": "842e1b378d0d41be97d05bfa9b014ee9",
            "configurationId": "ea060c2e06144e6398e9523271801d6e",
            "transactionType": "CreditSale",
            "transFields": { 
                "amountTotal": "499.99" 
            }
        };

        EasyIntegrator.processTransaction(request)
            .success(function (resultsFields) {
                alert(resultsFields.uniqueTransId);
                $("#receipt").modal();
            })
            .error(function (errorMessage) {
                alert(errorMessage);
            })
            .done(function () {

            });
    });
});