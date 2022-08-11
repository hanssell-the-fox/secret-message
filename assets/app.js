const Secret = {
  encode: true,
  decode: false,
  keys: new Map(),
};

Secret.keys.set("e", "enter");
Secret.keys.set("i", "imes");
Secret.keys.set("a", "ai");
Secret.keys.set("o", "ober");
Secret.keys.set("u", "ufat");

const toggleMessageView = () => {
  const messageOutput = document.querySelector(".output");
  const disclaimer = messageOutput.querySelector(".disclaimer");
  const messages = messageOutput.querySelector(".decrypted");
  disclaimer.classList.add("hide");
  messages.classList.remove("hide");
};

const updateMessageOutput = (newMessage) => {
  document.querySelector("#message").textContent = newMessage;
  toggleMessageView();
};

const readMessage = (mode = Secret.encode) => {
  let message = document.querySelector("#secret-phrase").value || "";

  for (const key of Secret.keys) {
    const [item, code] = mode === Secret.encode ? key : key.reverse();
    const secret = new RegExp(item, "ig");
    message = message.replace(secret, code);
  }

  updateMessageOutput(message);
};

document.querySelector("#encode").addEventListener("click", (event) => {
  event.preventDefault();
  readMessage(Secret.encode);
});

document.querySelector("#decode").addEventListener("click", (event) => {
  event.preventDefault();
  readMessage(Secret.decode);
});

document.querySelector("#copy").addEventListener("click", () => {
  const content = document.querySelector("#message").textContent;
  navigator.clipboard.writeText(content);
});
