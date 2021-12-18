const num_1 = document.getElementById('num_1');
const num_2 = document.getElementById('num_2');
const hasil = document.getElementById('hasil');

function plus() {
    const x = num_1.value;
    const y = num_2.value;
    hasil.value = Number(x) + Number(y);
};
