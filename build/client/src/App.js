"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_router_dom_1 = require("react-router-dom");
const react_bootstrap_1 = require("react-bootstrap");
const Home_1 = require("./pages/Home");
const Restaurants_1 = require("./pages/Restaurants");
const Favorites_1 = require("./pages/Favorites");
const About_1 = require("./pages/About");
const Navbar_1 = require("./components/Navbar");
function App() {
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(Navbar_1.Navbar, {}), (0, jsx_runtime_1.jsx)(react_bootstrap_1.Container, { className: "mb-4", children: (0, jsx_runtime_1.jsxs)(react_router_dom_1.Routes, { children: [(0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: "/", element: (0, jsx_runtime_1.jsx)(Home_1.Home, {}) }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: "/restaurants", element: (0, jsx_runtime_1.jsx)(Restaurants_1.Restaurants, {}) }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: "/favorites", element: (0, jsx_runtime_1.jsx)(Favorites_1.Favorites, {}) }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: "/about", element: (0, jsx_runtime_1.jsx)(About_1.About, {}) })] }) })] }));
}
exports.default = App;
