// Berkas Javascript Handle :
//    Register Service Worker
//    Register Push Notivication
//    Fungsi Sesuai Kebutuhan Masing2 Page:
//        (index.html, match-detail.html, team-detail.html, player-detail.html)

// Ubah string ke Uint8Array
const urlBase64ToUint8Array = base64String => {
  const padding = '='.repeat((4 - base64String.length % 4) % 4);
  const base64 = (base64String + padding)
      .replace(/-/g, '+')
      .replace(/_/g, '/');
  const rawData = window.atob(base64);
  const outputArray = new Uint8Array(rawData.length);
  for (let i = 0; i < rawData.length; ++i) {
      outputArray[i] = rawData.charCodeAt(i);
  }
  return outputArray;
}


// Register service worker
const registerServiceWorker = () => {
  return navigator.serviceWorker.register('./service-worker.js')
    .then(registration => {
      console.log('Registrasi service worker berhasil.');
      return registration;
    })
    .catch(err => {
      console.error('Registrasi service worker gagal.', err);
    });
}


const requestPermission = () => {
  if ('Notification' in window) {
    Notification.requestPermission().then(result => {
      if (result === "denied") {
        console.log("Fitur notifikasi tidak diijinkan.");
        return;
      } else if (result === "default") {
        console.error("Pengguna menutup kotak dialog permintaan ijin.");
        return;
      }
      
      if (('PushManager' in window)) {
        navigator.serviceWorker.getRegistration().then(function(registration) {
            registration.pushManager.subscribe({
                userVisibleOnly: true,
                applicationServerKey: urlBase64ToUint8Array("BJDD2A2BAinvR6c9oWJLHa9_uc76x0WYCAWYXP2kNJCViGo4PESWq8u-BrhMtdBPLzc2UJDbaMDzHzsWmrDhnIs")
            }).then(function(subscribe) {
                console.log('Berhasil melakukan subscribe dengan endpoint: ', subscribe.endpoint);
                console.log('Berhasil melakukan subscribe dengan p256dh key: ', btoa(String.fromCharCode.apply(
                    null, new Uint8Array(subscribe.getKey('p256dh')))));
                console.log('Berhasil melakukan subscribe dengan auth key: ', btoa(String.fromCharCode.apply(
                    null, new Uint8Array(subscribe.getKey('auth')))));
            }).catch(function(e) {
                console.error('Tidak dapat melakukan subscribe ', e.message);
            });
        });
      }
    });
  }
}

// Periksa service worker
if (!('serviceWorker' in navigator)) {
  console.log("Service worker tidak didukung browser ini.");
} else {
  registerServiceWorker();
  requestPermission();
}


document.addEventListener("DOMContentLoaded", () => {
  let urlParams = window.location.pathname;
  
  if (urlParams.includes("team-detail")) {
    // Halaman team-detail.html
    let urlParams = new URLSearchParams(window.location.search);
    let isFromFav = urlParams.get("saved");
    let idTeam = urlParams.get("id");
    idTeam = parseInt(idTeam);
    let btnFav = document.getElementById("fav");
    let btnDelete = document.getElementById("delete");
    let item, saved;
    
    if (isFromFav) {
      btnFav.style.display = 'none'
      saved = getDetailFavTeam();
    } else {
      btnDelete.style.display = 'none';
      item = getDetailTeam();
    }

    btnFav.onclick = () => {
      item
      .then(team => {
        addFavTeam(team)
      })
    };
    
    btnDelete.onclick = () => {
      let btnConfirm = confirm("Team akan dihapus dari favorit");
      if (btnConfirm == true) {
        deleteFavTeam(idTeam);
      } else {
        M.toast({html: 'Dibatalkan!'})
      }
      
    };
  } else if (urlParams.includes("player-detail")) {
    // Halaman player-detail.html
    let urlParams = new URLSearchParams(window.location.search);
    let isFromFav = urlParams.get("saved");
    let idPlayer = urlParams.get("id");
    idPlayer = parseInt(idPlayer);
    let btnFav = document.getElementById("fav");
    let btnDelete = document.getElementById("delete");
    let item, saved;
    
    if (isFromFav) {
      btnFav.style.display = 'none'
      saved = getDetailFavPlayer();
    } else {
      btnDelete.style.display = 'none';
      item = getDetailPlayer();
    }

    btnFav.onclick = () => {
      item
      .then(player => {
        addFavPlayer(player)
      })
    };
    
    btnDelete.onclick = () => {
      let btnConfirm = confirm("Player akan dihapus dari favorit");
      if (btnConfirm == true) {
        deleteFavPlayer(idPlayer);
      } else {
        M.toast({html: 'Dibatalkan!'})
      }
      
    };
  } else if (urlParams.includes("match-detail")) {
    // Halaman match-detail.html
    getDetailMatch();
  } else {
    // Halaman index.html
    mainNav();
  }
  
})

