const draggables = document.querySelectorAll(".color");
const containers = document.querySelectorAll(".no-color");

const dragHandler = {
  dragNum: undefined,
  dropNum: undefined,
};

draggables.forEach((draggable) => {
  draggable.addEventListener("dragstart", () => {
    dragHandler.dragNum = draggable.textContent;
    draggable.classList.add("dragging");
  });

  draggable.addEventListener("dragend", () => {
    draggable.classList.remove("dragging");
  });

  draggable.addEventListener("drop", () => {});
});

containers.forEach((container) => {
  container.addEventListener("dragover", (e) => {
    e.preventDefault();
  });

  container.addEventListener("drop", () => {
    dragHandler.dropNum = container.textContent;

    if (
      dragHandler.dropNum === undefined ||
      dragHandler.dropNum !== dragHandler.dragNum
    ) {
      console.log(dragHandler);
      return;
    }

    if (dragHandler.dragNum === dragHandler.dropNum) {
      container.classList.add("color");
    }
  });
});
