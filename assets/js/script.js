document.addEventListener("DOMContentLoaded", function() {
    cmpt_rebours();
});

function cmpt_rebours() {
    let day = document.getElementsByClassName("Tday")[0];
    let hour = document.getElementsByClassName("Thours")[0];
    let minute = document.getElementsByClassName("Tminute")[0];
    let second = document.getElementsByClassName("Tseconde")[0];
    let now = new Date();
    let endTimes = new Date('December 31, 2024 23:59:59');
    let total_seconds = (endTimes - now) / 1000;

    if (total_seconds > 0) {
        let nb_j = Math.floor(total_seconds / (60 * 60 * 24));
        let nb_h = Math.floor((total_seconds % (60 * 60 * 24)) / (60 * 60));
        let nb_m = Math.floor((total_seconds % (60 * 60)) / 60);
        let nb_s = Math.floor(total_seconds % 60);

        day.textContent = formatTime(nb_j);
        hour.textContent = formatTime(nb_h);
        minute.textContent = formatTime(nb_m);
        second.textContent = formatTime(nb_s);

        // Calcul des indices pour chaque unité de temps
        let index_j = nb_j % 2;
        let index_h = nb_h % 2;
        let index_m = nb_m % 2;
        let index_s = nb_s % 2;
        toggleDotClasses("DTdivider", "DBdivider", index_j);
        toggleDotClasses("HTdivider", "HBdivider", index_h);
        toggleDotClasses("MTdivider", "MBdivider", index_m);
        toggleDotClasses("STdivider", "SBdivider", index_s);
        playSound(); 
    }

    setTimeout(cmpt_rebours, 1000);
}

function formatTime(t) {
    return (t < 10) ? '0' + t : t;
}

function toggleDotClasses(topId, bottomId, index) {
    let topDivider = document.getElementById(topId);
    let bottomDivider = document.getElementById(bottomId);

    if (index === 0) {
        topDivider.classList.add("dote-top");
        bottomDivider.classList.remove("dote-top");
        bottomDivider.classList.add("dote");
    } else {
        topDivider.classList.remove("dote-top");
        topDivider.classList.add("dote");
        bottomDivider.classList.add("dote-top");
        bottomDivider.classList.remove("dote");
    }
}

function playSound() {
    const audio = new Audio('assets/sound/clock-24340.mp3');
    audio.play();
}
