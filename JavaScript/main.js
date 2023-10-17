const body = document.querySelector('body');
const modeToggle = document.getElementById('mode-toggle');

function toggleMode() {
  body.classList.toggle('dark-mode');

  const modeMessage = body.classList.contains('dark-mode') ?
    'Dark Mode' 
    : 'Light Mode';

    // Update the text titles and background color based on the theme
  if (body.classList.contains('dark-mode')) {
    // Dark theme styles
    document.querySelectorAll('.nav a').forEach(link => {
      link.style.color = 'white'; // Change text color for navigation links
    });
    document.querySelector('.nav').style.backgroundColor = '#333'; // Change navigation background color
    // Update other styles as needed
  } else {
    // Light theme styles (you can define your default styles here)
    document.querySelectorAll('.nav a').forEach(link => {
      link.style.color = 'var(--primary-color)'; // Change text color for navigation links
    });
    document.querySelector('.nav').style.backgroundColor = '#ffffff'; // Change navigation background color
    // Update other styles as needed
  }


}

modeToggle.addEventListener('click', toggleMode);

// Function to check if an element is in the viewport
function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// Function to add the animation class to elements in the viewport
function addAnimationClass() {
  const elements = document.querySelectorAll('.fade-and-slide');
  elements.forEach((element) => {
    if (isInViewport(element)) {
      element.classList.add('in');
    }
  });
}

// Add event listener for scrolling to trigger the animation
window.addEventListener('scroll', addAnimationClass);
window.addEventListener('resize', addAnimationClass);

// Initial check for elements in the viewport
addAnimationClass();

//Loading bar animation
// JavaScript function to simulate loading
function simulateLoading() {
  const loader = document.querySelector('.loader');

  // Set an interval to increase the loading progress
  let width = 0;
  const interval = setInterval(() => {
    if (width >= 100) {
      // Loading complete, hide the loader
      clearInterval(interval);
      document.querySelector('.loader-container').style.display = 'none';
    } else {
      width++;
      loader.style.width = width + '%';
    }
  }, 10); // Adjust the interval duration as needed
}

// Call the simulateLoading function when the page loads
window.addEventListener('load', simulateLoading);

