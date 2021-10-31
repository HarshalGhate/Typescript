function show() {
    var name = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        name[_i] = arguments[_i];
    }
    for (var i = 0; i < name.length; i++) {
        console.log(name[i]);
    }
}
show("Harshal", "sam", "Ram");
show("A", "B", "C", "D", "E");
