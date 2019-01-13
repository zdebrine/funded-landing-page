$(".analytic-item").click(function(e) {
    let tabID = this.id.replace("-selector","");

    console.log(tabID);
    
    $(`#analytics-tabs a[href="#${tabID}"]`).tab('show');
})