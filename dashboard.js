/* =========================================
   LOGIN BUTTON - در همه صفحات کار می‌کند
   ========================================= */
   document.addEventListener('DOMContentLoaded', function () {
    const loginBtns = document.querySelectorAll('.login-btn');
    
    loginBtns.forEach(btn => {
        btn.addEventListener('click', function () {
            window.location.href = "login-page/index.html";
        });
    });
});