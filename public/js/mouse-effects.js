// Check if the screen width is more than 600px (for non-mobile devices)
if (window.innerWidth > 600) {

  // Create a red line element and append it to the body
  const redLine = document.createElement('div');
  redLine.style.position = 'absolute';
  redLine.style.width = '4px';  // Width of the line
  redLine.style.height = '4px'; // Height of the line (can be adjusted for thickness)
  redLine.style.backgroundColor = 'red'; // Color of the line
  redLine.style.borderRadius = '50%';  // Make it circular
  redLine.style.pointerEvents = 'none';  // Prevent interference with other elements
  redLine.style.zIndex = '100'; // Ensure it's on top
  document.body.appendChild(redLine);

  // Floating element effect
  document.querySelectorAll('.floating-element').forEach(function(element) {
    document.addEventListener('mousemove', function(e) {
      var speed = element.getAttribute('data-speed');
      var x = (window.innerWidth - e.pageX * speed) / 100;
      var y = (window.innerHeight - e.pageY * speed) / 100;
      element.style.transform = 'translate(' + x + 'px, ' + y + 'px)';
    });
  });

  // Mouse movement event listener for the red line
  document.addEventListener('mousemove', function(e) {
    redLine.style.left = e.pageX + 'px';
    redLine.style.top = e.pageY + 'px';
  });
}
