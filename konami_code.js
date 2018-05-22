const codes = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a"
];

function init() {
  document.body.addEventListener('keydown', function (e) {
    const key = e.key;
    let index = 0;

    if (key === codes[index]) {
      index++;
      if (index === codes.length) {
        window.alert("Congratulations, you're a cheater.");
       index = 0;
      }
    } else {
      index = 0;
    }
  });
}
