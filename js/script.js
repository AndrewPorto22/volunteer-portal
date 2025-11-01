// ==================== Roteador SPA ====================
// Função principal que controla qual seção da página é exibida.
function routeControl() {
  let hashList = document.querySelectorAll("main > section");
  hashList.forEach((eachHash) => {
    eachHash.style.display = "none";
  });
  const hash = window.location.hash || "#home";
  let hashFixed = document.querySelector(hash);
  if (hashFixed == null) {
    hashFixed = document.getElementById("home");
    hashFixed.style.display = "block";
  } else {
    hashFixed.style.display = "block";
  }
  let removeLinks = document.querySelectorAll("header > nav > ul > li > a");
  removeLinks.forEach((eachLinks) => {
    eachLinks.classList.remove("active");
    if (eachLinks.hash == hash) {
      eachLinks.classList.add("active");
    }
  });
}

window.addEventListener("hashchange", routeControl);

// ==================== Menu Mobile ====================
function toggleMenu() {
  const menu = document.getElementById("navMenu");
  menu.classList.toggle("active");
}

// ==================== Scroll Suave ====================
function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  if (!section) return;

  const headerHeight = 70; // altura do header fixa
  const sectionPosition = section.offsetTop - headerHeight;

  window.scrollTo({ top: sectionPosition, behavior: "smooth" });

  // Fecha o menu mobile após clicar
  const menu = document.getElementById("navMenu");
  menu.classList.remove("active");
}

// ==================== Cadastro ====================
function handleSubmit(event) {
  event.preventDefault();
  const form = document.getElementById("volunteerForm");

  const nome = form.nome.value.trim();
  const email = form.email.value.trim();
  const cpf = form.cpf.value.trim();
  const telefone = form.telefone.value.trim();
  const nascimento = form.nascimento.value.trim();
  const endereco = form.endereco.value.trim();
  const cep = form.cep.value.trim();
  const cidade = form.cidade.value.trim();
  const estado = form.estado.value.trim();
  // Verifica campos obrigatórios
  if (
    !nome ||
    !email ||
    !cpf ||
    !telefone ||
    !nascimento ||
    !endereco ||
    !cep ||
    !cidade ||
    !estado
  ) {
    alert("Por favor, preencha os campos obrigatórios. (*)");
    return;
  }

  // Coleta os valores do formulário
  const formData = {
    nome,
    email,
    cpf,
    telefone,
    nascimento,
    endereco,
    cep,
    cidade,
    estado,
    disponibilidade: form.disponibilidade.value.trim(),
    areaInteresse: form["area-interesse"].value.trim(),
    experiencia: form.experiencia.value.trim(),
    motivacao: form.motivacao.value.trim(),
    dataCadastro: new Date().toLocaleString(),
  };

  // Recupera cadastros anteriores ou cria lista vazia
  let voluntarios = JSON.parse(localStorage.getItem("voluntarios")) || [];
  voluntarios.push(formData);
  localStorage.setItem("voluntarios", JSON.stringify(voluntarios));

  // Mostra mensagem de sucesso
  const successModal = document.getElementById("sucessModal");
  successModal.style.display = "flex";

  // Limpa formulário após 2 segundos
  setTimeout(() => form.reset(), 2000);

  // Esconde mensagem após 5 segundos
  setTimeout(() => (successModal.style.display = "none"), 5000);

  // Atualiza a tabela de voluntários
  exibirVoluntarios();
}

// ==================== Exibir Voluntários ====================
function exibirVoluntarios() {
  const voluntarios = JSON.parse(localStorage.getItem("voluntarios") || "[]");
  const tabelaContainer = document.getElementById("tabelaVoluntarios");

  if (!tabelaContainer) return;

  if (voluntarios.length === 0) {
    tabelaContainer.innerHTML = "<p>Nenhum voluntário cadastrado ainda.</p>";
    return;
  }

  let html = '<table border="1" cellpadding="5" cellspacing="0">';
  html +=
    "<tr><th>Nome</th><th>Email</th><th>cpf</th><th>telefone</th><th>nascimento</th><th>endereco</th><th>cep</th><th>cidade</th><th>estado</th><th>Disponibilidade</th><th>Área de Interesse</th><th>Data Cadastro</th></tr>";

  voluntarios.forEach((v) => {
    html += `<tr>
            <td>${v.nome}</td>
            <td>${v.email}</td>
            <td>${v.cpf}</td>
            <td>${v.telefone}</td>
            <td>${v.nascimento}</td>
            <td>${v.endereco}</td>
            <td>${v.cep}</td>
            <td>${v.cidade}</td>
            <td>${v.estado}</td>
            <td>${v.disponibilidade}</td>
            <td>${v.areaInteresse}</td>
            <td>${v.dataCadastro}</td>
        </tr>`;
  });

  html += "</table>";
  tabelaContainer.innerHTML = html;
}

// ==================== Animação ao Scroll ====================
window.addEventListener("scroll", () => {
  const cards = document.querySelectorAll(".card, .project-card");
  cards.forEach((card) => {
    const cardTop = card.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    if (cardTop < windowHeight - 100) {
      card.style.opacity = "1";
      card.style.transform = "translateY(0)";
    }
  });
});

// Inicializa animações e mostra voluntários ao carregar
document.addEventListener("DOMContentLoaded", () => {
  routeControl();
  const cards = document.querySelectorAll(".card, .project-card");
  cards.forEach((card) => {
    card.style.opacity = "0";
    card.style.transform = "translateY(30px)";
    card.style.transition = "opacity 0.6s ease, transform 0.6s ease";
  });

  // Mostra voluntários já cadastrados
  exibirVoluntarios();

  document
    .getElementById("volunteerForm")
    .addEventListener("submit", handleSubmit);

  const btnCloseModal = document.getElementById("closeModalButton");
  if (btnCloseModal) {
    btnCloseModal.addEventListener("click", () => {
      const successModal = document.getElementById("sucessModal");
      successModal.style.display = "none";
    });
  }
});

window.addEventListener("hashchange", routeControl);

// ==================== Máscaras ====================

//===================== CPF =============================
const cpfInput = document.getElementById("cpf");
if (cpfInput) {
  cpfInput.addEventListener("input", (e) => {
    let value = e.target.value.replace(/\D/g, "");
    if (value.length > 11) value = value.slice(0, 11);

    if (value.length > 9) {
      value =
        value.slice(0, 3) +
        "." +
        value.slice(3, 6) +
        "." +
        value.slice(6, 9) +
        "-" +
        value.slice(9, 11);
    } else if (value.length > 6) {
      value =
        value.slice(0, 3) + "." + value.slice(3, 6) + "." + value.slice(6);
    } else if (value.length > 3) {
      value = value.slice(0, 3) + "." + value.slice(3);
    }

    e.target.value = value;
  });
}

//==================== Telefone ===========================
const telefoneInput = document.getElementById("telefone");
if (telefoneInput) {
  telefoneInput.addEventListener("input", function (e) {
    let value = e.target.value.replace(/\D/g, "");
    if (value.length > 11) value = value.slice(0, 11);

    if (value.length > 6) {
      value = `(${value.slice(0, 2)}) ${value.slice(2, 7)}-${value.slice(7)}`;
    } else if (value.length > 2) {
      value = `(${value.slice(0, 2)}) ${value.slice(2)}`;
    } else if (value.length > 0) {
      value = `(${value}`;
    }

    e.target.value = value;
  });
}

//===================== CEP ==========================
const cepInput = document.getElementById("cep");
if (cepInput) {
  cepInput.addEventListener("input", (e) => {
    let value = e.target.value.replace(/\D/g, "");
    if (value.length > 8) value = value.slice(0, 8);

    if (value.length > 5) {
      value = value.slice(0, 5) + "-" + value.slice(5);
    }
    e.target.value = value;
  });
}
