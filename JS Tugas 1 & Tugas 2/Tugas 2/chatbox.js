function kirimPesan() {
    let psn = document.getElementById("pesan");
    let cht = document.getElementById("message").value;

    if (cht) {
      psn.innerHTML += `${cht} <br>`;
    };
    
    document.getElementById("message").value = "";
  }