function objectsDeeplyEqual(objA, objB) {
    if (objA === objB) {
        return true;
    }

    if (typeof objA !== 'object' || objA === null || typeof objB !== 'object' || objB === null) {
        return objA === objB;
    }

    const keysA = Object.keys(objA);
    const keysB = Object.keys(objB);

    if (keysA.length !== keysB.length) {
        return false;
    }

    for (let key of keysA) {
        if (!keysB.includes(key) || !objectsDeeplyEqual(objA[key], objB[key])) {
            return false;
        }
    }

    return true;
}

const obj = {here: {is: 'an'}, object: 2};
console.log(objectsDeeplyEqual(obj, obj));
console.log(objectsDeeplyEqual(obj, {here: 1, object: 2}));
console.log(objectsDeeplyEqual(obj, {here: {is: 'an'}, object: 2}));
