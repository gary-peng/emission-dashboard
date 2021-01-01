const deviceID = '400023000c47363330353437';
const accessToken = 'ce8173708830fa0c4e19dc9c484d6d8e5d50a468';
const requestURL = 'https://api.particle.io/v1/devices/' +deviceID + '/voc/?access_token=' + accessToken;

var bar;

function getData() {
    setInterval(getVoc, 1000);
    setInterval(getRisk, 1000);
    setInterval(getAction, 1000);

    bar = new ldBar('.myBar', {
        'preset': 'fan'
    });
}

function getVoc() {
    $.getJSON(requestURL, (json) => {
        bar.set(
            json.result,
            false
        );
    });
}

function getRisk() {
    $.getJSON(requestURL, (json) => {
        $('#risk').text(json.result);
    });
}

function getAction() {
    $.getJSON(requestURL, (json) => {
        $('#action').text(json.result);
    });
}
