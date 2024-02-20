const containerMsg = document.querySelector("#msg");
const writeTextOnTheClipboard = async (text) => {
  try {
    const copiedText = await navigator.clipboard.writeText(text);
  } catch (e) {}
};
const copy = () => {
  const msg = document.querySelector(".paragraph_msg");
  writeTextOnTheClipboard(msg.innerText);
};

function criptografar() {
  let msgTextArea = document.querySelector("#text_input");
  let msg = msgTextArea.value;
  arrayMsg = msg.split("");
  arrayCriptografado = arrayMsg.map((letter) => {
    switch (letter) {
      case "a":
        return "ai";
      case "e":
        return "enter";
      case "i":
        return "imes";
      case "o":
        return "ober";
      case "u":
        return "ufat";
      default:
        return letter;
    }
  });
  if (arrayCriptografado.length != 0) {
    containerMsg.innerHTML = `<p class="paragraph_msg">
    ${arrayCriptografado.join("")}</p>
    <button id="btn_copy" onClick="copy()">Copiar</button>`;
  }
}
function descriptografar() {
  let msgTextArea = document.querySelector("#text_input");
  let msg = msgTextArea.value;
  let msgDescriptografada = msg.replace(/ai/g, "a");
  msgDescriptografada = msgDescriptografada.replace(/ai/g, "a");
  msgDescriptografada = msgDescriptografada.replace(/enter/g, "e");
  msgDescriptografada = msgDescriptografada.replace(/imes/g, "i");
  msgDescriptografada = msgDescriptografada.replace(/ober/g, "o");
  msgDescriptografada = msgDescriptografada.replace(/ufat/g, "u");

  if (msgDescriptografada != "") {
    containerMsg.innerHTML = `<p class="paragraph_msg">${msgDescriptografada}</p>
    <button id="btn_copy" onClick="copy()">Copiar</button>`;
  }
}
