import { renderDashboard } from "./views/dashboard.js";
// import { renderStatistics } from "./views/statistics.js";
// import { renderImport } from "./views/import.js";
// import { renderSettings } from "./views/settings.js";

const routes = {
    dashboard: renderDashboard,
    // statistics: renderStatistics,
    // import: renderImport,
    // settings: renderSettings
};

export function navigate(view) {
    const main = document.querySelector(".main");

    main.className = `main ${view}`;

    routes[view]?.(main);
}