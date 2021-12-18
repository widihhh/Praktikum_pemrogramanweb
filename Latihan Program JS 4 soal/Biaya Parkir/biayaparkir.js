const biaya_1 = document.getElementById("biaya_1");
const lama_1 = document.getElementById("lama_1");
const jam_m1 = document.getElementById("jam_11");
const jam_k1 = document.getElementById("jam_21");

const biaya_2 = document.getElementById("biaya_2");
const lama_2 = document.getElementById("lama_2");
const jam_m2 = document.getElementById("jam_12");
const jam_k2 = document.getElementById("jam_22");

const currency = new Intl.NumberFormat("id-ID", {
  style: "currency",
  currency: "IDR",
});

function result() {
  const v_m1 = jam_m1.value;
  const v_k1 = jam_k1.value;
  const lama_11 = Number(v_k1) - Number(v_m1);
  lama_1.innerHTML = lama_11 + " jam";

  if (lama_11 >= 1) {
    if (lama_11 >= 2) {
      const biaya1 = lama_11 - 2;
      const biaya2 = biaya1 * 1000;
      const biaya3 = 3000 + biaya2;
      const biaya4 = currency.format(biaya3);

      biaya_1.innerHTML = biaya4;
    } else {
      const biaya3 = 1500;

      const biaya4 = currency.format(biaya3);

      biaya_1.innerHTML = biaya4;
    }
  } else {
    const biaya3 = 0;

    const biaya4 = currency.format(biaya3);

    biaya_1.innerHTML = biaya4;
    lama_1.innerHTML = "0 jam";
  }

  // -----------------------------------------------------

  const v_m2 = jam_m2.value;
  const v_k2 = jam_k2.value;
  const lama_22 = Number(v_k2) - Number(v_m2);
  lama_2.innerHTML = lama_22 + " jam";

  if (lama_22 >= 1) {
    if (lama_22 >= 2) {
      const biaya1 = lama_22 - 2;
      const biaya2 = biaya1 * 1000;
      const biaya3 = 3000 + biaya2;

      const biaya4 = currency.format(biaya3);

      biaya_2.innerHTML = biaya4;
    } else {
      const biaya3 = 1500;
      const biaya4 = new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
      }).format(biaya3);

      biaya_2.innerHTML = biaya4;
    }
  } else {
    const biaya3 = 0;
    const biaya4 = currency.format(biaya3);

    biaya_2.innerHTML = biaya4;
    lama_2.innerHTML = "0 jam";
  }
}
