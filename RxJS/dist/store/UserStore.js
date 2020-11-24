"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserStore = void 0;
const rxjs_1 = require("rxjs");
const operators_1 = require("rxjs/operators");
const User_1 = require("../models/User");
class UserStore {
    constructor() {
        this.users = new Map([
            ['1', new User_1.User('1', 'nick_1', 'pass')],
            ['2', new User_1.User('2', 'nick_2', 'pass')],
            ['3', new User_1.User('3', 'nick_3', 'pass')]
        ]);
    }
    list() {
        return rxjs_1.from(Array.from(this.users.values()))
            .pipe(operators_1.reduce((acc, value) => [...acc, value], []));
    }
}
exports.UserStore = UserStore;
//# sourceMappingURL=UserStore.js.map