function NumberNegativeNumbers() {
  let N_start = parseInt(document.getElementById("N_start").value);

  let N_end = parseInt(document.getElementById("N_end").value);
  let result_N = document.getElementById("result_N");

  let count = 0;
  for (let i = N_start; i <= N_end; i++) {
    if (i % 2 != 0 && i < 0) {
      count++;
    }
  }
  result_N.textContent = "Количество " + count;
}
