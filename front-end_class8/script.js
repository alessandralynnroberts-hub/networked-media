function createDominoFace() {
  const face = document.createElement("div");
  face.classList.add("domino-face");
  for (let i = 0; i < 9; i++) {
    const pip = document.createElement("div");
    pip.classList.add("pip");

    if (value > 3 && i === 0) {
      pip.classList.add("dot");
    }
    face.appendChild(pip);
  }
  return face;
}

function createDomino() {
  const domino = document.createElement("div");
  domino.classList.add("domino");

  const face1 = document.createElement("div");
  face1.classList.add("domino-face");
  for (let i = 0; i < 9; i++) {
    pip.classList.add("pip");
    face1.appendChild(pip);
  }
}

const face2 = document.createElement("div");
face2.classList.add("domino-face");
for (let i = 0; i < 9; i++) {
  pip.classList.add("pip");
  face2.appendChild(pip);

  return domino;
}

const firstDomino = createDomino();
dominoContainer.appendChild(firstDomino);

for (let i = 0; i <= 6; i++) {
  for (let jj = i; j <= 6; j++) {
    const domino = createDomnio(i, j);
    dominoContainer.appendChild(domino);
  }
}
