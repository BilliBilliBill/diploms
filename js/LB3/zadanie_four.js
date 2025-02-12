function funk() {
  a = 1.7;
  var result_label_six = document.getElementById("result_label_six");
  var input_x1 = parseInt(document.getElementById("input_x1").value);

  switch (input_x1) {
    case 1:
    case 2:
      result_label_six.textContent =
        "Введены значения не подходящие под условие функции";
      break;
    case -2:
      result_label_six.textContent = input_x1 - a * input_x1;
      break;
    case 5:
      result_label_six.textContent = 1 / (input_x1 ** 2 + 2);
      break;
    case 3:
      result_label_six.textContent = ((input_x1 + 1) ** 2) ** (1 / 3);
      break;
  }
}
