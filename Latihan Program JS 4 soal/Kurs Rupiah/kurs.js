const factor = 14650;

const idr = document.getElementById("idr");
const usd = document.getElementById("usd");
const rupiah = document.getElementById("rupiah");
const dollar = document.getElementById("dollar");

usd.addEventListener("input", function (ev) {
  const value = ev.currentTarget.value;
  const valueUSD = value * factor;
  [];
  const rp = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
  }).format(valueUSD);
  rupiah.value = rp;
});

idr.addEventListener("input", function (ev) {
  const value = ev.currentTarget.value;
  const valueIDR = value / factor;
  const dolr = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(valueIDR);
  dollar.value = dolr;
});
