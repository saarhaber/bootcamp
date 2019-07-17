//forEach()
//Modifying Array prototype
Array.prototype.myEach = function (cb) {
    for (let i=0; i<this.length; i++) {
        let element = this[i];
        cb(element);
    }
}

//forEach()
//Standalone
function myEach(arr, cb) {
    for (let i=0; i<arr.length; i++) {
        let element = arr[i];
        cb(element);
    }
}

//map()
//Modifiny Array prototype
Array.prototype.myMap = function (cb) {
    let arr2 = [];
    for (let i=0; i<this.length; i++) {
        let element = this[i];
        arr2.push(cb(element));
    }
    return arr2;
}

//map()
//Standalone

function myMap(arr, cb) {
    let arr2 = [];
    for (let i=0; i<arr.length; i++) {
        let element = arr[i];
        arr2.push(cb(element));
    }
    return arr2;
}

//filter()
//Modifiny Array prototype
Array.prototype.myFilter = function (cb) {
    let arr2 = [];
    for (let i=0; i<this.length; i++) {
        let element = this[i];
        if (cb(element)===true) {
            arr2.push(element);
        }
    }
    return arr2;
}

//filter()
//Standalone
function myFilter(arr, cb) {
    let arr2 = [];
    for (let i=0; i<arr.length; i++) {
        let element = arr[i];
        if (cb(element) === true) {
            arr2.push(element);
        }
    }
    return arr2;
}

//some() (aka any())
//Modifying Array prototype
Array.prototype.mySome = function (cb) {
    for (let i=0; i<this.length; i++) {
        let element = this[i];
        if (cb(element)===true) {
            return true;
        }
    }
    return false;
}

//some() (aka any())
//Standalone
function mySome(arr, cb) {
    for (let i=0; i<arr.length; i++) {
        let element = arr[i];
        if (cb(element) === true) {
            return true;
        }
    }
return false;
}

//every()
//Modifying Array prototype
Array.prototype.myEvery = function (cb) {
    for (let i=0; i< this.length; i++) {
        let element = this[i];
        if (cb(element) === false) {
            return false;
        }
    }
    return true;
}

//every()
//Standalone
function myEvery (arr,cb) {
    for (let i=0; i<arr.length; i++) {
        let element = arr[i];
        if (cb(element) === false) {
            return false;
        }
    }
    return true;
}

//reduce
//Modifying Array prototype
Array.prototype.myReduce = function (cb, accu) {
?????
//reduce
//Standalone
????

//includes()
//Modifying Array prototype


//includes()
//Standalone

//indexOf()
//Modifying Array prototype

//indexOf()
//Standalone

//push()
//Modifying Array prototype

//push()
//Standalone

//lastIndexOf()
//Modifying Array prototype

//lastIndexOf()
//Standalone

//Object.keys()
//Modifying Array prototype

//Object.keys()
//Standalone

//Object.values()
//Modifying Array prototype

//Object.values()
//Standalone



