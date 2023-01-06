const Button = document.querySelector(".btn");
const coupon = document.querySelector(".coupon");

const copyText = () => {
   
   coupon.select();
   coupon.setSelectionRange(0, 99999999999999);
   document.execCommand("copy");

   Button.textContent = "COpied!!!";
   setTimeout(() => {
    Button.textContent = "Copy";
   }, 7000);
};


Button.addEventListener("click", () => {
    copyText();
})









