function displayBlock(m, n) {
  var x = document.getElementById(`sub${m}-menu${n}`);

  if (x.style.display == "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}
