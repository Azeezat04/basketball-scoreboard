let homeEl = document.getElementById("home-score")
let guestEl = document.getElementById("guest-score")

count = 0
count2 = 0

function btn1() {
    count += 1
    homeEl.textContent = count
}


function btn2() {
    count += 2
    homeEl.textContent = count
}

function btn3() {
    count += 3
    homeEl.textContent = count
}

function guestbtn1() {
    count2 += 1
    guestEl.textContent = count2
}

function guestbtn2() {
    count2 += 2
    guestEl.textContent = count2
}

function guestbtn3() {
    count2 += 3
    guestEl.textContent = count2
}