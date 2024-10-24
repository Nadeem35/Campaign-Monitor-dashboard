$(document).ready(function() {
    $(".hamburger").click(function() {
        $("#sidebar-collapse").toggleClass("open");
    });

    $(".sidebar a").click(function() {
        $(".sidebar a").removeClass("active");
        $(this).addClass("active");
    });
});




// ====== Numver Counter =====

document.addEventListener('DOMContentLoaded', function() {
    const counters = document.querySelectorAll('.number');
    counters.forEach(counter => {
        const updateCounter = () => {
            const target = +counter.getAttribute('data-target');
            const count = +counter.innerText;

            const increment = target / 100;

            if (count < target) {
                counter.innerText = Math.ceil(count + increment);
                setTimeout(updateCounter, 100); // Adjust speed of the counter increment
            } else {
                counter.innerText = target;
            }
        };
        updateCounter();
    });
});