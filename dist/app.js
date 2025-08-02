"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const socket_io_1 = require("socket.io");
const http_1 = __importDefault(require("http"));
const express_1 = __importDefault(require("express"));
const express_session_1 = __importDefault(require("express-session"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const dotenv_1 = __importDefault(require("dotenv"));
const path_1 = __importDefault(require("path"));
const cors_1 = __importDefault(require("./middlewares/cors"));
const auth_route_1 = __importDefault(require("./routes/auth-route"));
const thread_route_1 = __importDefault(require("./routes/thread-route"));
const reply_route_1 = __importDefault(require("./routes/reply-route"));
const like_route_1 = __importDefault(require("./routes/like-route"));
const follow_route_1 = __importDefault(require("./routes/follow-route"));
const user_route_1 = __importDefault(require("./routes/user-route"));
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const swagger_jsdoc_1 = __importDefault(require("swagger-jsdoc"));
const swaggerOptions_1 = require("./swagger/swaggerOptions");
const redisClient_1 = require("./redis/redisClient");
dotenv_1.default.config();
const isProduction = process.env.NODE_ENV === "production";
const app = (0, express_1.default)();
const server = http_1.default.createServer(app);
const specs = (0, swagger_jsdoc_1.default)(swaggerOptions_1.swaggerOptions);
(0, redisClient_1.connectRedis)();
// WebSocket Setup
const io = new socket_io_1.Server(server, {
    cors: {
        origin: "http://localhost:5173", // frontend
        credentials: true,
    },
});
app.locals.io = io;
io.on("connection", (socket) => {
    console.log("✅ User connected:", socket.id);
    socket.on("disconnect", () => {
        console.log("❌ User disconnected:", socket.id);
    });
});
// Middleware
app.use(cors_1.default);
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use((0, cookie_parser_1.default)());
app.use((0, express_session_1.default)({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
        secure: isProduction,
        httpOnly: true,
        maxAge: 24 * 60 * 60 * 1000,
    },
}));
// Static for image/thread uploads
app.use("/uploadThreads", express_1.default.static(path_1.default.join(__dirname, "..", "src/uploadThread")));
app.use("/uploadUser", express_1.default.static(path_1.default.join(__dirname, "..", "src/uploadUser/profile")));
app.use("/uploadBackground", express_1.default.static(path_1.default.join(__dirname, "..", "src/uploadUser/background")));
app.use("/uploadReplys", express_1.default.static(path_1.default.join(__dirname, "..", "src/uploadReply")));
// Routes
app.use("/api/v1/auth", auth_route_1.default);
app.use("/api/v1/thread", thread_route_1.default);
app.use("/api/v1/reply", reply_route_1.default);
app.use("/api/v1/likes", like_route_1.default);
app.use("/api/v1/follows", follow_route_1.default);
app.use("/api/v1/users", user_route_1.default);
app.use("/api-docs", swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(specs));
// Jalankan pakai `server.listen` (bukan `app.listen`)
const PORT = process.env.PORT || 2200;
server.listen(PORT, () => {
    console.log(`Server with socket.io running at http://localhost:${PORT}`);
    console.log(`Swagger UI on http://localhost:${PORT}/api-docs`);
});
