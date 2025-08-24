jQuery(document).ready(function ($) {
    console.log('ready');
    const modal = document.getElementById("successModal");
    let redirectUrlOnSuccess = '';
    const closeBtn = document.querySelector(".closeBtn");
    const backBtn = document.querySelector(".modal-btn");
    const overlay = document.querySelector(".modal-overlay");
    const openModalBtn = document.getElementById("openModalBtn");

    const openModal = () => {
        modal.classList.add("active");
    };
    console.log('redirectUrlOnSuccess', redirectUrlOnSuccess);
    const closeModal = () => {
        modal.classList.remove("active");
        if (redirectUrlOnSuccess) {
            window.location.href = redirectUrlOnSuccess;
        }
    };
    closeBtn.onclick = closeModal;
    backBtn.onclick = closeModal;
    overlay.onclick = closeModal;
    jQuery('form#contact-form').on('submit', function (e) {
        console.log('submit');
        e.preventDefault();
        if ($(this).valid()) {
            openModalBtn.onclick = openModal;
            // var contact = jQuery(this).serialize();
            // redirectUrlOnSuccess = response.redirect_url;
            let formData = Object.fromEntries(new FormData(this));
            // let formData = {
            //     name: $("input[name=name]").val(),
            //     email: $("input[name=email]").val(),
            //     education: $("select[name=education]").val(),
            //     phoneNumber: $("input[name=phoneNumber]").val(),
            //     appointment: $("select[name=appointment]").val(),
            //     typeCourse: $("select[name=typeCourse]").val()
            // };
            console.log(formData);
            $.ajax({
                url: "https://bootcamp.abadnet.com/api/Camps/register-Network-camp",
                type: "POST",
                data: JSON.stringify(formData),   // نبعت كـ JSON
                contentType: "application/json",
                success: function (response) {
                    console.log("API Response:", response);

                    if (response.redirectUrl) {
                        redirectUrlOnSuccess = response.redirectUrl;
                        // window.location.href = response.redirectUrl;
                    } else {
                        alert("تم التسجيل بنجاح!");
                    }
                },
                error: function (xhr, status, error) {
                    console.error("Error:", status, error, xhr.responseText);
                    alert("حدث خطأ أثناء إرسال البيانات.");
                }
            });
        } else {
            console.log('!not valid');
        }
    });
    const sections = document.querySelectorAll(".reveal");

    sections.forEach((el) => {
        const d = el.getAttribute("data-delay");
        if (d) el.style.setProperty("--delay", d);
    });

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                    observer.unobserve(entry.target);
                }
            });
        },
        {
            threshold: 0.15,
        }
    );

    sections.forEach((sec) => observer.observe(sec));


});