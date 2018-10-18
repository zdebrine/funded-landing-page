// header analytics

$("#header-github-icon").click(function() {
    analytics.track("Clicked on GitHub icon");
})

$("#header-dashboard-button").click(function() {
    analytics.track("Clicked on dashboard in header");
})

// Landing page analytics

$("#documentation-button").click(function() {
    analytics.track("Clicked on documentation button");
})

$("#create-geofence-button").click(function() {
    analytics.track("Clicked on create geofence button");
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

$("#download-template-button").click(function() {
    analytics.track("Clicked on download template button");
})

$("#create-rule-button").click(function() {
    analytics.track("Clicked on create rule button");
})

$("#test-button").click(function() {
    analytics.track("Clicked on test button");
})

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

// footer analytics

$("#footer-careers").click(function() {
    analytics.track("Clicked on footer careers button");
})

$("#footer-about").click(function() {
    analytics.track("Clicked on footer about button");
})

$("#footer-blog").click(function() {
    analytics.track("Clicked on footer blog button");
})

$("#footer-privacypolicy").click(function() {
    analytics.track("Clicked on footer privacy policy button");
})