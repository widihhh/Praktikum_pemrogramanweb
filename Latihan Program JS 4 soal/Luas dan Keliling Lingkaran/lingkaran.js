function luas() {
  const jari = document.getElementById("r");
  const luas_l = document.getElementById("luas");
  const keliling_l = document.getElementById("keliling");

  var phi = 3.14;
  var r = jari.value;
  var d = r * 2;
  var r2 = r * r;

  var k = phi * d;
  var l = phi * r2;

  if (k % 1 != 0) {
    var keliling = k.toFixed(2);
  } else {
    var keliling = k;
  }
  if (l % 1 != 0) {
    var luas = l.toFixed(2);
  } else {
    var luas = l;
  }

  luas_l.innerHTML = "Luas Lingkaran adalah " + luas + " cm";
  keliling_l.innerHTML = "Keliling Lingkaran adalah " + keliling + " cm";
}
