// console.log("Hey bitch");

$("#open-getting-started-video").click(function() {
    analytics.track("Opened getting started modal window");
})

$("#github-icon").click(function() {
    analytics.track("Clicked on GitHub icon");
})

$("#dashboard-header").click(function() {
    analytics.track("Clicked on dashboard in header");
})