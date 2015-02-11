// Define the namespace
window.myApp = {};

(function (myApp) {
    function TimeSample(){
        var self = this;

        //should not be editable
        self.client = ko.observable("Frank");
        self.matter = ko.observable("Work");
        self.timeID = ko.observable("timeID");

        //editable entries
        self.workDate = ko.observable("Today");
        self.workDesc = ko.observable("Learning KOJS");
        self.workHours = ko.observable("x");
    }

    myApp.TimeSample = TimeSample;
});

// Usage
// create an instance of the Product class
var timeExample = new myApp.TimeSample();
// "set" the 'sku' property
timeExample.client('Frank Singel')
// "get" the 'sku' property value
var skuNumber = timeExample.client();

// This is a simple *viewmodel* - JavaScript that defines the data and behavior of your UI


function AppViewModel() {
    this.firstName = ko.observable("Bert");
    this.lastName = ko.observable("Bertington");

    this.fullName = ko.computed(function() {
        return this.firstName() + " " + this.lastName();    
    }, this);

    this.capitalizeLastName = function() {
        var currentVal = this.lastName();        // Read the current value
        this.lastName(currentVal.toUpperCase()); // Write back a modified value
    };    
}

// Activates knockout.js
//ko.applyBindings(new AppViewModel());