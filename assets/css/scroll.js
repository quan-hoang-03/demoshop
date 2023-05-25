// Add sự kiện cuộn trang trong đối tượng window
window.onscroll = function() {stickyMenu()};

// Định nghĩa hàm khi sự kiện cuộn trang được kích hoạt
var header__navbar, sticky;
header__navbar = document.getElementById('header__navbar');
sticky = header__navbar.offsetTop;

function stickyMenu() {
    if(window.pageYOffset >= sticky) {
        header__navbar.classList.add("sticky");
    }else{
        header__navbar.classList.remove("sticky");
    }
}
$(document).ready(function() {
    $(window).scroll(function() {
        if($(this).scrollTop()) {
            $('.header-with-search').addClass('after');
            $('.header').addClass('after')
        }
    });
});