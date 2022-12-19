let home_el = document.getElementById("home_id")
let guest_el = document.getElementById("guest_id")
let lead = document.getElementById("lead_id")
let team_1 = document.getElementById("team_1")
let team_2 = document.getElementById("team_2")

let team1 = prompt("Please enter the name of Team - 1", "TEAM - 1");
if (team1 == null || team1 == "") {
    team_1.innerText = "TEAM 1"
} else {
    team_1.innerText = team1
}

let team2 = prompt("Please enter the name of team 2","TEAM - 2");
if(team2 == null || team2 == "") {
    team_2.innerText = "TEAM 2"
}
else {
    team_2.innerText = team2
}



let home_count = 0
let guest_count = 0
let count = 0
check()


function end_id() {
    if(home_count == guest_count )
    alert("THERE IS A TIE!");
    else if(home_count > guest_count)
    alert( team_1.innerText + " IS THE WINNER!")
    else
    alert ( team_2.innerText + " IS THE WINNER!")
    new_id()

}

function check() {
    if(home_count == 0 && guest_count == 0  && count == 0 ){
        lead.textContent = "LET THE MATCH BEGIN!"
    }
    else if(home_count == guest_count){
        lead.textContent = "LEADING: Tie "
    }
    if(home_count > guest_count){
        result = home_count - guest_count
        lead.textContent = "LEADING: Team " + team_1.innerText + " by " + result + " run "
    }
    
    if(guest_count > home_count){
        result = guest_count - home_count
        lead.textContent = "LEADING: Team " + team_2.innerText + " by " + result + " run " 
    }
}


function home_1() {
    home_count += 1
    home_el.innerText = home_count
    count++
    check()
}

function home_2() {
    home_count += 2
    home_el.innerText = home_count
    count++
    check()
}

function home_3() {
    home_count += 3
    home_el.innerText = home_count
    count++
    check()
}

function guest_1() {
    guest_count += 1
    guest_el.innerText = guest_count
    count++
    check()
}

function guest_2() {
    guest_count += 2
    guest_el.innerText = guest_count
    count++
    check()
}

function guest_3() {
    guest_count += 3
    guest_el.innerText = guest_count
    count++
    check()
}

function new_id() {
    home_count = 0
    guest_count = 0
    home_el.innerText = 0
    guest_el.innerText = 0
    count = 0
    check()
}

function home_r() {
    home_count = 0
    home_el.innerText = home_count
    count++
    check()
}

function guest_r() {
    guest_count = 0
    guest_el.innerText = guest_count
    count++
    check()
}

function home__1() {
    home_count +=-1
    home_el.innerText = home_count
    count++
    check()
}
function home__2() {
    home_count +=-2
    home_el.innerText = home_count
    count++
    check()
}
function home__3() {
    home_count +=-3
    home_el.innerText = home_count
    count++
    check()
}
function guest__1() {
    guest_count += -1
    guest_el.innerText = guest_count
    count++
    check()
}
function guest__2() {
    guest_count += -2
    guest_el.innerText = guest_count
    count++
    check()
}
function guest__3() {
    guest_count += -3
    guest_el.innerText = guest_count
    count++
    check()
}
