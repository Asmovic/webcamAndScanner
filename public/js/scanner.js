// Enable scan events for the entire document
onScan.attachTo(document);
// Register event listener


document.addEventListener('scan', function (sScancode, iQuantity) {
    let detail = document.getElementById('detail');
    detail.innerHTML = sScancode.detail.scanCode;
});

