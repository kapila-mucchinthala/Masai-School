var data = {
    items: [],
    addItems: function (prod, categ, pr) {
        this.items.push({ productName: prod, category: categ, price: pr });
    },
    leastPrice: function () {
        var temp = this.items[i][2];
        for (var i = 0; i<this.items.length; i++) {
            if (this.items[i][2] < temp) {
                temp = this.items[i][2];
            }
        }
        console.log(temp);
    }
}

data.addItems("OnePlus", "Electronics", 29000);
data.addItems("Coffee", "Grocery", 400);
data.addItems("Pen", "Office", 30);
data.addItems("Book", "Office", 60);
data.addItems("Rice", "Grocery", 100);
data.addItems("Earphones", "Electronics", 1000);
console.log(data.items);
data.leastPrice();