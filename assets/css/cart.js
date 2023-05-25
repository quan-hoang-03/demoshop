$(document).ready(function() {
    var cartCountValue = 0;
    var cartCount = $('.header__cart .quality');
    $(cartCount).text(cartCountValue);
  
    $('.btn-add').on('click', function(){
      var cartBtn = this;
      var cartCountPosition = $(cartCount).offset();
      var btnPosition = $(this).offset();
      var leftPos = 
      cartCountPosition.left < btnPosition.left
      ? btnPosition.left - (btnPosition.left - cartCountPosition.left)
      : cartCountPosition.left;
      
    var topPos =
      cartCountPosition.top < btnPosition.top
      ? cartCountPosition.top
      : cartCountPosition.top
      $(cartBtn)
      .append("<span class='quality'>1</span>");
      $(cartBtn).find(".quality").each(function (i,count){
         $(quality).offset({
          left: leftPos,
          top: topPos
         })
         .animate({
          opcity : 0
         },
         800,
         function(){
          $this.remove();
          cartCountValue++;
          $(cartCount).text(cartCountValue);
         }
         );
      });
    });
  });

// let count = 0;
// const counter = document.getElementById('counter');
// document.getElementById('add-animation').addEventListener('click', event =>{
//   const cl = counter.classList;
//   const c = 'animated-counter';
//   count++;

//   counter.innerText = count;
//   cl.remove(c,cl.contains(c));
//   setTimeout(()=>
//   counter.classList.add('animated-counter')
//   ,0)
// })

const button = document.querySelector(".btn-add")
const btn = Array.from(button);
btn.forEach(function(button,index) {
  button.addEventListener('click', function(event){
    var btnItem = event.target
    var product = btnItem.parentElement
    var productImg = product.querySelector("#main-img2").src
    var productName = product.querySelector(".cart__container--product-title").innerText
    var productPrice = product.querySelector(".price span").innerText
    addcart(productImg, productName, productPrice)
})

})

function addcart(productImg,productName,productPrice){
  var addtr = document.createElement("tr")
  var cartItem = document.querySelectorAll("tbody tr")
  alert("Đã thêm sản phẩm vào trong giỏ")
  for(var i=0; i < cartItem.length; i++){
      var producttronggio = document.querySelectorAll(".tensp")
      if(producttronggio[i].innerHTML==productName){
          alert("sản phảm đã có trong giỏ!")
          return
      }
  }
  // trcontent la bien chua table la khi an vao them gio hang nó se hien ra day du thong tin trong table cua minh
  var trcontent = '<tr><td style="display: flex; align-items: center;"><img style="width: 70px;" src="'+productImg+'"><span class="tensp">'+productName+'</span></td><td><p><span class="giatien">'+productPrice+'</span> <sup>VND</sup></p></td><td><input style="width: 30px; outline: none; color: #000;" type="number" value="1" min="0"></td><td style="cursor: pointer;"><span class="xoa">Xóa</span></td></tr>'
  //để trả về mã html bên trong phần tử nghĩa là nó dịch từ dữ liệu ra thành chữ cho mình
  addtr.innerHTML = trcontent
  var cartTable = document.querySelector("tbody")
  //append là một phương thức dùng để thêm nội dung vào vị trí cuối của phần tử nghĩa là cartTable sẽ đc thêm vào sau addcart
  cartTable.append(addtr)
  carttotal()
  xoa()
}
function carttotal(){
  var cartItem = document.querySelectorAll("tbody tr")
  var tongtiengiohang = 0
  for(var i=0; i< cartItem.length; i++){
      var inputValue = cartItem[i].querySelector("input").value
      var productPrice = cartItem[i].querySelector(".giatien").innerText
      var productPrice = productPrice.split('.').join('');
      tongtien = inputValue*productPrice
      tongtiengiohang = tongtiengiohang + tongtien
      console.log(tongtiengiohang)
  }
  var carttongtien = document.querySelector(".tongtien span")
  carttongtien.innerHTML = tongtiengiohang
  soluongthaydoi()
}
function xoa(){
  var cartItem = document.querySelectorAll("tbody tr")
  for(var i=0; i< cartItem.length; i++){
      var producttronggio = document.querySelectorAll(".xoa")
      producttronggio[i].addEventListener("click",function(event){
          var xoasp = event.target
          var sptronggio = xoasp.parentElement.parentElement
          sptronggio.remove()
          carttotal()
      })
      
  }
}
function soluongthaydoi(){
  var cartItem = document.querySelectorAll("tbody tr")
  for(var i=0; i< cartItem.length; i++){
      var slsp = cartItem[i].querySelector("input")
      slsp.addEventListener("change",function(){
          carttotal()
      })
      
  }
}
const cartbtn = document.querySelector(".fa-circle-xmark")
const cartshow = document.querySelector(".header__cart-word")
cartshow.addEventListener("click",function(){
    document.querySelector(".cart-product").style.right ="0"
})
cartbtn.addEventListener("click",function(){
    document.querySelector(".cart-product").style.right ="-100%"
})