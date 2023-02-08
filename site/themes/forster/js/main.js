import '../node_modules/mmenu-js';
console.log("JS LOADED1")
// Mmmenu Configuration
document.addEventListener(
  "DOMContentLoaded", () => {
    const menu = new Mmenu("#mobile-menu", {
      extensions: ["position-right", "pagedim-black", "shadow-page", "theme-dark"],
      navbars: [{
        "position": "top",
        "content": [
          "<div style='padding: 30px; max-height: 300px; width: 60%; margin: 0 auto'><img style='max-width: 100%; max-height: 100%' src='/assets/theme-assets/forster-logo-inverted.svg'> </div>"
        ]
      }]
    });

  }
);
console.log("JS LOADED2")