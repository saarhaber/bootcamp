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
Array.prototype.myReduce = function (cb, initial) {
    if (initial == undefined) {
      initial = 0;
    }
    let start = 0 + initial;
    for(let i = 0; i < this.length; i++) {
        start = cb(start, this[i]);
    }
    return start;
}

//reduce
//Standalone
function myReduce (arr, initial) {
    if (initial == undefined) {
       initial = 0;
     }
     let sum = 0 + initial;
   for (let i=0; i<arr.length; i++) {
     sum+=arr[i];
   }
 return sum;
 }
 
//includes()
//Modifying Array prototype
Array.prototype.myIncludes = function (entry) {
    for (let i=0; i<this.length; i++) {
      let element = this[i];
      if (element == entry) {
        return true;
      }
    }
    return false;
  }

//includes()
//Standalone
function myIncludes(arr, entry) {
    for (let i=0; i<arr.length; i++) {
      let element = arr[i];
      if (element == entry) {
        return true;
      }
    }
    return false;
  }

//indexOf()
//Modifying Array prototype
Array.prototype.myIndexOf = function (entry, index) {
  if (index == null) {
    index = 0;
  }
  for (let i=0+index; i<this.length; i++) {
    let element = this[i];
    if (element == entry) {
      return i;
    }
  }
  return -1;
}

//indexOf()
//Standalone
function myIndexOf(arr, entry, index) {
    if (index == null) {
      index = 0;
    }
    for (let i=0+index; i<arr.length; i++) {
      let element = arr[i];
      if (element == entry) {
        return i;
      }
    }
    return -1;
  }

//push()
//Modifying Array prototype
Array.prototype.myPush = function (entry) {
  this[this.length] = entry;
  return this.length;
}

//push()
//Standalone
function myPush (arr, entry) {
    arr[arr.length] = entry;
    return arr.length;
  }

//lastIndexOf()
//Modifying Array prototype
Array.prototype.myLastIndexOf = function (entry) {
  for (let i=this.length-1; i>=0; i--) {
    let element = this[i];
    if (entry == element) {
      return i;
    }
  }
  return -1;
}

//lastIndexOf()
//Standalone
function myLastIndexOf (arr, entry) {
    for (let i=arr.length-1; i>=0; i--) {
      let element = arr[i];
      if (entry == element) {
        return i;
      }
    }
    return -1;
  }
  
//Object.keys()
//Modifying Array prototype

//Object.keys()
//Standalone
function grabKeys (obj) {
    let arr2 = [];
    for (let key in obj) {
      arr2.push(key);
    }
  return arr2;
  }

//Object.values()
//Modifying Array prototype

//Object.values()
//Standalone
function grabKeys (obj) {
    let arr2 = [];
    for (let prop in obj) {
      arr2.push(obj[prop]);
    }
  return arr2;
  }


