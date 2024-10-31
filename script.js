const generateBtn = document.querySelector(".button");
const qrInput = document.querySelector(".input");
const qrBox = document.querySelector(".qr-image");
const qrImage = document.querySelector(".qr-image img");
generateBtn.addEventListener("click", () => {
  let qrValue = qrInput.value;
  if (!qrValue) {
    return alert("لطفا ادرس یا متن خود را وارد کنید");
  }
  generateBtn.textContent = `درحال دریافت QR Code`;
  qrImage.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data= ${qrInput.value}`;
  qrImage.addEventListener("load", () => {
    generateBtn.textContent = "تولید QR Code";
    qrBox.classList.remove("d-none");
  });
});
qrInput.addEventListener("keyup", () => {
  if (!qrInput.value) {
    qrBox.classList.add("d-none");
  }
});
