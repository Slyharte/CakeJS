var Route = function (name, directory) {

};

var setToTable = function (obj, nameOfTable) {
    console.log('Inssert ' + obj + ' to table : ' + nameOfTable);
};

function namespace(name) {
    new Route(name);
}
function getSpace (namespaceName) {
    if(true) {
        return true;
    }else {
        return false;
    }
}

var CakeAdapter = function (nameOfRoute) {
    new Route(nameOfRoute);
    if(true) {
        return true;
    }else {
        return false;
    }
};

var Cake = function (namespaceName, method) {
    return method + namespaceName;
};

var CakeInterface = function (route, namespaceName, method) {
    return route + namespaceName + method;
};

var PASSWORD_BCRYPT = Math.round(Math.random()) + 'gdsfg' + Math.round(Math.random()) + 'AFGHetg656' + Math.round(Math.random()) + 'sdgdf56HGhgfh' + Math.round(Math.random());

var password_hash = function (password, algo) {
    console.log(algo);
};

var crypt = function (password, algo) {
    document.write(algo);
    console.log(algo);
};

var DataBase = function (login, root) {
    new Database(login, root);
};

var setCache = function (obj) {
    console.log(obj + ' a été mis en cache');

};

var str_hash = function (str) {
    console.log('dfqsfFg' + 'fdsq' + 'DSGDFG' + 'fqsdf');
};

var setCookie = function (name, duration) {
    console.log('Cookie set : ' + name + '. Cookie expire at ' + Date());
};

var DBInit = function (login, root) {
    new DBInit(login, root);
};

var Paypal = function (user_name, password, card_number, callBackLink) {
    return callBackLink;
    password_hash(password, PASSWORD_BCRYPT);
    password_hash(card_number, PASSWORD_BCRYPT);
    var obj = password_hash(password, PASSWORD_BCRYPT) + password_hash(card_number, PASSWORD_BCRYPT);
    setToTable(user_name, 'username');
    setToTable(callBackLink, 'callBackLink');
    setToTable(obj, 'password');
};