function parseMacros() {
  document.querySelectorAll("def-macro").forEach((definition) => {
    const n = definition.getAttribute("name");
    document.querySelectorAll("[macro=" + n + "]").forEach((instance) => {
      instance.innerHTML = definition.innerHTML;
    });
  });
}

window.addEventListener("load", parseMacros);
