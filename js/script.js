const form = document.getElementById("contactForm");
form.addEventListener("submit", function (e) {
  e.preventDefault();
  const nama = document.getElementById("nama").value;
  const tanggal = document.getElementById("tanggal").value;
  const gender = document.getElementById("gender").value;
  const pesan = document.getElementById("pesan").value;
  const timeNow = new Date().toString();

  document.getElementById("currentTime").textContent = timeNow;
  document.getElementById("outputNama").textContent = nama;
  document.getElementById("outputTanggal").textContent = tanggal;
  document.getElementById("outputGender").textContent = gender;
  document.getElementById("outputPesan").textContent = pesan;
});
