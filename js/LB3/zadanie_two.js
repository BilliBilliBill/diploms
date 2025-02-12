function assignment() {
  var a = document.getElementById("a").value;
  a = parseInt(a);
  var b = document.getElementById("b").value;
  b = parseInt(b);
  var result_label_one = document.getElementById("result_label_one");
  if (a == b) {
    a = 0;
    b = 0;
    result_label_one.textContent =
      "Числам присвоенны нули" + "a= " + a + " b= " + b;
  } else if (a > b) {
    b = a;
    result_label_one.textContent =
      "Числам присвоеннs значения 'а'" + "a= " + a + " b= " + b;
  } else {
    a = b;
    result_label_one.textContent =
      "Числам присвоеннs значения 'b'" + "a= " + a + " b= " + b;
  }
}
