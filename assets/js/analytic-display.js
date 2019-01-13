let userSelectedTab = false;
let tabs = ["where", "when", "how"];

$(".analytic-item").click(function(e) {
    userSelectedTab = true; // user manually selected an item 

    let selectorID = this.id; // e.g. #when-selector
    let tabID = selectorID.replace("-selector",""); // e.g. #when

    $("#" + selectorID).addClass("selected"); // add the selected line to the selector, e.g. #when-selector
    $("#" + selectorID).removeClass("not-selected"); // add the selected line to the selector, e.g. #when-selector

    // remove the underline from the previously selected item
    for (var i = 0; i < tabs.length; i++) { // loop through and make sure the other selectors do not have "selected"
        // check if tabs[i] is not selected
        if (tabs[i] !== tabID) {
            let toRemove = tabs[i] + "-selector";
            $("#" + toRemove).removeClass("selected");
            $("#" + toRemove).addClass("not-selected");
        }
    }

    $(`#analytics-tabs a[href="#${tabID}"]`).tab('show');
})



var index = 0;

setInterval(function(){
    if (!userSelectedTab) {
        let currentTab = tabs[index % 3];
        // console.log(currentTab);
        // console.log(index);
        // add selected class
        $(".titles #" + currentTab + "-selector").addClass("selected"); // add the selected line to the selector, e.g. #when-selector
        $(".titles #" + currentTab + "-selector").removeClass("not-selected"); // add the selected line to the selector, e.g. #when-selector
        console.log("Adding selected to: " + ".titles #" + currentTab + "-selector");

        // remove the underline from the previously selected item
        for (var i = 0; i < tabs.length; i++) { // loop through and make sure the other selectors do not have "selected"
            // check if tabs[i] is not selected
            if (tabs[i] !== currentTab) {
                let toRemove = tabs[i] + "-selector";
                $(".titles #" + toRemove).removeClass("selected");
                $(".titles #" + toRemove).addClass("not-selected");
            }
        }

        $(`#analytics-tabs a[href="#${currentTab}"]`).tab('show');
        index++;


    }
}, 4000);