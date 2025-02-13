$(document).ready(function() {
    // تبديل الوضع الداكن
    $("#dark-mode-toggle").click(function() {
        $("body").toggleClass("dark-mode");

        // حفظ الحالة في localStorage
        if ($("body").hasClass("dark-mode")) {
            localStorage.setItem("darkMode", "enabled");
        } else {
            localStorage.setItem("darkMode", "disabled");
        }
    });

    // التحقق من الوضع المحفوظ عند تحميل الصفحة
    if (localStorage.getItem("darkMode") === "enabled") {
        $("body").addClass("dark-mode");
    }
});