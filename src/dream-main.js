"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var config_1 = require("./config");
__exportStar(require("./api/apis"), exports);
__exportStar(require("./model/models"), exports);
var axios_1 = __importDefault(require("axios"));
var express_1 = __importDefault(require("express"));
var body_parser_1 = __importDefault(require("body-parser"));
var wikijs_1 = __importDefault(require("wikijs"));
var localtunnel_1 = __importDefault(require("localtunnel"));
var g_i_s_1 = __importDefault(require("g-i-s"));
var lodash_1 = __importDefault(require("lodash"));
var chalk_1 = __importDefault(require("chalk"));
var app = express_1.default();
app.use(body_parser_1.default.json());
var tunnel = '';
(function () { return __awaiter(void 0, void 0, void 0, function () {
    var _tunnel;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, localtunnel_1.default({
                    port: 3000,
                    subdomain: 'calcalchat'
                })];
            case 1:
                _tunnel = _a.sent();
                tunnel = _tunnel.url;
                axios_1.default({
                    method: 'post',
                    url: config_1.apiUrl + "/webhook?token=" + config_1.token,
                    data: {
                        webhookUrl: tunnel,
                    }
                }).then(function (res) {
                    app.listen(3000, function () { return console.log('Server listening on', chalk_1.default.bgGreen.black('localhost:3000'), 'tunneled to', chalk_1.default.bgCyan.black(_tunnel.url)); });
                });
                _tunnel.on('close', function () {
                    console.log('tunnels are closed');
                });
                return [2 /*return*/];
        }
    });
}); })();
app.post('/', function (req, res) {
    var command = _command(req);
    if (command) {
        console.log(chalk_1.default.bold.bgBlue.black('Command: '), chalk_1.default.bgGray.yellow.bold(command));
    }
    switch (String(command)) {
        case 'Tell me about ':
            _replyWithInfo(req);
            break;
        case 'Picture of ':
            _replyWithImage(req);
            break;
        default:
            console.log(chalk_1.default.bgRed.white('Noting happened'));
            break;
    }
    res.end();
});
function _command(req) {
    var message = (req &&
        req.body &&
        !req.body.ack &&
        lodash_1.default.isArray(req.body.messages) &&
        req.body.messages[0] &&
        req.body.messages[0].body);
    var command = message && message.match(/^(Tell me about |Picture of )/g);
    if (command !== null)
        return command;
}
function _replyWithImage(req) {
    var about = req &&
        req.body &&
        lodash_1.default.isArray(req.body.messages) &&
        req.body.messages[0] &&
        req.body.messages[0].body &&
        req.body.messages[0].body.replace(/^Picture of /g, '');
    console.log(chalk_1.default.green('Picture of '), chalk_1.default.bold.underline.greenBright(about));
    axios_1.default.post(config_1.apiUrl + "/sendMessage?token=" + config_1.token, {
        body: 'Hang tight...',
        chatId: req.body.chatId
    }).then(function (res) {
        g_i_s_1.default(about, function (err, res) {
            var _body = res[Math.floor(Math.random() * 100)].url;
            console.log(chalk_1.default.bold.yellow('Req body: '), chalk_1.default.underline(_body));
            var newUrl = _body.match(/^(.+?\.(png|jpe?g))/i)[0];
            console.log(chalk_1.default.bold.yellow('url'), chalk_1.default.underline(newUrl));
            axios_1.default.post(config_1.apiUrl + "/sendFile?token=" + config_1.token, {
                filename: newUrl,
                body: newUrl,
                message: about,
                chatId: req.body.chatId
            }, {
                headers: {
                    'Content-type': 'application/json'
                }
            });
        });
    });
}
function _replyWithInfo(req) {
    var about = req &&
        req.body &&
        lodash_1.default.isArray(req.body.messages) &&
        req.body.messages[0] &&
        req.body.messages[0].body &&
        req.body.messages[0].body.replace(/^Tell me about /g, '');
    console.log(chalk_1.default.bold.bgBlue.black('About:   '), chalk_1.default.bgGray.yellow.bold(about));
    wikijs_1.default()
        .page(about)
        .then(function (page) { return page.summary(); })
        .then(function (summary) {
        axios_1.default.post(config_1.apiUrl + "/sendMessage?token=" + config_1.token, {
            body: summary,
            chatId: req.body.chatId
        });
    })
        .catch(function (error) { return console.log(error); });
}
// function _match(str: string) {
//   const regex = /^(Tell me about |Picture of )$/g;
//   return str.match(regex)[0];
// }
