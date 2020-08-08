// Berkas Javascript Handle Navigasi pada index.html

const mainNav = () => {
    // Mengaktifkan fungsi SideBar
    let elems = document.querySelectorAll(".sidenav");
    M.Sidenav.init(elems);
    loadNav();

    function loadNav() {
        // Daftarkan event listener untuk setiap tautan menu
        document
          .querySelectorAll(".sidenav a, .topnav a")
          .forEach((elm) => {
            elm.addEventListener("click", (event) => {
              // Tutup sidenav
              let sidenav = document.querySelector(".sidenav");
              M.Sidenav.getInstance(sidenav).close();

              // Muat konten halaman yang dipanggil
              page = event.target.getAttribute("href").substr(1);
              loadPage(page);
            });
        });
    };

    // Membuka Page Konten
    let page = window.location.hash.substr(1);
    if (page === "") page = "pertandingan";
    loadPage(page);

    function loadPage(page) {
        if (page === "") page = "pertandingan";
        let xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
          if (this.readyState === 4) {
            let content = document.querySelector("#body-content");
            if (this.status === 200) {
                content.innerHTML = xhttp.responseText;
                let collapse = document.querySelectorAll('.collapsible');
                let tab = document.querySelectorAll('.tabs');
                M.Collapsible.init(collapse, {accordion: false});
                M.Tabs.init(tab, {swipeable: true});
                if (page === "pertandingan"){
                  // Panggil Masing2 Fungsi Kebutuhan
                    getMatchCL();
                    getMatchPL();
                } else if (page === "liga") {
                  // Panggil Masing2 Fungsi Kebutuhan
                    getStandingCL();
                    getStandingPL();
                } else if (page === "tim") {
                  // Panggil Masing2 Fungsi Kebutuhan
                    getTeamCL();
                    getTeamPL();
                } else if (page === "favorit") {
                  // Panggil Masing2 Fungsi Kebutuhan
                    getFavTeam();
                    getFavPlayer();
                } 
            } else if (this.status == 404) {
              content.innerHTML = "<p>Halaman tidak ditemukan.</p>";
            } else {
              content.innerHTML = "<p>Ups.. halaman tidak dapat diakses.</p>";
            }
          }
        };
        xhttp.open("GET", `./pages/${page}.html`, true);
        xhttp.send();
    }

};
