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

let team2 = prompt("Please enter the name of Team - 2","TEAM - 2");
if(team2 == null || team2 == "") {
    team_2.innerText = "TEAM 2"
}
else {
    team_2.innerText = team2
}



let team1_count = 0
let team2_count = 0
let count = 0
check()


function end_id() {
    if(team1_count == team2_count )
    alert("THERE IS A TIE!");
    else if(team1_count > team2_count)
    alert( team_1.innerText + " IS THE WINNER!")
    else
    alert ( team_2.innerText + " IS THE WINNER!")
    new_id()

}

function check() {
    if(team1_count == 0 && team2_count == 0  && count == 0 ){
        lead.textContent = "LET THE MATCH BEGIN!"
    }
    else if(team1_count == team2_count){
        lead.textContent = "TIE "
    }
    if(team1_count > team2_count){
        result = team1_count - team2_count
        lead.textContent = "Team " + team_1.innerText + " is leading by " + result + " run(s) "
    }
    
    if(team2_count > team1_count){
        result = team2_count - team1_count
        lead.textContent = "Team " + team_2.innerText + " is leading by " + result + " run(s) " 
    }
}


function home_1() {
    team1_count += 1
    home_el.innerText = team1_count
    count++
    check()
}

function home_2() {
    team1_count += 2
    home_el.innerText = team1_count
    count++
    check()
}

function home_3() {
    team1_count += 3
    home_el.innerText = team1_count
    count++
    check()
}

function guest_1() {
    team2_count += 1
    guest_el.innerText = team2_count
    count++
    check()
}

function guest_2() {
    team2_count += 2
    guest_el.innerText = team2_count
    count++
    check()
}

function guest_3() {
    team2_count += 3
    guest_el.innerText = team2_count
    count++
    check()
}

function new_id() {
    team1_count = 0
    team2_count = 0
    home_el.innerText = 0
    guest_el.innerText = 0
    count = 0
    check()
}

function home_r() {
    team1_count = 0
    home_el.innerText = team1_count
    count++
    check()
}

function guest_r() {
    team2_count = 0
    guest_el.innerText = team2_count
    count++
    check()
}

function home__1() {
    team1_count +=-1
    home_el.innerText = team1_count
    count++
    check()
}
function home__2() {
    team1_count +=-2
    home_el.innerText = team1_count
    count++
    check()
}
function home__3() {
    team1_count +=-3
    home_el.innerText = team1_count
    count++
    check()
}
function guest__1() {
    team2_count += -1
    guest_el.innerText = team2_count
    count++
    check()
}
function guest__2() {
    team2_count += -2
    guest_el.innerText = team2_count
    count++
    check()
}
function guest__3() {
    team2_count += -3
    guest_el.innerText = team2_count
    count++
    check()
}
