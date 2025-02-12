function f(x) {
  a = 1.7;
  var result_label_two = document.getElementById("result_label_two");
  var result_label_three = document.getElementById("result_label_three");
  var result_label_four = document.getElementById("result_label_four");
  if (x <= -1) {
    result_label_two.textContent = x ** 2 - a * x;
  } else if (x > 4) {
    result_label_three.textContent = 1 / (x ** 2 + 2);
  }
  if (-1 < x && x <= 4) {
    result_label_four.textContent = (x + 1) ** (2 / 3);
  }
}
