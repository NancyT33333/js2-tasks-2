module.exports = Collection;

/**
 * Конструктор коллекции
 * @constructor
 */
function Collection() {
    this.valuesArr=[];
}


// Методы коллекции
Collection.prototype.values = function () {
    return this.valuesArr;
};
// другие методы

Collection.prototype.count = function () {
    return this.valuesArr.length;
};

Collection.prototype.append = function ( itemToAdd ) {    // accepts one el or another collection []
    if (itemToAdd instanceof Collection) {

        [].push.apply(this.valuesArr, itemToAdd.values());
        //return this.valuesArr;
    }  else { this.valuesArr.push(itemToAdd)
    //return this.valuesArr
        }
};

Collection.prototype.at = function (index) {
    if (index === 0) {
        return null;
    } else {
        index--;
        return (this.valuesArr[index] ? this.valuesArr[index] : null);
    }
};

Collection.prototype.removeAt = function (index) {
    index--;
    if (this.valuesArr[index]) {
         this.valuesArr.splice(index,1);
         return true
    } else {
        return false
    }
};


/**
 * Создание коллекции из массива значений
 */
Collection.from = function (values) {
    var newColl= new Collection;
    newColl.valuesArr=values;
    return newColl;
};



