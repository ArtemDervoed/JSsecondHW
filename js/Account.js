// аккаунт тестировался в браузере Opera
//все работает и доступно из консоли
function Account (accountName) {
    this.accountName = accountName;
    this.balance = 0;
    this.isActive = false;
    this.lastOperation = "--/--/----";
    }
Object.defineProperty(Account.prototype, "accountName", {
    get: function () {
    return this._accountName;
    },
set: function (accountName) {
    this._accountName = accountName;
    }
});
Object.defineProperty(Account.prototype, "balance", {
    get: function () {
    return this._balance;
    },
set: function (balance) {
    this._balance = balance;
    }
});
Object.defineProperty(Account.prototype, "isActive", {
    get: function () {
    return this._isActive;
    },
set: function (isActive) {
    this._isActive = isActive;
    }
});
Object.defineProperty(Account.prototype, "lastOperation", {
    get: function () {
    return this._lastOperation;
    },
set: function (lastOperation) {
    this._lastOperation = lastOperation;
    }
});