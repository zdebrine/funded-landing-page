/* 
Time Series:

Each function returns a 2d array where arr[0] is the labels and arr[1] is the data
Each time you call the function, it will return new data since it is randomized.

Each function can be used to generate a series of data for Enter and Exit
*/

// Labels
const labels_24h = ['12:00', '1:00', '2:00', '3:00', '4:00', '5:00', '6:00', '7:00', '8:00', '9:00', '10:00', '11:00', '12:00', '1:00', '2:00', '3:00', '4:00', '5:00', '6:00', '7:00', '8:00', '9:00', '10:00', '11:00']
const labels_7d = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
const labels_1m =  ["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28","29","30","31"];
const labels_1y = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dev"];

// Data Generators

function getTimeSeries_24h() {
    var response = [labels_24h, []];

    // generate the random data
    for (var i = 0; i < labels_24h.length; i++) {
        response[1][i] = Math.floor(Math.random() * Math.floor(30));
    }

    return response;
}

function getTimeSeries_7d() {
    var response = [labels_7d, []];

    // generate the random data
    for (var i = 0; i < labels_7d.length; i++) {
        response[1][i] = Math.floor(Math.random() * Math.floor(300));
    }

    return response;
}

function getTimeSeries_1m() {
    var response = [labels_1m, []];

    // generate the random data
    for (var i = 0; i < labels_1m.length; i++) {
        response[1][i] = Math.floor(Math.random() * Math.floor(1000));
    }

    return response;
}

function getTimeSeries_1y() {
    var response = [labels_1y, []];

    // generate the random data
    for (var i = 0; i < labels_1y.length; i++) {
        response[1][i] = Math.floor(Math.random() * Math.floor(10000));
    }

    return response;
}


// console.log(getTimeSeries_24h());
// console.log(getTimeSeries_7d());
// console.log(getTimeSeries_1m());
// console.log(getTimeSeries_1y());



/*
    Pie Charts

    There are 3 functions, each generates its respective data for its type of pie chart

    Types of charts:
    * location permission data, i.e. what is the distributino of level of access we have to users' locations
    * notification permission, i.e. what percentage of people have enabled notifications
    * open rate, i.e. what % of people sent a notification opened it

    
*/

// labels
const locationPermissions = ["Always", "When In Use", "Never"];
const notificationPermissions = ["Allow", "Don't Allow"];
const openRateLabels = ["Open", "Not Opened"];

// data generators
function getLocationPermissionData() {
    var response = [locationPermissions, []];
    var allow, whenInUse, never;

    do {

        allow = Math.floor(Math.random() * 100);
        whenInUse = Math.abs(allow - Math.floor(Math.random() * 100));
        never = Math.abs(100 - allow - whenInUse);
    } while (allow + whenInUse + never !== 100);
    
    response[1] = [allow, whenInUse, never];

    return response;
}

function getNotificationPermissionData() {
    var response = [notificationPermissions, []];
    
    var allow = Math.floor(Math.random() * 100);
    var dontAllow = 100 - allow;

    response[1] = [allow, dontAllow];

    return response;
}

function getOpenRatePermission() {
    var response = [openRateLabels, []];

    var open = Math.floor(Math.random() * 100);
    var notOpened = 100 - open;

    response[1] = [open, notOpened];

    return response;
}

console.log(getLocationPermissionData());
// console.log(getNotificationPermissionData());
// console.log(getOpenRatePermission());