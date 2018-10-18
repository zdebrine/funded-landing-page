// Landing page analytics

$("#header-github-icon").click(function() {
    analytics.track("Clicked on GitHub icon");
})

$("#header-dashboard-button").click(function() {
    analytics.track("Clicked on dashboard in header");
})

$("#documentation-button").click(function() {
    analytics.track("Clicked on documentation button");
    console.log("Entered doc button");
})

$("#create-geofence-button").click(function() {
    analytics.track("Clicked on create geofence button");
    console.log("Entered geofence button");
})

$("#get-started-description").click(function() {
    analytics.track("Clicked a link in the get started description");
})

$("#code-analytics").hover(function() {
    analytics.track("Hovered over code area");
})

$("#code-analytics").click(function() {
    analytics.track("Clicked on code area");
})

// Analytics Section

$("#download-template-button").click(function() {
    analytics.track("Click on 'download template' button");
})

$("#create-a-rule-button").click(function() {
    analytics.track("Click on 'create a rule' button");
})

$("#how-to-test-button").click(function() {
    analytics.track("Click on 'download template' button");
})

// video analytics

$("#getting-started-video").click(function() {
    analytics.track("Opened getting started modal window");
})

// Pricing page analytics

$("#pricing-cards").hover(function() {
    analytics.track("Hovered over pricing cards");
})

$("#pricing-free-button").click(function() {
    analytics.track("Clicked on free sign up button");
})

$("#pricing-basic-button").click(function() {
    analytics.track("Clicked on basic buy button");
})

$("#pricing-startup-button").click(function() {
    analytics.track("Clicked on startup buy button");
})

$("#pricing-enterprise-button").click(function() {
    analytics.track("Clicked on enterprise buy button");
})

$("#pricing-insight-cards").hover(function() {
    analytics.track("Hovered over pricing insight cards");
})

