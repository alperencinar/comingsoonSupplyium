document.addEventListener("mousemove", function(event) {
  // Get the position of the mouse
  let mouseX = event.clientX;
  let mouseY = event.clientY;

  // Get all floating elements
  let floatingElements = document.querySelectorAll(".floating-element");

  // Iterate through each floating element and adjust its position based on the mouse movement
  floatingElements.forEach(function(element) {
    let speed = element.getAttribute("data-speed");

    // Calculate the offset for the floating element
    let offsetX = (window.innerWidth / 2 - mouseX) * (speed / 100);
    let offsetY = (window.innerHeight / 2 - mouseY) * (speed / 100);

    // Apply the transformation to move the element based on mouse position
    element.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
  });
});
