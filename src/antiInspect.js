// src/utils/antiInspect.js
export default function blockInspectTools() {
    (function preventInspect() {
        const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
        if (isSafari) return; // Skip for Safari (unreliable window size detection)
      
        // 🔁 DevTools open detection via debugger timing
        const trapDebugger = () => {
          setInterval(() => {
            const start = performance.now();
            debugger;
            const end = performance.now();
            if (end - start > 100) {
              location.reload();
            }
          }, 1500)
        };
      
        trapDebugger();
      
        // 🖱 Disable right-click
        document.addEventListener("contextmenu", (e) => e.preventDefault());
      
        // ⌨️ Disable DevTools hotkeys
        document.addEventListener("keydown", (e) => {
          if (
            (e.ctrlKey && e.shiftKey && ['I', 'J', 'C'].includes(e.key.toUpperCase())) || // Ctrl+Shift+I/J/C
            (e.ctrlKey && e.key.toLowerCase() === 'u') || // Ctrl+U
            e.key === 'F12'
          ) {
            e.preventDefault();
            location.reload();
          }
        });
      })();
         
  }
  