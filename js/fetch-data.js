var deviceID = "400023000c47363330353437";
var accessToken = "ce8173708830fa0c4e19dc9c484d6d8e5d50a468";

var pullVoc;
var pullRisk;
var pullAction;

var bar;

function getData() {
    pullVoc = setInterval(getVoc, 1000);
    pullRisk = setInterval(getRisk, 1000);
    pullAction = setInterval(getAction, 1000);

    bar = new ldBar(".myBar", {
        "preset": "fan"
    });
}

function getVoc() {
    var requestURL = "https://api.particle.io/v1/devices/" +deviceID + "/voc/?access_token=" + accessToken;
    $.getJSON(requestURL, function(json) {
        bar.set(
            json.result,
            false
        );
    });
}

function getRisk() {
    var requestURL = "https://api.particle.io/v1/devices/" +deviceID + "/risk/?access_token=" + accessToken;
    $.getJSON(requestURL, function(json) {
        $("#risk").text(json.result);
    });
}

function getAction() {
    var requestURL = "https://api.particle.io/v1/devices/" +deviceID + "/action/?access_token=" + accessToken;
    $.getJSON(requestURL, function(json) {
        $("#action").text(json.result);
    });
}
