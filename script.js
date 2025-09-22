// ===== Login =====
const formLogin = document.querySelector("#formLogin");
if (formLogin) {
  formLogin.addEventListener("submit", e => {
    e.preventDefault();
    const user = document.querySelector("#username").value.trim();
    const pass = document.querySelector("#password").value.trim();
    if (!user || !pass) {
      alert("Por favor completa todos los campos ❌");
    } else {
      alert("Bienvenido " + user + " ✅ (simulado)");
      window.location.href = "index.html";
    }
  });
}

// ===== Registro =====
const formRegistro = document.querySelector("#formRegistro");
if (formRegistro) {
  formRegistro.addEventListener("submit", e => {
    e.preventDefault();
    const pass1 = document.querySelector("#pass1").value;
    const pass2 = document.querySelector("#pass2").value;
    if (pass1 !== pass2) {
      alert("Las contraseñas no coinciden ❌");
    } else {
      alert("Registro exitoso ✅ (simulado)");
      formRegistro.reset();
      window.location.href = "index.html";
    }
  });
}

// ===== Recuperar =====
const formRecuperar = document.querySelector("#formRecuperar");
if (formRecuperar) {
  formRecuperar.addEventListener("submit", e => {
    e.preventDefault();
    const email = document.querySelector("#recuperarEmail").value;
    alert("Se ha enviado un enlace de recuperación a " + email + " 📧 (simulado)");
    formRecuperar.reset();
  });
}

// ===== Cambiar contraseña =====
const formCambiar = document.querySelector("#formCambiar");
if (formCambiar) {
  formCambiar.addEventListener("submit", e => {
    e.preventDefault();
    const oldPass = document.querySelector("#oldPass").value;
    const new1 = document.querySelector("#new1").value;
    const new2 = document.querySelector("#new2").value;
    if (!oldPass || !new1 || !new2) {
      alert("Completa todos los campos ❌");
    } else if (new1 !== new2) {
      alert("La nueva contraseña no coincide ❌");
    } else {
      alert("Contraseña actualizada correctamente ✅ (simulado)");
      formCambiar.reset();
      window.location.href = "index.html";
    }
  });
}

// ===== Mostrar / ocultar contraseña =====
const togglePassword = document.querySelectorAll(".toggle-pass");
togglePassword.forEach(btn => {
  btn.addEventListener("click", () => {
    const input = btn.previousElementSibling;
    if (input.type === "password") {
      input.type = "text";
      btn.classList.replace("bxs-hide", "bxs-show");
    } else {
      input.type = "password";
      btn.classList.replace("bxs-show", "bxs-hide");
    }
  });
});
