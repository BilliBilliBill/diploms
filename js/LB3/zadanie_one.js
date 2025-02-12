function parity() {
  var input_a = document.getElementById("input_a").value;
  input_a = parseInt(input_a);
  var input_b = document.getElementById("input_b").value;
  input_b = parseInt(input_b);
  var result_label = document.getElementById("result_label");
  if (((input_a % 2 === 0) + (input_b % 2 === 0)) % 2 === 0) {
    result_label.textContent = "TRUE:Числа имеют одинаковую четность";
  } else {
    result_label.textContent = "RALSE:Числа имеют разную четность";
  }
}
