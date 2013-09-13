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

    $scope.addCustomer = function(customer){

		$("#addCustomerModal").modal('hide');
    	
    	var customer = {	
	    	"customerRef":"9999999",
	    	"firstName":customer.firstName,
	    	"lastName":customer.lastName,
	        "email":customer.email,
	        "phone":customer.phone,
	        "zip":customer.zip,
	        "lastTransaction":"9/1/2013 3:23 pm"
	    };  

    	$scope.customers.push(customer);
    };
}