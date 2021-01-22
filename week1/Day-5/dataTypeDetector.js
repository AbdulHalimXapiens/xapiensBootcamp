function dataType(x) {
    if (typeof x === 'number' && isFinite(x)) {
        if (x % 1 === 0) {
            console.log("integer");
        } else {
            console.log("float");
        }

    } else if (typeof x === 'string' || x instanceof String) {
        console.log("string");
    } else if (typeof x === 'object' && x.constructor === Array) {
        console.log("Array");
    } else if (typeof x === 'object' && x.constructor === Object) {
        console.log("Object");
    }
    return x;
}

dataType(0.2);
dataType("");
dataType([]);
dataType({});