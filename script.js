let currentBlans = document.getElementById("currentBlans");
let addBlanceInpt =document.getElementById("addBlanceInpt");
let addBtn = document.getElementById("addBtn");
let withdrwoBtn = document.getElementById("withdrwoBtn");
let withdrwdInput = document.getElementById("withdInput");


// add money
addBtn.addEventListener("click", () => {
  let input = parseFloat(addBlanceInpt.value);
  let current = parseFloat(currentBlans.innerHTML);

  if (isNaN(input) || input <= 0) {
    alert("Please enter a valid amount!");
    return;
  }

  let total = current + input;
  currentBlans.innerHTML = total;
  addBlanceInpt.value = "";
});

// withdrw secton

withdrwoBtn.addEventListener("click", () => {
  let input = parseFloat(withdrwdInput.value);
  let current = parseFloat(currentBlans.innerHTML);

  if (isNaN(input) || input <= 0) {
    alert("Please enter a valid amount!");
    return;
  }

  if (input > current) {
    alert("Insufficient balance!");
    return;
  }

  let total = current - input;
  currentBlans.innerHTML = total;
  withdrwdInput.value = "";
});
