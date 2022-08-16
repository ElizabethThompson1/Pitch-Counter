let count = 0;
let countEl = document.getElementById("count");
let saveEl = document.getElementById("save-el");

function increment() {
  count += 1;
  countEl.textContent = count;
  console.log(count);
}

increment();

function save() {
  let savedCount = count + " - ";
  saveEl.textContent += savedCount;
  countEl.textContent = 0;
  count = 0;
}
