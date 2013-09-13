function CustomerController($scope) {

    $scope.customers = [
	    {	
	    	"customerRef":"298402",
	    	"firstName":"Joe",
	    	"lastName":"Smith",
	        "email": "joe@email.com",
	        "phone":"555.555.5555",
	        "zip":"54321",
	        "lastTransaction":"9/3/2013 12:01 pm"
	    },
	    {	
	    	"customerRef":"9179035",
	    	"firstName":"Mary",
	    	"lastName":"Johnson",
	        "email": "mary@email.com",
	        "phone":"555.555.5555",
	        "zip":"12345",
	        "lastTransaction":"9/7/2013 3:23 pm"
	    }	    
    ];

    $scope.addCustomer = function(){

		$("#addCustomerModal").modal('hide');
    	
    	var customer = {	
	    	"customerRef":"1",
	    	"firstName":"Michael",
	    	"lastName":"Jordan",
	        "email": "Michael@email.com",
	        "phone":"555.555.5555",
	        "zip":"12345",
	        "lastTransaction":"9/1/2013 3:23 pm"
	    };  

    	$scope.customers.push(customer);
    };
}