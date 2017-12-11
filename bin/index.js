'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

var _querystring = require('querystring');

var _querystring2 = _interopRequireDefault(_querystring);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var CoinMarketCapAPI = function () {
  function CoinMarketCapAPI() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { baseURL: 'https://api.coinmarketcap.com/v1' },
        baseURL = _ref.baseURL;

    _classCallCheck(this, CoinMarketCapAPI);

    this.api = _axios2.default.create({ baseURL: baseURL });
  }

  _createClass(CoinMarketCapAPI, [{
    key: 'ticker',
    value: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var _ref3 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
            start = _ref3.start,
            limit = _ref3.limit,
            convert = _ref3.convert,
            id = _ref3.id;

        var query, res;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                query = {};


                if (typeof id !== "string") {
                  id = null;
                  if (typeof start === "number") query.start = start;
                  if (typeof limit === "number") query.limit = limit;
                  if (typeof convert === "string") query.convert = convert.toUpperCase();
                }

                _context.next = 4;
                return this.request({
                  path: '/ticker' + (id ? '/' + id : ''),
                  query: query
                });

              case 4:
                res = _context.sent;
                return _context.abrupt('return', res);

              case 6:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function ticker() {
        return _ref2.apply(this, arguments);
      }

      return ticker;
    }()
  }, {
    key: 'market',
    value: function () {
      var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        var _ref5 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
            convert = _ref5.convert;

        var query, res;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                query = {};

                if (typeof convert === "string") query.convert = convert.toUpperCase();

                _context2.next = 4;
                return this.request({
                  path: '/global',
                  query: query
                });

              case 4:
                res = _context2.sent;
                return _context2.abrupt('return', res);

              case 6:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function market() {
        return _ref4.apply(this, arguments);
      }

      return market;
    }()
  }, {
    key: 'request',
    value: function () {
      var _ref7 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(_ref6) {
        var path = _ref6.path,
            query = _ref6.query;
        var res;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.prev = 0;
                _context3.next = 3;
                return this.api.get(path + '?' + _querystring2.default.stringify(query));

              case 3:
                res = _context3.sent;
                return _context3.abrupt('return', res.data);

              case 7:
                _context3.prev = 7;
                _context3.t0 = _context3['catch'](0);
                return _context3.abrupt('return', _context3.t0.response.data);

              case 10:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, this, [[0, 7]]);
      }));

      function request(_x4) {
        return _ref7.apply(this, arguments);
      }

      return request;
    }()
  }]);

  return CoinMarketCapAPI;
}();

exports.default = CoinMarketCapAPI;