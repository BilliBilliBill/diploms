function SearchSums() {
  let K = parseInt(document.getElementById("K").value);
  let result_label_K = document.getElementById("result_label_K");
  let S = 2;

  if (K > 1) {
    for (let i = 1; i <= K; i++) {
      if (i < K) {
        S += 2 * (K + i);
      } else {
        S += 2 * (K * 2);
        result_label_K.textContent = "Cумма рана " + S;
      }
    }
  } else {
    S += 2 * (K * 2);
    result_label_K.textContent = "Cумма рана " + S;
  }
}
