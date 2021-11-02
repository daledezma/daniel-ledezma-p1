//Street Tune Price
var streetPrice = 350;
    streetPriceEl = document.getElementById("street-price");
streetPriceEl.textContent = streetPrice.toFixed(2);

//Remote Tune Price
var remotePrice = 400;
    remotePriceEl = document.getElementById("remote-price");
remotePriceEl.textContent = remotePrice.toFixed(2);

//Single Map Street Price
var singleStreetPrice = 350;
    singleStreetPriceEl = document.getElementById("single-street-price");
singleStreetPriceEl.textContent = singleStreetPrice.toFixed(2);

//Dual Map Street Price
var dualStreetPrice = 500;
    dualStreetPriceEl = document.getElementById("dual-street-price");
dualStreetPriceEl.textContent = dualStreetPrice.toFixed(2);

//Single Map Remote Price
var singleRemotePrice = 400;
    singleRemotePriceEl = document.getElementById("single-remote-price");
singleRemotePriceEl.textContent = singleRemotePrice.toFixed(2);

//Dual Map Remote Price
var dualRemotePrice = 550;
    dualRemotePriceEl = document.getElementById("dual-remote-price");
dualRemotePriceEl.textContent = dualRemotePrice.toFixed(2);

//Fuel Injectors Price
function getOption() {
    selectElement = document.querySelector('#select');
        output = selectElement.value;
    document.querySelector('.output').textContent = output;
}