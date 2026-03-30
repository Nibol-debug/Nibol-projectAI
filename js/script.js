// =============================================
// PENGATURAN USERNAME & PASSWORD
// Ganti isi tanda kutip di bawah sesuai
// username dan password yang kamu mau
// =============================================

var DAFTAR_AKUN = [
  { username: "admin",   password: "1234"   },
  { username: "dos34",    password: "gibranganteng" },
  { username: "dg34",    password: "gibranganteng" },
];

// =============================================
// FUNGSI CEK LOGIN
// Fungsi ini dipanggil saat tombol "Masuk" diklik
// =============================================

function cekLogin() {

  // Ambil nilai yang diketik user di input username dan password
  var inputUsername = document.getElementById("username").value;
  var inputPassword = document.getElementById("password").value;

  // Ambil elemen untuk menampilkan pesan error
  var pesanError = document.getElementById("error-msg");

  // Cek apakah input kosong
  if (inputUsername === "" || inputPassword === "") {
    pesanError.textContent = "⚠ Username dan password tidak boleh kosong!";
    return; // Berhenti, tidak lanjut cek
  }

  // Bandingkan input dengan username & password yang benar
 var akun = DAFTAR_AKUN.find(function(a) {
    return a.username === inputUsername && a.password === inputPassword;
  });

  if (akun) {
    pesanError.textContent = "";
    window.location.href = "profil.html";
  } else {

    // Login gagal → tampilkan pesan error
    pesanError.textContent = "✕ Username atau password salah!";

    // Goyang input biar keliatan salah (efek shake)
    var card = document.querySelector(".card");
    card.style.animation = "none";
    card.offsetHeight; // paksa reflow
    card.style.animation = "shake 0.4s ease";
  }
}


// =============================================
// ANIMASI SHAKE (kartu goyang kalau login salah)
// =============================================

var styleShake = document.createElement("style");
styleShake.textContent = `
  @keyframes shake {
    0%   { transform: translateX(0); }
    20%  { transform: translateX(-8px); }
    40%  { transform: translateX(8px); }
    60%  { transform: translateX(-5px); }
    80%  { transform: translateX(5px); }
    100% { transform: translateX(0); }
  }
`;
document.head.appendChild(styleShake);


// =============================================
// TEKAN ENTER = SAMA SEPERTI KLIK TOMBOL MASUK
// =============================================

document.addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
    cekLogin();
  }
});

// =============================================
// CUSTOM CURSOR RESPONSIVE
// =============================================

(function initCustomCursor() {
  const cursor = document.getElementById('customCursor');
  const ring = document.getElementById('customCursorRing');
  const isTouch = window.matchMedia('(pointer: coarse)').matches || window.matchMedia('(max-width: 768px)').matches;

  if (!cursor || !ring || isTouch) {
    return;
  }

  document.body.classList.add('cursor-active');

  let pointerX = window.innerWidth / 2;
  let pointerY = window.innerHeight / 2;
  let ringX = pointerX;
  let ringY = pointerY;

  cursor.style.left = pointerX + 'px';
  cursor.style.top = pointerY + 'px';
  ring.style.left = ringX + 'px';
  ring.style.top = ringY + 'px';

  document.addEventListener('mousemove', e => {
    pointerX = e.clientX;
    pointerY = e.clientY;
    cursor.style.left = pointerX + 'px';
    cursor.style.top = pointerY + 'px';
  });

  function animateRing() {
    ringX += (pointerX - ringX) * 0.16;
    ringY += (pointerY - ringY) * 0.16;
    ring.style.left = ringX + 'px';
    ring.style.top = ringY + 'px';
    requestAnimationFrame(animateRing);
  }
  animateRing();

  document.addEventListener('mousedown', () => {
    cursor.classList.add('cursor-click');
    ring.classList.add('cursor-click');
  });

  document.addEventListener('mouseup', () => {
    cursor.classList.remove('cursor-click');
    ring.classList.remove('cursor-click');
  });

  document.querySelectorAll('button, a, input, .logo').forEach(el => {
    el.addEventListener('mouseenter', () => {
      cursor.classList.add('hovered');
      ring.classList.add('hovered');
    });
    el.addEventListener('mouseleave', () => {
      cursor.classList.remove('hovered');
      ring.classList.remove('hovered');
    });
  });
})();
