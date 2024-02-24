const clickMe = function (value) {
    const counter = document.getElementById(value);

    counter.textContent = parseInt(counter.textContent) + 1;
};
