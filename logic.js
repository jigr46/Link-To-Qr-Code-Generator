// this function we take input link from user and will convert it into qrcode
function generateQrCode(){
    var url = document.getElementById("urlInput").value;
    var qrcodeDiv = document.getElementById("qrcode");
// to clear the div block
qrcodeDiv.innerHTML= "";

var qrcodeDiv = new QRCode(qrcodeDiv,{
text:url,
width:128,
height:128,
});
}
//when user press this button qr code will be generated 
let bt = document.getElementById("btn-1");
bt.addEventListener('click',generateQrCode);
