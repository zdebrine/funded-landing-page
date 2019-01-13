let userSelectedTab = false;
const analyticTabs = ["where", "when", "how"];
const engagementTabs = ["grow-engagement", "delight-users", "automate-processes"];

$(".engagement-item").click(function(e) {
    userSelectedTab = true; // user manually selected an item 

    let selectorID = this.id; // e.g. #when-selector
    let tabID = selectorID.replace("-selector",""); // e.g. #when

    $("#" + selectorID + "-icon").addClass("bg-gradient-success"); // add the selected line to the selector, e.g. #when-selector
    $("#" + selectorID + "-icon").removeClass("bg-gray"); // add the selected line to the selector, e.g. #when-selector

    // remove the underline from the previously selected item
    for (var i = 0; i < engagementTabs.length; i++) { // loop through and make sure the other selectors do not have "selected"
        // check if analyticTabs[i] is not selected
        console.log(engagementTabs[i]);
        if (engagementTabs[i] !== tabID) {
            let toRemove = engagementTabs[i] + "-selector";
            $("#" + toRemove + "-icon").removeClass("bg-gradient-success");

            console.log("remove #" + toRemove + "-icon");
            $("#" + toRemove + "-icon").addClass("bg-gray");
        }
    }

    console.log(selectorID);
    $(`#engagement-tabs a[href="#${tabID}"]`).tab('show');
})




/* Analytics Tabs */
$(".analytic-item").click(function(e) {
    userSelectedTab = true; // user manually selected an item 

    let selectorID = this.id; // e.g. #when-selector
    let tabID = selectorID.replace("-selector",""); // e.g. #when

    $("#" + selectorID).addClass("selected"); // add the selected line to the selector, e.g. #when-selector
    $("#" + selectorID).removeClass("not-selected"); // add the selected line to the selector, e.g. #when-selector

    // remove the underline from the previously selected item
    for (var i = 0; i < analyticTabs.length; i++) { // loop through and make sure the other selectors do not have "selected"
        // check if analyticTabs[i] is not selected
        if (analyticTabs[i] !== tabID) {
            let toRemove = analyticTabs[i] + "-selector";
            $("#" + toRemove).removeClass("selected");
            $("#" + toRemove).addClass("not-selected");
        }
    }

    $(`#analytics-tabs a[href="#${tabID}"]`).tab('show');
})



var index = 0;

setInterval(function(){
    if (!userSelectedTab) {
        let currentTab = analyticTabs[index % 3];
        // console.log(currentTab);
        // console.log(index);
        // add selected class
        $(".titles #" + currentTab + "-selector").addClass("selected"); // add the selected line to the selector, e.g. #when-selector
        $(".titles #" + currentTab + "-selector").removeClass("not-selected"); // add the selected line to the selector, e.g. #when-selector
        // console.log("Adding selected to: " + ".titles #" + currentTab + "-selector");

        // remove the underline from the previously selected item
        for (var i = 0; i < analyticTabs.length; i++) { // loop through and make sure the other selectors do not have "selected"
            // check if analyticTabs[i] is not selected
            if (analyticTabs[i] !== currentTab) {
                let toRemove = analyticTabs[i] + "-selector";
                $(".titles #" + toRemove).removeClass("selected");
                $(".titles #" + toRemove).addClass("not-selected");
            }
        }

        $(`#analytics-tabs a[href="#${currentTab}"]`).tab('show');
        index++;


    }
}, 4000);