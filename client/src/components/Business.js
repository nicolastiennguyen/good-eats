"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_bootstrap_1 = require("react-bootstrap");
function Business({ id, name, image_url, url, rating, price, location, }) {
    return ((0, jsx_runtime_1.jsxs)(react_bootstrap_1.Card, Object.assign({ className: "h-100" }, { children: [(0, jsx_runtime_1.jsx)(react_bootstrap_1.Card.Img, { className: "center-block", variant: "top", src: image_url, alt: "restaurant-img", onClick: () => (window.location.href = url), height: "500px", style: { objectFit: 'scale-down', cursor: 'pointer' } }), (0, jsx_runtime_1.jsx)(react_bootstrap_1.Card.Body, { children: (0, jsx_runtime_1.jsxs)(react_bootstrap_1.Card.Title, { children: [(0, jsx_runtime_1.jsx)("div", Object.assign({ className: "fs-3" }, { children: name })), (0, jsx_runtime_1.jsx)("div", Object.assign({ className: "d-flex" }, { children: (0, jsx_runtime_1.jsx)("div", Object.assign({ className: "ms-1 text-muted" }, { children: location
                                    ? location.display_address
                                        ? `${location.display_address[0]} ${location.display_address[1]}`
                                        : `${location}`
                                    : null })) })), (0, jsx_runtime_1.jsxs)("div", Object.assign({ className: "ms-1 text-muted" }, { children: ["Rating: ", rating, "/5"] })), (0, jsx_runtime_1.jsx)("div", Object.assign({ className: "ms-1 text-muted" }, { children: price }))] }) })] })));
}
exports.default = Business;
