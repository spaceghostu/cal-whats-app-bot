"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
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
// This is the entrypoint for the package
__exportStar(require("./api/apis"), exports);
__exportStar(require("./model/models"), exports);
var axios_1 = __importDefault(require("axios"));
var express_1 = __importDefault(require("express"));
var body_parser_1 = __importDefault(require("body-parser"));
var wikijs_1 = __importDefault(require("wikijs"));
var localtunnel_1 = __importDefault(require("localtunnel"));
var moment_1 = __importDefault(require("moment"));
var g_i_s_1 = __importDefault(require("g-i-s"));
var give_me_a_joke_1 = __importDefault(require("give-me-a-joke"));
var one_liner_joke_1 = __importDefault(require("one-liner-joke"));
var knock_knock_jokes_1 = __importDefault(require("knock-knock-jokes"));
var yo_mamma_1 = __importDefault(require("yo-mamma"));
var catFacts = __importStar(require("get-cat-facts"));
var facts = __importStar(require("facts-generator"));
var freefacts_1 = require("freefacts");
var imdb_trivia_1 = __importDefault(require("imdb-trivia"));
var is_prime_value_1 = __importDefault(require("is-prime-value"));
var app = express_1.default();
app.use(body_parser_1.default.json());
var apiUrl = 'https://api.chat-api.com/instance237471';
var token = '1zr7u3x08vfu82x6';
process.on('unhandledRejection', function (err) {
    console.log(err);
});
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
                    url: apiUrl + "/webhook?token=" + token,
                    data: {
                        webhookUrl: tunnel,
                    }
                }).then(function (res) {
                    app.listen(3000, function () { return console.log("Server listening on localhost:3000 tunneled to " + _tunnel.url + "!"); });
                });
                _tunnel.on('close', function () {
                    console.log('tunnels are closed');
                });
                return [2 /*return*/];
        }
    });
}); })();
app.post('/', function (req, res) {
    var _this = this;
    console.log(req.body);
    var data = req.body.messages[0];
    console.log(data);
    if (data && data.body && data.body.match(/^Command list/g)) {
        console.log('command list');
        var commands = "\n      - Tell me about <query>\n      - Tell me all about <query>\n      - Picture of <query>\n      - Joke types\n      - Give me a dad joke\n      - Give me a chuck norris joke\n      - Give me a random joke\n      - Give me a knock knock joke\n      - Give me a yo mama joke\n      - Fact types\n      - Give me a cat fact\n      - Give me a fact fact\n      - Give me a random fact\n      - Give me a random random fact\n      - Give me imdb trivia\n      - Is prime <query>\n      - Draw a card\n    ";
        axios_1.default.post(apiUrl + "/sendMessage?token=" + token, {
            body: commands,
            chatId: data.chatId
        });
    }
    if (data && data.body && data.body.match(/^Tell me about /g)) {
        var about = data.body.replace(/^Tell me about /g, '');
        console.log(about);
        wikijs_1.default()
            .page(about)
            .then(function (page) { return page.summary(); })
            .then(function (summary) {
            axios_1.default.post(apiUrl + "/sendMessage?token=" + token, {
                body: summary,
                chatId: data.chatId
            });
        })
            .catch(function (error) {
            axios_1.default.post(apiUrl + "/sendMessage?token=" + token, {
                body: 'No Article Found',
                chatId: data.chatId
            });
        });
    }
    if (data && data.body && data.body.match(/^Tell me all about /g)) {
        var about = data.body.replace(/^Tell me all about /g, '');
        console.log(about);
        wikijs_1.default()
            .page(about)
            .then(function (page) { return page.fullInfo(); })
            .then(function (summary) {
            axios_1.default.post(apiUrl + "/sendMessage?token=" + token, {
                body: summary,
                chatId: data.chatId
            });
        })
            .catch(function (error) {
            axios_1.default.post(apiUrl + "/sendMessage?token=" + token, {
                body: 'No Article Found',
                chatId: data.chatId
            });
        });
    }
    if (data && data.body && data.body.match(/^Picture of /g)) {
        axios_1.default.post(apiUrl + "/sendMessage?token=" + token, {
            body: 'Hang tight...',
            chatId: data.chatId
        });
        var about_1 = data.body.replace(/^Picture of /g, '');
        console.log(about_1);
        g_i_s_1.default(about_1, function (err, res) {
            console.log(res[0]);
            var _body = res[Math.floor(Math.random() * 100)].url;
            console.log('Req body: ', _body);
            var newUrl = _body.match(/^(.+?\.(png|jpe?g))/i)[0];
            console.log('newUrl', newUrl);
            axios_1.default.post(apiUrl + "/sendFile?token=" + token, {
                filename: newUrl,
                body: newUrl,
                message: about_1,
                chatId: data.chatId
            }, {
                headers: {
                    'Content-type': 'application/json'
                }
            });
        });
    }
    if (data && data.body && data.body.match(/^Joke types/g)) {
        console.log('joke types');
        var jokeList = "\n      Dad Jokes\n      Chuck Norris Joke\n      Random Joke\n      Knock Knock\n      Yo Mama\n    ";
        axios_1.default.post(apiUrl + "/sendMessage?token=" + token, {
            body: jokeList,
            chatId: data.chatId
        });
    }
    if (data && data.body && data.body.match(/^Give me a dad joke/g)) {
        console.log('dad joke');
        give_me_a_joke_1.default.getRandomDadJoke(function (joke) {
            axios_1.default.post(apiUrl + "/sendMessage?token=" + token, {
                body: joke,
                chatId: data.chatId
            });
        });
    }
    if (data && data.body && data.body.match(/^Give me a chuck norris joke/g)) {
        console.log('chuck joke');
        give_me_a_joke_1.default.getRandomCNJoke(function (joke) {
            axios_1.default.post(apiUrl + "/sendMessage?token=" + token, {
                body: joke,
                chatId: data.chatId
            });
        });
    }
    if (data && data.body && data.body.match(/^Give me a random joke/g)) {
        console.log('random joke');
        var getRandomJoke = one_liner_joke_1.default.getRandomJoke();
        axios_1.default.post(apiUrl + "/sendMessage?token=" + token, {
            body: getRandomJoke,
            chatId: data.chatId
        });
    }
    if (data && data.body && data.body.match(/^Give me a knock knock joke/g)) {
        console.log('knock knock joke');
        axios_1.default.post(apiUrl + "/sendMessage?token=" + token, {
            body: knock_knock_jokes_1.default(),
            chatId: data.chatId
        });
    }
    if (data && data.body && data.body.match(/^Give me a yo mama joke/g)) {
        console.log('yo mama joke');
        axios_1.default.post(apiUrl + "/sendMessage?token=" + token, {
            body: yo_mamma_1.default(),
            chatId: data.chatId
        });
    }
    // ======================= FACTS ===========================
    if (data && data.body && data.body.match(/^Fact types/g)) {
        console.log('joke types');
        var jokeList = "\n      Real facts\n    ";
        axios_1.default.post(apiUrl + "/sendMessage?token=" + token, {
            body: jokeList,
            chatId: data.chatId
        });
    }
    if (data && data.body && data.body.match(/^Give me a cat fact/g)) {
        console.log('cat facts');
        (function () { return __awaiter(_this, void 0, void 0, function () {
            var results;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, catFacts.random()];
                    case 1:
                        results = _a.sent();
                        axios_1.default.post(apiUrl + "/sendMessage?token=" + token, {
                            body: results,
                            chatId: data.chatId
                        });
                        return [2 /*return*/];
                }
            });
        }); })();
    }
    if (data && data.body && data.body.match(/^Give me a fact fact/g)) {
        console.log('fact facts');
        var fetchFact = facts.getRandomFact();
        axios_1.default.post(apiUrl + "/sendMessage?token=" + token, {
            body: fetchFact,
            chatId: data.chatId
        });
    }
    if (data && data.body && data.body.match(/^Give me a random fact/g)) {
        console.log('get random facts');
        freefacts_1.getRandomFacts()
            .then(function (fact) {
            axios_1.default.post(apiUrl + "/sendMessage?token=" + token, {
                body: fact,
                chatId: data.chatId
            });
        })
            .catch(function (err) {
            axios_1.default.post(apiUrl + "/sendMessage?token=" + token, {
                body: 'no fact, only error',
                chatId: data.chatId
            });
        });
    }
    // if (data && data.body && data.body.match(/^Give me a random random fact/g)) {
    //   console.log('get random random facts');
    //   const fact = getRandomFact();
    //   axios.post(`${apiUrl}/sendMessage?token=${token}`, {
    //     body: fact,
    //     chatId: data.chatId
    //   });
    // }
    // =====================TRIVIA===============
    if (data && data.body && data.body.match(/^Give me imdb trivia/g)) {
        console.log('imdb trivia');
        imdb_trivia_1.default('tt0137523', function (err, movie) {
            console.log('imdb trivia inner');
            axios_1.default.post(apiUrl + "/sendMessage?token=" + token, {
                body: movie,
                chatId: data.chatId
            });
        });
    }
    if (data && data.body && data.body.match(/^Is prime /g)) {
        console.log('is prime');
        var about = Number(data.body.replace(/^Is prime /g, ''));
        console.log(about);
        if (typeof about === 'number') {
            axios_1.default.post(apiUrl + "/sendMessage?token=" + token, {
                body: is_prime_value_1.default(about),
                chatId: data.chatId
            });
        }
        else {
            axios_1.default.post(apiUrl + "/sendMessage?token=" + token, {
                body: 'Please give me a number',
                chatId: data.chatId
            });
        }
    }
    if (data && data.body && data.body.match(/time/g)) {
        console.log('time');
        axios_1.default.post(apiUrl + "/sendMessage?token=" + token, {
            body: moment_1.default().format('dddd MMMM Do YYYY, h:mm:ss a'),
            chatId: data.chatId
        });
    }
    if (data && data.body && data.body.match(/^Jack Friday/g)) {
        console.log('time');
        axios_1.default.post(apiUrl + "/sendMessage?token=" + token, {
            body: 'CHICKEN',
            chatId: data.chatId
        });
    }
    if (data && data.body && data.body.match(/^Draw a card/g)) {
        console.log('draw card');
        var number = String(Math.floor(Math.random() * 15));
        number.replace('13', 'K');
        number.replace('12', 'Q');
        number.replace('11', 'J');
        number.replace('1', 'A');
        var name = data.senderName;
        var suitID = Math.floor(Math.random() * 4);
        var suites = ['Hearts', 'Diamonds', 'Spades', 'Clubs'];
        var card = number + ' of ' + suites[suitID];
        axios_1.default.post(apiUrl + "/sendMessage?token=" + token, {
            body: name + ' drew ' + card,
            chatId: data.chatId
        });
    }
    res.end();
});
