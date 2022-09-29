"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_bootstrap_1 = require("react-bootstrap");
function Business({ name, image_url, url, rating, price }) {
    let quantity = false;
    return ((0, jsx_runtime_1.jsxs)(react_bootstrap_1.Card, { className: "h-100", children: [(0, jsx_runtime_1.jsx)(react_bootstrap_1.Card.Img, { variant: "top", src: image_url, height: "200px", style: { objectFit: "cover" } }), (0, jsx_runtime_1.jsxs)(react_bootstrap_1.Card.Body, { className: "d-flex flex-column", children: [(0, jsx_runtime_1.jsxs)(react_bootstrap_1.Card.Title, { className: "d-flex justify-content-between align-items-baseline mb-4", children: [(0, jsx_runtime_1.jsx)("span", { className: "fs-2", children: name }), (0, jsx_runtime_1.jsx)("span", { className: "ms-2 text-muted", children: price })] }), (0, jsx_runtime_1.jsx)("div", { className: "mt-auto", children: quantity === false ?
                            (0, jsx_runtime_1.jsx)(react_bootstrap_1.Button, { className: "w-100", onClick: () => quantity = true, children: "+ Add to Favorites" })
                            : (0, jsx_runtime_1.jsx)(react_bootstrap_1.Button, { className: "w-100", children: "Added!" }) })] })] }));
}
exports.default = Business;
