let homecount = 0

let homecountEl = document.getElementById("homecount-el")

function onepoints() {
    homecount += 1
    homecountEl.textContent = homecount
}

function twopoints() {
    homecount += 2
    homecountEl.textContent = homecount
}

function threepoints() {
    homecount += 3
    homecountEl.textContent = homecount
}

let guestcount = 0

let guestcountEl = document.getElementById("guestcount-el")

function onepointsguest() {
    guestcount += 1
    guestcountEl.textContent = guestcount
}

function twopointsguest() {
    guestcount += 2
    guestcountEl.textContent = guestcount
}

function threepointsguest() {
    guestcount += 3
    guestcountEl.textContent = guestcount
}
