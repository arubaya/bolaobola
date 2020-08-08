// Berkas Javascript Handle API dan Modifikasi DOM 
// !!!memiliki 960++ line!!!

const urlAPI = "https://api.football-data.org/v2/";

// Parse Tanggal UTC ke Tanggal Normal
const dateParse = date => {
    let getDate = new Date(date);
    getDate = getDate.toString().substr(4, 11);
    return getDate;
}

// --- View DOM Start ---
// View Match Champions League
const viewMatchCL = (data) => {
    let matchCL = document.getElementById("l-champions");
    data.matches.forEach(match => {
        if (match.score.fullTime.homeTeam == null){
            matchCL.innerHTML +=`
            <a href="./match-detail.html?id=${match.id}" class="match blue-grey-text text-darken-4">
                <p class="blue-grey-text text-lighten-1">${dateParse(match.utcDate)}</p>
                <div class="container">
                    <div class="row">
                    <div class="col s4 m4" style="display: flex; justify-content: flex-end; align-items: center; text-align: right;">
                        <b>${match.homeTeam.name}</b>
                    </div>
                    <div class="col s4 m3 red-text text-accent-4" style="display: flex; justify-content: center; align-items: center; font-size: 18px;"><b>- - -</b></div>
                    <div class="col s4 m4" style="display: flex; justify-content: flex-start; align-items: center; text-align: left;">
                        <b>${match.awayTeam.name}</b>
                    </div>
                    </div>
                </div>
                <div class="divider"></div>
            </a>
            `
        } else {
            matchCL.innerHTML +=`
            <a href="./match-detail.html?id=${match.id}" class="match blue-grey-text text-darken-4">
            <p class="blue-grey-text text-lighten-1">${dateParse(match.utcDate)}</p>
            <div class="container">
                <div class="row">
                <div class="col s4 m4" style="display: flex; justify-content: flex-end; align-items: center; text-align: right;">
                    <b>${match.homeTeam.name}</b>
                </div>
                <div class="col s4 m3 cyan-text text-accent-4" style="display: flex; justify-content: center; align-items: center; font-size: 18px;"><b>${match.score.fullTime.homeTeam} - ${match.score.fullTime.awayTeam}</b></div>
                <div class="col s4 m4" style="display: flex; justify-content: flex-start; align-items: center; text-align: left;">
                    <b>${match.awayTeam.name}</b>
                </div>
                </div>
            </div>
            <div class="divider"></div>
            </a>
            `
        }
    });
}

// View Match Premiere League
const viewMatchPL = (data) => {
    let matchPL = document.getElementById("l-premier");
    let loader = document.getElementById("loader");
    loader.style.display = "none";
    data.matches.forEach(match => {
        if (match.score.fullTime.homeTeam == null){
            matchPL.innerHTML +=`
            <a href="./match-detail.html?id=${match.id}" class="match blue-grey-text text-darken-4">
                <p class="blue-grey-text text-lighten-1">${dateParse(match.utcDate)}</p>
                <div class="container">
                    <div class="row">
                    <div class="col s4 m4" style="display: flex; justify-content: flex-end; align-items: center; text-align: right;">
                        <b>${match.homeTeam.name}</b>
                    </div>
                    <div class="col s4 m3 red-text text-accent-4" style="display: flex; justify-content: center; align-items: center; font-size: 18px;"><b>- - -</b></div>
                    <div class="col s4 m4" style="display: flex; justify-content: flex-start; align-items: center; text-align: left;">
                        <b>${match.awayTeam.name}</b>
                    </div>
                    </div>
                </div>
                <div class="divider"></div>
            </a>
            `
        } else {
            matchPL.innerHTML +=`
            <a href="./match-detail.html?id=${match.id}" class="match blue-grey-text text-darken-4">
            <p class="blue-grey-text text-lighten-1">${dateParse(match.utcDate)}</p>
            <div class="container">
                <div class="row">
                <div class="col s4 m4" style="display: flex; justify-content: flex-end; align-items: center; text-align: right;">
                    <b>${match.homeTeam.name}</b>
                </div>
                <div class="col s4 m3 cyan-text text-accent-4" style="display: flex; justify-content: center; align-items: center; font-size: 18px;"><b>${match.score.fullTime.homeTeam} - ${match.score.fullTime.awayTeam}</b></div>
                <div class="col s4 m4" style="display: flex; justify-content: flex-start; align-items: center; text-align: left;">
                    <b>${match.awayTeam.name}</b>
                </div>
                </div>
            </div>
            <div class="divider"></div>
            </a>
            `
        }
    });
}

// View Standings Champions League
const viewStandingCL = (data) => {
    let grupA = document.getElementById('grup-a');
    let grupB = document.getElementById('grup-b');
    let grupC = document.getElementById('grup-c');
    let grupD = document.getElementById('grup-d');
    let grupE = document.getElementById('grup-e');
    let grupF = document.getElementById('grup-f');
    let grupG = document.getElementById('grup-g');
    let grupH = document.getElementById('grup-h');

    data.standings.forEach(standing => {
        if (standing.type == "TOTAL" && standing.group == "GROUP_A") {
            standing.table.forEach(list => {
                grupA.innerHTML += `
                    <tr>
                        <td>${list.position}</td>
                        <td class="valign-wrapper">
                            ${list.team.name}
                        </td>
                        <td>${list.won}</td>
                        <td>${list.goalDifference}</td>
                        <td>${list.points}</td>
                    </tr>
                    `
            })
            
        } else if (standing.type == "TOTAL" && standing.group == "GROUP_B") {
            standing.table.forEach(list => {
                grupB.innerHTML += `
                    <tr>
                        <td>${list.position}</td>
                        <td class="valign-wrapper">
                            ${list.team.name}
                        </td>
                        <td>${list.won}</td>
                        <td>${list.goalDifference}</td>
                        <td>${list.points}</td>
                    </tr>
                    `
            })
        } else if (standing.type == "TOTAL" && standing.group == "GROUP_C") {
            standing.table.forEach(list => {
                grupC.innerHTML += `
                    <tr>
                        <td>${list.position}</td>
                        <td class="valign-wrapper">
                            ${list.team.name}
                        </td>
                        <td>${list.won}</td>
                        <td>${list.goalDifference}</td>
                        <td>${list.points}</td>
                    </tr>
                    `
            })
        } else if (standing.type == "TOTAL" && standing.group == "GROUP_D") {
            standing.table.forEach(list => {
                grupD.innerHTML += `
                    <tr>
                        <td>${list.position}</td>
                        <td class="valign-wrapper">
                            ${list.team.name}
                        </td>
                        <td>${list.won}</td>
                        <td>${list.goalDifference}</td>
                        <td>${list.points}</td>
                    </tr>
                    `
            })
        } else if (standing.type == "TOTAL" && standing.group == "GROUP_E") {
            standing.table.forEach(list => {
                grupE.innerHTML += `
                    <tr>
                        <td>${list.position}</td>
                        <td class="valign-wrapper">
                            ${list.team.name}
                        </td>
                        <td>${list.won}</td>
                        <td>${list.goalDifference}</td>
                        <td>${list.points}</td>
                    </tr>
                    `
            })
        } else if (standing.type == "TOTAL" && standing.group == "GROUP_F") {
            standing.table.forEach(list => {
                grupF.innerHTML += `
                    <tr>
                        <td>${list.position}</td>
                        <td class="valign-wrapper">
                            ${list.team.name}
                        </td>
                        <td>${list.won}</td>
                        <td>${list.goalDifference}</td>
                        <td>${list.points}</td>
                    </tr>
                    `
            })
        } else if (standing.type == "TOTAL" && standing.group == "GROUP_G") {
            standing.table.forEach(list => {
                grupG.innerHTML += `
                    <tr>
                        <td>${list.position}</td>
                        <td class="valign-wrapper">
                            ${list.team.name}
                        </td>
                        <td>${list.won}</td>
                        <td>${list.goalDifference}</td>
                        <td>${list.points}</td>
                    </tr>
                    `
            })
        } else if (standing.type == "TOTAL" && standing.group == "GROUP_H") {
            standing.table.forEach(list => {
                grupH.innerHTML += `
                    <tr>
                        <td>${list.position}</td>
                        <td class="valign-wrapper">
                            ${list.team.name}
                        </td>
                        <td>${list.won}</td>
                        <td>${list.goalDifference}</td>
                        <td>${list.points}</td>
                    </tr>
                    `
            })
        }
    })
}

// View Standings Premiere League
const viewStandingPL = (data) => {
    let noGrup = document.getElementById("no-grup");
        
    data.standings.forEach(standing => {
        if (standing.type == "TOTAL") {
            standing.table.forEach(list => {
                noGrup.innerHTML += `
                <tr>
                    <td>${list.position}</td>
                    <td class="valign-wrapper">
                        ${list.team.name}
                    </td>
                    <td>${list.won}</td>
                    <td>${list.goalDifference}</td>
                    <td>${list.points}</td>
                </tr>
                `
            })
        }
    })
}

// View Team Champions League
const viewTeamCL = (data) => {
    let teamCL = document.getElementById('cl-team');
    let loader = document.getElementById("loaderCL");
    loader.style.display = "none";
    data.teams.forEach(team => {
        let teamLogo = team.crestUrl;

        if (teamLogo == null) {
            teamLogo = "./assets/ball.svg"
        } else if (!teamLogo.includes("https")) {
            teamLogo = teamLogo.replace(teamLogo.substr(0, 4), 'https');
        }
        if (teamLogo.includes("Ajax_Amsterdam") || teamLogo.includes("APOELnew") || teamLogo.includes("Lissabon") || teamLogo.includes("Riga_FC") || teamLogo.includes("SK_Slovan") || teamLogo.includes("Nkmaribor")) {
            teamLogo = "./assets/ball.svg"
        } 
        
        teamCL.innerHTML += `
        <a href="./team-detail.html?id=${team.id}" class="list-title blue-grey-text text-darken-4 waves-effect">
            <img src="${teamLogo}" alt="logo - ${team.name}" style="height: 40px; width: 40px; margin-right: 7px;">
            ${team.name}
            <i class="material-icons blue-grey-text text-darken-4" style="margin-left: auto;">navigate_next</i>
        </a>
        <div class="divider"></div>
        `
    })
}

// View Team Premiere League
const viewTeamPL = (data) => {
    let teamCL = document.getElementById('pl-team');
    let loader = document.getElementById("loaderPL");
    loader.style.display = "none";
    data.teams.forEach(team => {
        teamCL.innerHTML += `
        <a href="./team-detail.html?id=${team.id}" class="list-title blue-grey-text text-darken-4 waves-effect">
            <img src="${team.crestUrl}" alt="logo - ${team.name}" style="height: 40px; width: 40px; margin-right: 7px;">
            ${team.name}
            <i class="material-icons blue-grey-text text-darken-4" style="margin-left: auto;">navigate_next</i>
        </a>
        <div class="divider"></div>
        `
    })
}

// View Detail Match
const viewDetailMatch = (data) => {
    let hightLight = document.getElementById('hight-light');
    let headTo = document.getElementById('head-to-head');
    let score = document.getElementById('score');
    let wasit = document.getElementById('list-wasit');

    hightLight.innerHTML =`
        <br><br>
        <div class="row white-text" style="display: flex; justify-content: center;">
            <div class="col-left col s4 m4">
                <h6><b>${data.head2head.homeTeam.name}</b></h6>
            </div>
            <div class="col-center col s3 m3 cyan-text text-accent-4"><b>${data.match.score.fullTime.homeTeam} - ${data.match.score.fullTime.awayTeam}</b></div>
            <div class="col-right col s4 m4">
                <h6><b>${data.head2head.awayTeam.name}</b></h6>
            </div>
        </div>
        <p class="grey-text">${data.match.venue}</p>
    `;

    headTo.innerHTML = `
        <div class="group-title blue-grey darken-4 white-text center-align" style="padding: 1rem;"><b>Kemenangan</b></div>
        <br>
        <div class="row" style="display: flex; justify-content: center;">
            <div class="col-left col s4 m4">
                <b>${data.head2head.homeTeam.wins}</b>
            </div>
            <div class="col-center col s3 m3 green-text text-accent-4"><b>M</b></div>
            <div class="col-right col s4 m4">
                <b>${data.head2head.awayTeam.wins}</b>
            </div>
        </div>
        <div class="row" style="display: flex; justify-content: center;">
            <div class="col-left col s4 m4">
                <b>${data.head2head.homeTeam.draws}</b>
            </div>
            <div class="col-center col s3 m3 grey-text text-darken-2"><b>I</b></div>
            <div class="col-right col s4 m4">
                <b>${data.head2head.awayTeam.draws}</b>
            </div>
        </div>
        <div class="row" style="display: flex; justify-content: center;">
            <div class="col-left col s4 m4">
                <b>${data.head2head.homeTeam.losses}</b>
            </div>
            <div class="col-center col s3 m3 red-text text-accent-4"><b>K</b></div>
            <div class="col-right col s4 m4">
                <b>${data.head2head.awayTeam.losses}</b>
            </div>
        </div>
    `;

    score.innerHTML = `
        <div class="group-title blue-grey darken-4 white-text center-align" style="padding: 1rem;"><b>Score</b></div>
        <br>
        <div class="row" style="display: flex; justify-content: center;">
            <div class="col-left col s4 m4">
                <b>${data.match.score.fullTime.homeTeam}</b>
            </div>
            <div class="col-center col s3 m3 grey-text text-darken-2"><b>Full</b></div>
            <div class="col-right col s4 m4">
                <b>${data.match.score.fullTime.awayTeam}</b>
            </div>
        </div>
        <div class="row" style="display: flex; justify-content: center;">
            <div class="col-left col s4 m4">
                <b>${data.match.score.halfTime.homeTeam}</b>
            </div>
            <div class="col-center col s3 m3 grey-text text-darken-2"><b>Half</b></div>
            <div class="col-right col s4 m4">
                <b>${data.match.score.halfTime.awayTeam}</b>
            </div>
        </div>
    `;

    data.match.referees.forEach(wasits => {
        wasit.innerHTML +=`
            <div class="group-title blue-grey-text text-darken-4 center-align" style="padding: 1rem;">${wasits.name}</div>
        `
    })
}

// View Detail Team
const viewDetailTeam = (data) => {
    let teamName = document.getElementById('team-name');
    let teamProfile = document.getElementById('team-profile');
    let teamSquad = document.getElementById('team-squad');

    let teamLogo = data.crestUrl;

    if (teamLogo == null) {
        teamLogo = "../assets/ball.svg"
    } else if (!teamLogo.includes("https")) {
        teamLogo = teamLogo.replace(teamLogo.substr(0, 4), 'https');
    }
    if (teamLogo.includes("Ajax_Amsterdam") || teamLogo.includes("APOELnew") || teamLogo.includes("Lissabon") || teamLogo.includes("Riga_FC") || teamLogo.includes("SK_Slovan") || teamLogo.includes("Nkmaribor")) {
        teamLogo = "../assets/ball.svg"
    }

    teamName.innerHTML = `
        <br>
        <div class="row">
            <div class="col s8 m4">
                <img src="${teamLogo}" alt="logo - ${data.name}" style="width: 90%;">
            </div>
            <div class="col s8 m7 white-text">
                <h2>${data.name}</h2>
            </div>
        </div>
    `;

    teamProfile.innerHTML = `
        <div class="row">
            <div class="col s12 m4"><b>Nama :</b></div>
            <div class="col s12 m6">${data.name}</div>
        </div>
        <div class="divider"></div>
        <br>
        <div class="row">
            <div class="col s12 m4"><b>Didirikan :</b></div>
            <div class="col s12 m6">${data.founded}</div>
        </div>
        <div class="divider"></div>
        <br>
        <div class="row">
            <div class="col s12 m4"><b>Alamat :</b></div>
            <div class="col s12 m6">${data.address}</div>
        </div>
        <div class="divider"></div>
        <br>
        <div class="row">
            <div class="col s12 m4"><b>Nomor Telpon :</b></div>
            <div class="col s12 m6">${data.phone}</div>
        </div>
        <div class="divider"></div>
        <br>
        <div class="row">
            <div class="col s12 m4"><b>Warna Tim :</b></div>
            <div class="col s12 m6">${data.clubColors}</div>
        </div>
        <div class="divider"></div>
        <br>
        <div class="row">
            <div class="col s12 m4"><b>Stadion :</b></div>
            <div class="col s12 m6">${data.venue}</div>
        </div>
        <div class="divider"></div>
    `;

    data.squad.forEach(pemain => {
        let position = pemain.position;
        if (position == null) {
            position = "-";
        }
        teamSquad.innerHTML += `
            <a href="./player-detail.html?id=${pemain.id}" class="list-title blue-grey-text text-darken-4 waves-effect">
                <p>${pemain.name} <span class="grey-text">(${position})</span></p>
                <i class="material-icons blue-grey-text text-darken-4" style="margin-left: auto;">navigate_next</i>
            </a>
            <div class="divider"></div>
        `
    })
}

// View Detail Player
const viewDetailPlayer = (data) => {
    let playerName = document.getElementById('player-name');
    let playerProfile = document.getElementById('player-profile');
    let posisi = data.position;
    let number = data.shirtNumber;

    if (posisi == null) {
        posisi = "-";
    } 
    if (number == null) {
        number = "-";
    }

    playerName.innerHTML = `
        <div class="row">
            <div class="col s12 m12">
                <img src="./assets/pemain.svg" alt="image-detail-player" style="width: 80%;">
            </div>
            <div class="col s12 m12">
                <h3><b>${data.name}</b></h3>
            </div>
        </div>
    `;

    playerProfile.innerHTML = `
    <div class="row">
        <div class="col s12 m5"><b>Nama :</b></div>
        <div class="col s12 m6">${data.name}</div>
    </div>
    <div class="divider"></div>
    <br>
    <div class="row">
        <div class="col s12 m5"><b>Tanggal lahir :</b></div>
        <div class="col s12 m6">${data.dateOfBirth}</div>
    </div>
    <div class="divider"></div>
    <br>
    <div class="row">
        <div class="col s12 m5"><b>Tempat lahir :</b></div>
        <div class="col s12 m6">${data.countryOfBirth}</div>
    </div>
    <div class="divider"></div>
    <br>
    <div class="row">
        <div class="col s12 m5"><b>Kewarganegaraan :</b></div>
        <div class="col s12 m6">${data.nationality}</div>
    </div>
    <div class="divider"></div>
    <br>
    <div class="row">
        <div class="col s12 m5"><b>Posisi :</b></div>
        <div class="col s12 m6">${posisi}</div>
    </div>
    <div class="divider"></div>
    <br>
    <div class="row">
        <div class="col s12 m5"><b>Nomor baju :</b></div>
        <div class="col s12 m6">${number}</div>
    </div>
    <div class="divider"></div>
    `;
}

// --- View DOM End ---




// --- Fetch and Cache Start ---
// Ambil Data Match Liga Champions
const getMatchCL = () => {
    // if ('caches' in window) {
    //     caches.match(`${urlAPI}competitions/2001/matches?dateFrom=2020-01-01&dateTo=2020-12-12`).then(response => {
    //         if (response) {
    //             response.json()
    //             // Sisipin Fungsi then untuh Ubah DOM
    //             .then(responseJSON => {
    //                 if (responseJSON.error) {
    //                     console.log(responseJSON.message);
    //                 } else {
    //                     viewMatchCL(responseJSON);
    //                 }
    //             })
    //         }
    //     })
    // }

    fetch(`${urlAPI}competitions/2001/matches?dateFrom=2020-01-01&dateTo=2020-12-12`, {
        headers: {
            "X-Auth-Token": "cf0453a102f34d108a1ee3397fa24f3f"}
    })
    .then(response => {
        return response.json();
    })
    .then(responseJSON => {
        if (responseJSON.error) {
            console.log(responseJSON.message);
        } else {
            viewMatchCL(responseJSON);
        }
    })
    .catch(error => {
        console.log(error);
    })
}

// Ambil Data Match Liga Premier
const getMatchPL = () => {
    // if ('caches' in window) {
    //     caches.match(`${urlAPI}competitions/2021/matches?dateFrom=2020-06-01&dateTo=2020-07-12`).then(response => {
    //         if (response) {
    //             response.json()
    //             // Sisipin Fungsi then untuh Ubah DOM
    //             .then(responseJSON => {
    //                 if (responseJSON.error) {
    //                     console.log(responseJSON.message);
    //                 } else {
    //                     viewMatchPL(responseJSON);
    //                 }
    //             })
    //         }
    //     })
    // } 
    
    fetch(`${urlAPI}competitions/2021/matches?dateFrom=2020-06-01&dateTo=2020-07-12`, {
        headers: {
            "X-Auth-Token": "cf0453a102f34d108a1ee3397fa24f3f"}
    })
    .then(response => {
        return response.json();
    })
    .then(responseJSON => {
        if (responseJSON.error) {
            console.log(responseJSON.message);
        } else {
            viewMatchPL(responseJSON);
        }
    })
    .catch(error => {
        console.log(error);
    })
}

// Ambil Data Standings Liga Champions
const getStandingCL = () => {
    // if ('caches' in window) {
    //     caches.match(`${urlAPI}competitions/2001/standings`).then(response => {
    //         if (response) {
    //             response.json()
    //             // Sisipin Fungsi then untuh Ubah DOM
    //             .then(responseJSON => {
    //                 if (responseJSON.error) {
    //                     console.log(responseJSON.message);
    //                 } else {
    //                     viewStandingCL(responseJSON);
    //                 }
    //             })
    //         }
    //     })
    // }

    fetch(`${urlAPI}competitions/2001/standings`, {
        headers: {
            "X-Auth-Token": "cf0453a102f34d108a1ee3397fa24f3f"}
    })
    .then(response => {
        return response.json();
    })
    .then(responseJSON => {
        if (responseJSON.error) {
            console.log(responseJSON.message);
        } else {
            viewStandingCL(responseJSON);
        }
    })
    .catch(error => {
        console.log(error);
    })
}

// Ambil Data Standings Liga Premier
const getStandingPL = () => {
//     if ('caches' in window) {
//     caches.match(`${urlAPI}competitions/2021/standings`).then(response => {
//         if (response) {
//             response.json()
//             // Sisipin Fungsi then untuh Ubah DOM
//             .then(responseJSON => {
//                 if (responseJSON.error) {
//                     console.log(responseJSON.message);
//                 } else {
//                     viewStandingPL(responseJSON);
//                 }
//             })
//         }
//     })
// }

    fetch(`${urlAPI}competitions/2021/standings`, {
        headers: {
            "X-Auth-Token": "cf0453a102f34d108a1ee3397fa24f3f"}
    })
    .then(response => {
        return response.json();
    })
    .then(responseJSON => {
        if (responseJSON.error) {
            console.log(responseJSON.message);
        } else {
            viewStandingPL(responseJSON);
        }
    })
    .catch(error => {
        console.log(error);
    })
}

// Ambil data Team Liga Champions
const getTeamCL = () => {
    // if ('caches' in window) {
    //     caches.match(`${urlAPI}competitions/2001/teams`).then(response => {
    //         if (response) {
    //             response.json()
    //             // Sisipin Fungsi then untuh Ubah DOM
    //             .then(responseJSON => {
    //                 if (responseJSON.error) {
    //                     console.log(responseJSON.message);
    //                 } else {
    //                     viewTeamCL(responseJSON);
    //                 }
    //             })
    //         }
    //     })
    // }

    fetch(`${urlAPI}competitions/2001/teams`, {
        headers: {
            "X-Auth-Token": "cf0453a102f34d108a1ee3397fa24f3f"}
    })
    .then(response => {
        return response.json();
    })
    .then(responseJSON => {
        if (responseJSON.error) {
            console.log(responseJSON.message);
        } else {
            viewTeamCL(responseJSON);
        }
    })
    .catch(error => {
        console.log(error)
    })
}

// Ambil data Team Liga Premier
const getTeamPL = () => {
    //     if ('caches' in window) {
    //     caches.match(`${urlAPI}competitions/2021/teams`).then(response => {
    //         if (response) {
    //             response.json()
    //             // Sisipin Fungsi then untuh Ubah DOM
    //             .then(responseJSON => {
    //                 if (responseJSON.error) {
    //                     console.log(responseJSON.message);
    //                 } else {
    //                     viewTeamPL(responseJSON);
    //                 }
    //             })
    //         }
    //     })
    // }

    fetch(`${urlAPI}competitions/2021/teams`, {
        headers: {
            "X-Auth-Token": "cf0453a102f34d108a1ee3397fa24f3f"}
    })
    .then(response => {
        return response.json();
    })
    .then(responseJSON => {
        if (responseJSON.error) {
            console.log(responseJSON.message);
        } else {
            viewTeamPL(responseJSON);
        }
    })
    .catch(error => {
        console.log(error);
    })
    
}

// Ambil Detail Match
const getDetailMatch = () => {
    return new Promise((resolve, reject) => {
        // Ambil query parameter link ?id
        let urlParams = new URLSearchParams(window.location.search);
        let idParam = urlParams.get("id");
        if ( idParam == null) {
            window.location.replace("../index.html");
        }

        if ('caches' in window) {
            caches.match(`${urlAPI}matches/${idParam}`).then(response => {
                if (response) {
                    response.json()
                    // Sisipin Fungsi then untuh Ubah DOM
                    .then(responseJSON => {
                        if (responseJSON.error) {
                            console.log(responseJSON.message);
                        } else {
                            viewDetailMatch(responseJSON);
                        }
                    })
                }
            })
        }

        fetch(`${urlAPI}matches/${idParam}`, {
            headers: {
                "X-Auth-Token": "cf0453a102f34d108a1ee3397fa24f3f"}
        })
        .then(response => {
            return response.json();
        })
        .then(responseJSON => {
            if (responseJSON.error) {
                console.log(responseJSON.message);
            } else {
                viewDetailMatch(responseJSON);
            }
        })
        .catch(error => {
            console.log(error);
        })

    })
}

// Ambil Detail Team
const getDetailTeam = () => {
    return new Promise((resolve, reject) => {
        // Ambil query parameter link ?id
        let urlParams = new URLSearchParams(window.location.search);
        let idParam = urlParams.get("id");
        if ( idParam == null) {
            window.location.replace("./index.html#tim");
        }

        if ('caches' in window) {
        caches.match(`${urlAPI}teams/${idParam}`).then(response => {
                if (response) {
                    response.json()
                    // Sisipin Fungsi then untuh Ubah DOM
                    .then(responseJSON => {
                        if (responseJSON.error) {
                            console.log(responseJSON.message);
                        } else {         
                            viewDetailTeam(responseJSON);
                        }
                        resolve(responseJSON);
                    })
                }
            })
        }

        fetch(`${urlAPI}teams/${idParam}`, {
            headers: {
                "X-Auth-Token": "cf0453a102f34d108a1ee3397fa24f3f"}
        })
        .then(response => {
            return response.json();
        })
        .then(responseJSON => {
            if (responseJSON.error) {
                console.log(responseJSON.message);
            } else {
                viewDetailTeam(responseJSON);
            }
            resolve(responseJSON);
        })
        .catch(error => {
            console.log(error);
        })

    })
}

// Ambil Detail Player
const getDetailPlayer = () => {
    return new Promise((resolve, reject) => {
        // Ambil query parameter link ?id
        let urlParams = new URLSearchParams(window.location.search);
        let idParam = urlParams.get("id");
        if ( idParam == null) {
            window.location.replace("./index.html#tim");
        }

        if ('caches' in window) {
        caches.match(`${urlAPI}players/${idParam}`).then(response => {
                if (response) {
                    response.json()
                    // Sisipin Fungsi then untuh Ubah DOM
                    .then(responseJSON => {
                        if (responseJSON.error) {
                            console.log(responseJSON.message);
                        } else {
                            viewDetailPlayer(responseJSON);
                        }
                        resolve(responseJSON);
                    })
                }
            })
        }

        fetch(`${urlAPI}players/${idParam}`, {
            headers: {
                "X-Auth-Token": "cf0453a102f34d108a1ee3397fa24f3f"}
        })
        .then(response => {
            return response.json();
        })
        .then(responseJSON => {
            if (responseJSON.error) {
                console.log(responseJSON.message);
            } else {
                viewDetailPlayer(responseJSON);
            }
            resolve(responseJSON);
        })
        .catch(error => {
            console.log(error);
        })

    })
};

// Ambil List Favorit Team
const getFavTeam = () => {
    getAllTeam()
    .then(teams => {
        let teamFav = document.getElementById('team-fav');
        
        teams.forEach(team => {
            teamFav.innerHTML += `
            <a href="./team-detail.html?id=${team.id}&saved=true" class="list-title blue-grey-text text-darken-4 waves-effect"> 
                ${team.name}
                <i class="material-icons blue-grey-text text-darken-4" style="margin-left: auto;">navigate_next</i>
            </a>
            <div class="divider"></div>
            <br>
            `
        })
    })
}

// Ambil List Favorit Player
const getFavPlayer = () => {
    getAllPlayer()
    .then(players => {
        let playerFav = document.getElementById('player-fav');
        
        players.forEach(player => {
            playerFav.innerHTML += `
            <a href="./player-detail.html?id=${player.id}&saved=true" class="list-title blue-grey-text text-darken-4 waves-effect"> 
                ${player.name}
                <i class="material-icons blue-grey-text text-darken-4" style="margin-left: auto;">navigate_next</i>
            </a>
            <div class="divider"></div>
            <br>
            `
        })
    })
}


// Ambil Detail Team dari IndexedDB
const getDetailFavTeam = () => {
    let urlParams = new URLSearchParams(window.location.search);
    let idParam = parseInt(urlParams.get("id"));

    getTeamById(idParam)
    .then(team => {
        viewDetailTeam(team);
    })
    .catch(() => {
        window.location.replace(`./team-detail.html?id=${idParam}`);
    })
}

// Ambil Detail Player dari Indexed DB
const getDetailFavPlayer = () => {
    let urlParams = new URLSearchParams(window.location.search);
    let idParam = parseInt(urlParams.get("id"));

    getPlayerById(idParam)
    .then(player => {
        viewDetailPlayer(player);
    })
    .catch(() => {
        window.location.replace(`./player-detail.html?id=${idParam}`);
    }) 
}
// --- Fetch and Cache End ---
