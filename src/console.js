// This disables all console output
(function silenceConsole() {
    const noop = () => {};
    const methods = [
      "log", "warn", "error", "info", "debug", "trace", "table", "dir", "dirxml", "group",
      "groupCollapsed", "groupEnd", "count", "countReset", "assert", "time", "timeLog", "timeEnd",
      "clear", "profile", "profileEnd"
    ];
  
    for (const method of methods) {
      if (typeof console[method] === "function") {
        console[method] = noop;
      }
    }
  })();
  