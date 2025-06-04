// src/utils/antiInspect.js
export default function blockInspectTools() {
    (function preventInspect() {
        // 🔁 Reload when DevTools is opened (detect via timing + screen changes)
        let threshold = 160;
        const checkDevTools = () => {
          const widthThreshold = window.outerWidth - window.innerWidth > threshold;
          const heightThreshold = window.outerHeight - window.innerHeight > threshold;
          if (widthThreshold || heightThreshold) {
            location.reload();
          }
        };
      
        setInterval(checkDevTools, 1000);
      
        // 🖱 Disable right-click
        document.addEventListener("contextmenu", (e) => e.preventDefault());
      
        // ⌨️ Disable keyboard shortcuts for DevTools
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
      
        // 🧪 Extra: Detect open console via debugger statement
        const trap = () => {
          setInterval(() => {
            const before = new Date();
            debugger;
            const after = new Date();
            if (after - before > 100) {
              location.reload();
            }
          }, 2000);
        };
        trap();
      })();
      
  }
  