const container = document.querySelector("#container");

for (let i = 0; i < 256; i++) {
  const content = document.createElement("div");
  content.classList.add("content");
  container.appendChild(content);

  content.addEventListener("mouseover", () => {
    content.style.backgroundColor = "yellow";
  });
}
