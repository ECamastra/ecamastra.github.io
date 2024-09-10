window.addEventListener("load", function () {
  const params = new URLSearchParams(window.location.search);
  const tab = params.get("tab") ?? "esordi";

  // Colleziono tutti gli elementi HTML da controllare
  const gridEsordi = document.getElementById("esordi-grid");
  const gridEsperienze = document.getElementById("esperienze-grid");
  const gridAltro = document.getElementById("altro-grid");
  const aEsordi = document.getElementById("esordi-a");
  const aEsperienze = document.getElementById("esperienze-a");
  const aAltro = document.getElementById("altro-a");

  // nascondo TUTTE le gallerie
  if (!gridEsordi.classList.contains("d-none"))
    gridEsordi.classList.add("d-none");
  if (!gridEsperienze.classList.contains("d-none"))
    gridEsperienze.classList.add("d-none");
  if (!gridAltro.classList.contains("d-none"))
    gridAltro.classList.add("d-none");

  // in base al tab selezionato, faccio comparire la galleria corretta
  // e rendo "attivo" il tab selezionato
  switch (tab) {
    case "esordi":
      aEsordi.classList.toggle("active");
      gridEsordi.classList.remove("d-none");
      break;
    case "esperienze_in_messico":
      aEsperienze.classList.toggle("active");
      gridEsperienze.classList.remove("d-none");
      break;
    case "altro":
      aAltro.classList.toggle("active");
      gridAltro.classList.remove("d-none");
      break;
  }
});
