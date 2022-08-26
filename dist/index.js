"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
exports.__esModule = true;
var express_1 = __importDefault(require("express"));
var http_proxy_middleware_1 = require("http-proxy-middleware");
var cors_1 = __importDefault(require("cors"));
var dotenv_1 = __importDefault(require("dotenv"));
dotenv_1["default"].config();
var app = (0, express_1["default"])();
app.use((0, cors_1["default"])());
app.use('/api', (0, http_proxy_middleware_1.createProxyMiddleware)({
    target: "".concat(process.env.API_URL),
    changeOrigin: true,
    pathRewrite: (_a = {},
        _a["^/api"] = '',
        _a)
}));
var port = process.env.PORT;
app.listen(port, function () { return console.log("Running on port ".concat(port)); });
//# sourceMappingURL=index.js.map