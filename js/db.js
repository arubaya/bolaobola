// Berkas Javascript Handle IndexedDB
// Fungsi yang tersedia : getById, getAll, add, delete

let dbPromised = idb.open("bolaobola", 1, upgradeDb => {
    let teamObjectStore = upgradeDb.createObjectStore("teams", { keyPath: "id" });
    let playerObjectStore = upgradeDb.createObjectStore("players", { keyPath: "id" });
    teamObjectStore.createIndex("name", "name", { unique: false });
    playerObjectStore.createIndex("name", "name", { unique: false });
});

// Menambah Team Favorit ke Indexed Database
const addFavTeam = team =>  {
    dbPromised
    .then(db => {
        let tx = db.transaction("teams", "readwrite");
        let store = tx.objectStore("teams");
        let check = store.openCursor(team.id); //openCursor untuk check data di IndexedDB
        return check;
    })
    .then((cursor) => {
        if(!cursor){
            dbPromised
            .then(db => {
                let tx = db.transaction("teams", "readwrite");
                let store = tx.objectStore("teams");
                store.add(team);
                let btnFav = document.getElementById("fav");
                let btnDelete = document.getElementById("delete");
                btnDelete.style.display = 'block';
                btnFav.style.display = 'none';
                M.toast({html: 'Tim berhasil difavoritkan!'})
                return tx.complete;
            })
        } else {
            let btnFav = document.getElementById("fav");
            let btnDelete = document.getElementById("delete");
            btnDelete.style.display = 'block';
            btnFav.style.display = 'none';
            M.toast({html: 'Tim sudah difavoritkan!'})
        }
    })
}

// Menambah Player Favorit ke Indexed Database
const addFavPlayer = player =>  {
    dbPromised
    .then(db => {
        let tx = db.transaction("players", "readwrite");
        let store = tx.objectStore("players");
        let check = store.openCursor(player.id);//openCursor untuk check data di IndexedDB
        return check;
    })
    .then((cursor) => {
        if(!cursor){
            dbPromised
            .then(db => {
                let tx = db.transaction("players", "readwrite");
                let store = tx.objectStore("players");
                store.add(player);
                let btnFav = document.getElementById("fav");
                let btnDelete = document.getElementById("delete");
                btnDelete.style.display = 'block';
                btnFav.style.display = 'none';
                M.toast({html: 'Pemain berhasil difavoritkan!'})
                return tx.complete;
            })
        } else {
            let btnFav = document.getElementById("fav");
            let btnDelete = document.getElementById("delete");
            btnDelete.style.display = 'block';
            btnFav.style.display = 'none';
            M.toast({html: 'Pemain sudah difavoritkan!'})
        }
    })
}

// Hapus Team Favorit ke Indexed Database
const deleteFavTeam = team =>  {
    dbPromised
    .then(db => {
        let tx = db.transaction("teams", "readwrite");
        let store = tx.objectStore("teams");
        store.delete(team);
        return tx.complete;
    })
    .then(() => {
        let btnFav = document.getElementById("fav");
        let btnDelete = document.getElementById("delete");
        btnDelete.style.display = 'none';
        btnFav.style.display = 'block';
        M.toast({html: 'Tim berhasil dihapus!'})
        window.location.replace(`./team-detail.html?id=${team}`);
    })
}

// Hapus Player Favorit ke Indexed Database
const deleteFavPlayer = player =>  {
    dbPromised
    .then(db => {
        let tx = db.transaction("players", "readwrite");
        let store = tx.objectStore("players");
        store.delete(player);
        return tx.complete;
    })
    .then(() => {
        let btnFav = document.getElementById("fav");
        let btnDelete = document.getElementById("delete");
        btnDelete.style.display = 'none';
        btnFav.style.display = 'block';
        M.toast({html: 'Player berhasil dihapus!'})
        window.location.replace(`./player-detail.html?id=${player}`);
    })
}

// Ambil Seluruh Data Favorit Team
const getAllTeam = () => {
    return new Promise((resolve, reject) => {
        dbPromised
        .then(db => {
            let tx = db.transaction("teams", "readonly");
            let store = tx.objectStore("teams");
            return store.getAll();
        })
        .then(teams => {
            resolve(teams);
        })
    })
}

// Ambil Seluruh Data Favorit Player
const getAllPlayer = () => {
    return new Promise((resolve, reject) => {
        dbPromised
        .then(db => {
            let tx = db.transaction("players", "readonly");
            let store = tx.objectStore("players");
            return store.getAll();
        })
        .then(players => {
            resolve(players);
        })
    })
}

// Ambil Data Team berdasar ID
const getTeamById = id => {
    return new Promise((resolve, reject) => {
        dbPromised
          .then(db => {
            let tx = db.transaction("teams", "readonly");
            let store = tx.objectStore("teams");
            return store.get(id);
          })
          .then(team => {
                resolve(team);
          });
      });
}

// Ambil Data Player berdasar ID
const getPlayerById = id => {
    return new Promise((resolve, reject) => {
        dbPromised
          .then(db => {
            let tx = db.transaction("players", "readonly");
            let store = tx.objectStore("players");
            console.log(id)
            return store.get(id);
          })
          .then(player => {
            resolve(player);
          });
      });
}