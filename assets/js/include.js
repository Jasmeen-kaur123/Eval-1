function includeHTML() {
  const elements = document.querySelectorAll("[data-include]");
  
  elements.forEach(async (el) => {
    const file = el.getAttribute("data-include");
    if (file) {
      try {
        const response = await fetch(file);
        if (response.ok) {
          el.innerHTML = await response.text();
        } else {
          el.innerHTML = "Content not found.";
        }
      } catch (error) {
        console.error("Error loading file:", error);
        el.innerHTML = "Error loading content.";
      }
    }
  });
}

document.addEventListener("DOMContentLoaded", includeHTML);
