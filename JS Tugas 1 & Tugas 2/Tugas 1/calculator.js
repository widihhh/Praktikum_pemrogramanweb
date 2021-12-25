function numberWithDots(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

function hitungKurs() {
  let idr = document.getElementById("idr").value;

  console.log(idr);
  let kurs = document.getElementById("kurs").value;
  switch (kurs) {
    case "usd":
      document.getElementById("hasil").value = `Rp ${numberWithDots(
        parseFloat(idr) * 14228
      )},-`;
      break;
    case "sgd":
      document.getElementById("hasil").value = `Rp ${numberWithDots(
        parseFloat(idr) * 10441
      )},-`;
      break;
    case "myr":
      document.getElementById("hasil").value = `Rp ${numberWithDots(
        parseFloat(idr) * 3380
      )},-`;
      break;
    case "jpy":
      document.getElementById("hasil").value = `Rp ${numberWithDots(
        parseFloat(idr) * 129
      )},-`;
      break;
    case "eur":
      document.getElementById("hasil").value = `Rp ${numberWithDots(
        parseFloat(idr) * 16180
      )},-`;
      break;
    case "sar":
      document.getElementById("hasil").value = `Rp ${numberWithDots(
        parseFloat(idr) * 3789
      )},-`;
      break;
    default:
      break;
  }
}
