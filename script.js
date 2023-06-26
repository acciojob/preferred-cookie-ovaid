//your JS code here. If required.
// Apply user preferences on page load
window.addEventListener('load', function() {
  const fontSizeInput = document.getElementById('fontsize');
  const fontColorInput = document.getElementById('fontcolor');

  // Get stored preferences from cookies
  const storedFontSize = getCookie('fontsize');
  const storedFontColor = getCookie('fontcolor');

  // Apply stored preferences if available
  if (storedFontSize) {
    fontSizeInput.value = storedFontSize;
    document.documentElement.style.setProperty('--fontsize', storedFontSize + 'px');
  }
  if (storedFontColor) {
    fontColorInput.value = storedFontColor;
    document.documentElement.style.setProperty('--fontcolor', storedFontColor);
  }
});

// Save user preferences on form submit
document.getElementById('customizeForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const fontSizeInput = document.getElementById('fontsize');
  const fontColorInput = document.getElementById('fontcolor');

  // Store preferences in cookies
  setCookie('fontsize', fontSizeInput.value, 365);
  setCookie('fontcolor', fontColorInput.value, 365);

  // Apply preferences to the page
  document.documentElement.style.setProperty('--fontsize', fontSizeInput.value + 'px');
  document.documentElement.style.setProperty('--fontcolor', fontColorInput.value);
});

// Function to set cookie
function setCookie(name, value, days) {
  const expires = new Date();
  expires.setTime(expires.getTime() + (days * 24 * 60 * 60 * 1000));
  document.cookie = name + '=' + value + ';expires=' + expires.toUTCString();
}

// Function to get cookie
function getCookie(name) {
  const cookieArr = document.cookie.split(';');
  for (let i = 0; i < cookieArr.length; i++) {
    const cookiePair = cookieArr[i].split('=');
    if (name === cookiePair[0].trim()) {
      return decodeURIComponent(cookiePair[1]);
    }
  }
  return null;
}
