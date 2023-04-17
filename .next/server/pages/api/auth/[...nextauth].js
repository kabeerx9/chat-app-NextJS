"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/auth/[...nextauth]";
exports.ids = ["pages/api/auth/[...nextauth]"];
exports.modules = {

/***/ "@next-auth/upstash-redis-adapter":
/*!***************************************************!*\
  !*** external "@next-auth/upstash-redis-adapter" ***!
  \***************************************************/
/***/ ((module) => {

module.exports = require("@next-auth/upstash-redis-adapter");

/***/ }),

/***/ "@upstash/redis":
/*!*********************************!*\
  !*** external "@upstash/redis" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@upstash/redis");

/***/ }),

/***/ "next-auth/next":
/*!*********************************!*\
  !*** external "next-auth/next" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("next-auth/next");

/***/ }),

/***/ "next-auth/providers/google":
/*!*********************************************!*\
  !*** external "next-auth/providers/google" ***!
  \*********************************************/
/***/ ((module) => {

module.exports = require("next-auth/providers/google");

/***/ }),

/***/ "(api)/./src/lib/auth.ts":
/*!*************************!*\
  !*** ./src/lib/auth.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"authOptions\": () => (/* binding */ authOptions)\n/* harmony export */ });\n/* harmony import */ var _next_auth_upstash_redis_adapter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @next-auth/upstash-redis-adapter */ \"@next-auth/upstash-redis-adapter\");\n/* harmony import */ var _next_auth_upstash_redis_adapter__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_next_auth_upstash_redis_adapter__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _db__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./db */ \"(api)/./src/lib/db.ts\");\n/* harmony import */ var next_auth_providers_google__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth/providers/google */ \"next-auth/providers/google\");\n/* harmony import */ var next_auth_providers_google__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_google__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nfunction getGoogleCredentials() {\n    const clientId = process.env.GOOGLE_CLIENT_ID;\n    const clientSecret = process.env.GOOGLE_CLIENT_SECRET;\n    if (!clientId || clientId.length === 0) {\n        throw new Error(\"Missing GOOGLE_CLIENT_ID\");\n    }\n    if (!clientSecret || clientSecret.length === 0) {\n        throw new Error(\"Missing GOOGLE_CLIENT_SECRET\");\n    }\n    return {\n        clientId,\n        clientSecret\n    };\n}\nconst authOptions = {\n    adapter: (0,_next_auth_upstash_redis_adapter__WEBPACK_IMPORTED_MODULE_0__.UpstashRedisAdapter)(_db__WEBPACK_IMPORTED_MODULE_1__.db),\n    session: {\n        strategy: \"jwt\"\n    },\n    pages: {\n        signIn: \"/login\"\n    },\n    providers: [\n        next_auth_providers_google__WEBPACK_IMPORTED_MODULE_2___default()({\n            clientId: getGoogleCredentials().clientId,\n            clientSecret: getGoogleCredentials().clientSecret\n        })\n    ],\n    callbacks: {\n        async jwt ({ token , user  }) {\n            const dbUser = await _db__WEBPACK_IMPORTED_MODULE_1__.db.get(`user:${token.id}`);\n            if (!dbUser) {\n                token.id = user.id;\n                return token;\n            }\n            return {\n                id: dbUser.id,\n                name: dbUser.name,\n                email: dbUser.email,\n                picture: dbUser.image\n            };\n        },\n        async session ({ session , token  }) {\n            if (token) {\n                session.user.id = token.id;\n                session.user.name = token.name;\n                session.user.email = token.email;\n                session.user.image = token.picture;\n            }\n            return session;\n        },\n        redirect () {\n            return \"/dashboard\";\n        }\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvbGliL2F1dGgudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ3VFO0FBQzdDO0FBQzhCO0FBRXhELFNBQVNHLHVCQUF1QjtJQUM5QixNQUFNQyxXQUFXQyxRQUFRQyxHQUFHLENBQUNDLGdCQUFnQjtJQUM3QyxNQUFNQyxlQUFlSCxRQUFRQyxHQUFHLENBQUNHLG9CQUFvQjtJQUVyRCxJQUFJLENBQUNMLFlBQVlBLFNBQVNNLE1BQU0sS0FBSyxHQUFHO1FBQ3RDLE1BQU0sSUFBSUMsTUFBTSw0QkFBNEI7SUFDOUMsQ0FBQztJQUNELElBQUksQ0FBQ0gsZ0JBQWdCQSxhQUFhRSxNQUFNLEtBQUssR0FBRztRQUM5QyxNQUFNLElBQUlDLE1BQU0sZ0NBQWdDO0lBQ2xELENBQUM7SUFFRCxPQUFPO1FBQUVQO1FBQVVJO0lBQWE7QUFDbEM7QUFFTyxNQUFNSSxjQUErQjtJQUMxQ0MsU0FBU2IscUZBQW1CQSxDQUFDQyxtQ0FBRUE7SUFDL0JhLFNBQVM7UUFDUEMsVUFBVTtJQUNaO0lBQ0FDLE9BQU87UUFDTEMsUUFBUTtJQUNWO0lBQ0FDLFdBQVc7UUFDVGhCLGlFQUFjQSxDQUFDO1lBQ2JFLFVBQVVELHVCQUF1QkMsUUFBUTtZQUN6Q0ksY0FBY0wsdUJBQXVCSyxZQUFZO1FBQ25EO0tBQ0Q7SUFDRFcsV0FBVztRQUNULE1BQU1DLEtBQUksRUFBRUMsTUFBSyxFQUFFQyxLQUFJLEVBQUUsRUFBRTtZQUN6QixNQUFNQyxTQUFVLE1BQU10Qix1Q0FBTSxDQUFDLENBQUMsS0FBSyxFQUFFb0IsTUFBTUksRUFBRSxDQUFDLENBQUM7WUFFL0MsSUFBSSxDQUFDRixRQUFRO2dCQUNYRixNQUFNSSxFQUFFLEdBQUdILEtBQU1HLEVBQUU7Z0JBQ25CLE9BQU9KO1lBQ1QsQ0FBQztZQUVELE9BQU87Z0JBQ0xJLElBQUlGLE9BQU9FLEVBQUU7Z0JBQ2JDLE1BQU1ILE9BQU9HLElBQUk7Z0JBQ2pCQyxPQUFPSixPQUFPSSxLQUFLO2dCQUNuQkMsU0FBU0wsT0FBT00sS0FBSztZQUN2QjtRQUNGO1FBQ0EsTUFBTWYsU0FBUSxFQUFFQSxRQUFPLEVBQUVPLE1BQUssRUFBRSxFQUFFO1lBQ2hDLElBQUlBLE9BQU87Z0JBQ1RQLFFBQVFRLElBQUksQ0FBQ0csRUFBRSxHQUFHSixNQUFNSSxFQUFFO2dCQUMxQlgsUUFBUVEsSUFBSSxDQUFDSSxJQUFJLEdBQUdMLE1BQU1LLElBQUk7Z0JBQzlCWixRQUFRUSxJQUFJLENBQUNLLEtBQUssR0FBR04sTUFBTU0sS0FBSztnQkFDaENiLFFBQVFRLElBQUksQ0FBQ08sS0FBSyxHQUFHUixNQUFNTyxPQUFPO1lBQ3BDLENBQUM7WUFDRCxPQUFPZDtRQUNUO1FBQ0FnQixZQUFXO1lBQ1QsT0FBTztRQUNUO0lBQ0Y7QUFDRixFQUFFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2hhdC1hcHAvLi9zcmMvbGliL2F1dGgudHM/NjY5MiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZXh0QXV0aE9wdGlvbnMgfSBmcm9tIFwibmV4dC1hdXRoXCI7XHJcbmltcG9ydCB7IFVwc3Rhc2hSZWRpc0FkYXB0ZXIgfSBmcm9tIFwiQG5leHQtYXV0aC91cHN0YXNoLXJlZGlzLWFkYXB0ZXJcIjtcclxuaW1wb3J0IHsgZGIgfSBmcm9tIFwiLi9kYlwiO1xyXG5pbXBvcnQgR29vZ2xlUHJvdmlkZXIgZnJvbSBcIm5leHQtYXV0aC9wcm92aWRlcnMvZ29vZ2xlXCI7XHJcblxyXG5mdW5jdGlvbiBnZXRHb29nbGVDcmVkZW50aWFscygpIHtcclxuICBjb25zdCBjbGllbnRJZCA9IHByb2Nlc3MuZW52LkdPT0dMRV9DTElFTlRfSUQ7XHJcbiAgY29uc3QgY2xpZW50U2VjcmV0ID0gcHJvY2Vzcy5lbnYuR09PR0xFX0NMSUVOVF9TRUNSRVQ7XHJcblxyXG4gIGlmICghY2xpZW50SWQgfHwgY2xpZW50SWQubGVuZ3RoID09PSAwKSB7XHJcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJNaXNzaW5nIEdPT0dMRV9DTElFTlRfSURcIik7XHJcbiAgfVxyXG4gIGlmICghY2xpZW50U2VjcmV0IHx8IGNsaWVudFNlY3JldC5sZW5ndGggPT09IDApIHtcclxuICAgIHRocm93IG5ldyBFcnJvcihcIk1pc3NpbmcgR09PR0xFX0NMSUVOVF9TRUNSRVRcIik7XHJcbiAgfVxyXG5cclxuICByZXR1cm4geyBjbGllbnRJZCwgY2xpZW50U2VjcmV0IH07XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBhdXRoT3B0aW9uczogTmV4dEF1dGhPcHRpb25zID0ge1xyXG4gIGFkYXB0ZXI6IFVwc3Rhc2hSZWRpc0FkYXB0ZXIoZGIpLFxyXG4gIHNlc3Npb246IHtcclxuICAgIHN0cmF0ZWd5OiBcImp3dFwiLFxyXG4gIH0sXHJcbiAgcGFnZXM6IHtcclxuICAgIHNpZ25JbjogXCIvbG9naW5cIixcclxuICB9LFxyXG4gIHByb3ZpZGVyczogW1xyXG4gICAgR29vZ2xlUHJvdmlkZXIoe1xyXG4gICAgICBjbGllbnRJZDogZ2V0R29vZ2xlQ3JlZGVudGlhbHMoKS5jbGllbnRJZCxcclxuICAgICAgY2xpZW50U2VjcmV0OiBnZXRHb29nbGVDcmVkZW50aWFscygpLmNsaWVudFNlY3JldCxcclxuICAgIH0pLFxyXG4gIF0sXHJcbiAgY2FsbGJhY2tzOiB7XHJcbiAgICBhc3luYyBqd3QoeyB0b2tlbiwgdXNlciB9KSB7XHJcbiAgICAgIGNvbnN0IGRiVXNlciA9IChhd2FpdCBkYi5nZXQoYHVzZXI6JHt0b2tlbi5pZH1gKSkgYXMgVXNlciB8IG51bGw7XHJcblxyXG4gICAgICBpZiAoIWRiVXNlcikge1xyXG4gICAgICAgIHRva2VuLmlkID0gdXNlciEuaWQ7XHJcbiAgICAgICAgcmV0dXJuIHRva2VuO1xyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIGlkOiBkYlVzZXIuaWQsXHJcbiAgICAgICAgbmFtZTogZGJVc2VyLm5hbWUsXHJcbiAgICAgICAgZW1haWw6IGRiVXNlci5lbWFpbCxcclxuICAgICAgICBwaWN0dXJlOiBkYlVzZXIuaW1hZ2UsXHJcbiAgICAgIH07XHJcbiAgICB9LFxyXG4gICAgYXN5bmMgc2Vzc2lvbih7IHNlc3Npb24sIHRva2VuIH0pIHtcclxuICAgICAgaWYgKHRva2VuKSB7XHJcbiAgICAgICAgc2Vzc2lvbi51c2VyLmlkID0gdG9rZW4uaWQ7XHJcbiAgICAgICAgc2Vzc2lvbi51c2VyLm5hbWUgPSB0b2tlbi5uYW1lO1xyXG4gICAgICAgIHNlc3Npb24udXNlci5lbWFpbCA9IHRva2VuLmVtYWlsO1xyXG4gICAgICAgIHNlc3Npb24udXNlci5pbWFnZSA9IHRva2VuLnBpY3R1cmU7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIHNlc3Npb247XHJcbiAgICB9LFxyXG4gICAgcmVkaXJlY3QoKSB7XHJcbiAgICAgIHJldHVybiBcIi9kYXNoYm9hcmRcIjtcclxuICAgIH0sXHJcbiAgfSxcclxufTtcclxuIl0sIm5hbWVzIjpbIlVwc3Rhc2hSZWRpc0FkYXB0ZXIiLCJkYiIsIkdvb2dsZVByb3ZpZGVyIiwiZ2V0R29vZ2xlQ3JlZGVudGlhbHMiLCJjbGllbnRJZCIsInByb2Nlc3MiLCJlbnYiLCJHT09HTEVfQ0xJRU5UX0lEIiwiY2xpZW50U2VjcmV0IiwiR09PR0xFX0NMSUVOVF9TRUNSRVQiLCJsZW5ndGgiLCJFcnJvciIsImF1dGhPcHRpb25zIiwiYWRhcHRlciIsInNlc3Npb24iLCJzdHJhdGVneSIsInBhZ2VzIiwic2lnbkluIiwicHJvdmlkZXJzIiwiY2FsbGJhY2tzIiwiand0IiwidG9rZW4iLCJ1c2VyIiwiZGJVc2VyIiwiZ2V0IiwiaWQiLCJuYW1lIiwiZW1haWwiLCJwaWN0dXJlIiwiaW1hZ2UiLCJyZWRpcmVjdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./src/lib/auth.ts\n");

/***/ }),

/***/ "(api)/./src/lib/db.ts":
/*!***********************!*\
  !*** ./src/lib/db.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"db\": () => (/* binding */ db)\n/* harmony export */ });\n/* harmony import */ var _upstash_redis__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @upstash/redis */ \"@upstash/redis\");\n/* harmony import */ var _upstash_redis__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_upstash_redis__WEBPACK_IMPORTED_MODULE_0__);\n\nconst db = new _upstash_redis__WEBPACK_IMPORTED_MODULE_0__.Redis({\n    url: process.env.UPSTASH_REDIS_REST_URL,\n    token: process.env.UPSTASH_REDIS_REST_TOKEN\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvbGliL2RiLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUF1QztBQUVoQyxNQUFNQyxLQUFLLElBQUlELGlEQUFLQSxDQUFDO0lBQzFCRSxLQUFLQyxRQUFRQyxHQUFHLENBQUNDLHNCQUFzQjtJQUN2Q0MsT0FBT0gsUUFBUUMsR0FBRyxDQUFDRyx3QkFBd0I7QUFDN0MsR0FBRyIsInNvdXJjZXMiOlsid2VicGFjazovL2NoYXQtYXBwLy4vc3JjL2xpYi9kYi50cz85ZTRmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFJlZGlzIH0gZnJvbSBcIkB1cHN0YXNoL3JlZGlzXCI7XHJcblxyXG5leHBvcnQgY29uc3QgZGIgPSBuZXcgUmVkaXMoe1xyXG4gIHVybDogcHJvY2Vzcy5lbnYuVVBTVEFTSF9SRURJU19SRVNUX1VSTCxcclxuICB0b2tlbjogcHJvY2Vzcy5lbnYuVVBTVEFTSF9SRURJU19SRVNUX1RPS0VOLFxyXG59KTtcclxuIl0sIm5hbWVzIjpbIlJlZGlzIiwiZGIiLCJ1cmwiLCJwcm9jZXNzIiwiZW52IiwiVVBTVEFTSF9SRURJU19SRVNUX1VSTCIsInRva2VuIiwiVVBTVEFTSF9SRURJU19SRVNUX1RPS0VOIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./src/lib/db.ts\n");

/***/ }),

/***/ "(api)/./src/pages/api/auth/[...nextauth].ts":
/*!*********************************************!*\
  !*** ./src/pages/api/auth/[...nextauth].ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _lib_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/lib/auth */ \"(api)/./src/lib/auth.ts\");\n/* harmony import */ var next_auth_next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/next */ \"next-auth/next\");\n/* harmony import */ var next_auth_next__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_next__WEBPACK_IMPORTED_MODULE_1__);\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (next_auth_next__WEBPACK_IMPORTED_MODULE_1___default()(_lib_auth__WEBPACK_IMPORTED_MODULE_0__.authOptions));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGFnZXMvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQXlDO0FBQ0g7QUFFdEMsaUVBQWVDLHFEQUFRQSxDQUFDRCxrREFBV0EsQ0FBQ0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2NoYXQtYXBwLy4vc3JjL3BhZ2VzL2FwaS9hdXRoL1suLi5uZXh0YXV0aF0udHM/NTBhMSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBhdXRoT3B0aW9ucyB9IGZyb20gXCJAL2xpYi9hdXRoXCI7XHJcbmltcG9ydCBOZXh0QXV0aCBmcm9tIFwibmV4dC1hdXRoL25leHRcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5leHRBdXRoKGF1dGhPcHRpb25zKTtcclxuIl0sIm5hbWVzIjpbImF1dGhPcHRpb25zIiwiTmV4dEF1dGgiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/auth/[...nextauth].ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./src/pages/api/auth/[...nextauth].ts"));
module.exports = __webpack_exports__;

})();