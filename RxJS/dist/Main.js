"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const UserStore_1 = require("./store/UserStore");
new UserStore_1.UserStore()
    .list()
    .subscribe(value => console.log(value));
//# sourceMappingURL=Main.js.map