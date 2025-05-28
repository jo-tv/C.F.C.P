/*!
Swaying photo gallery - scroll event
Created on AUGUST 29, 2023
Copyright (c) 2023 by Wakana Y.K. (https://codepen.io/wakana-k/pen/WNLrWMm)
*/
/*
Related works : 
Portforio design @wakana-k - https://codepen.io/wakana-k/pen/BaxKKvE
Swaying photo gallery - hover event @wakana-k - https://codepen.io/wakana-k/pen/oNJxbPw
*/
"use strict";
(function () {
	window.onload = () => {
		const obj = document.querySelector("#gallery");
		const time = 10000;
		function animStart() {
			if (obj.classList.contains("active") == false) {
				obj.classList.add("active");
				setTimeout(() => {
					animEnd();
				}, time);
			}
		}
		function animEnd() {
			obj.classList.remove("active");
			obj.offsetWidth;
		}
		document.addEventListener("scroll", function () {
			// scroll or scrollend
			animStart();
		});
		window.addEventListener("resize", animStart);
		animStart();
	};
})();

// تسجيل الـ Service Worker
if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
        navigator.serviceWorker
            .register("/sw.js") // تأكد أن اسم الملف صحيح
            .then(registration => {
                console.log("Service Worker مسجّل بنجاح:", registration.scope);
            })
            .catch(error => {
                console.error("فشل تسجيل Service Worker:", error);
            });
    });
}