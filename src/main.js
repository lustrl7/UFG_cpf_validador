import { validarCPF } from "./services/cpfValidator.js";
import { formatarCPF } from "./utils/format.js";

window.validar = function () {
  const input = document.getElementById("cpf");
  const resultado = document.getElementById("resultado");

  let cpf = input.value;

  input.value = formatarCPF(cpf);

  if (validarCPF(cpf)) {
    resultado.innerText = "CPF válido ✅";
    resultado.style.color = "green";
  } else {
    resultado.innerText = "CPF inválido ❌";
    resultado.style.color = "red";
  }
};
