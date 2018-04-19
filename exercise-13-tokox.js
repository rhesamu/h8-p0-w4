function countProfit(shoppers) {
  let listBarang = [ ['Sepatu Stacattu', 1500000, 10],
                     ['Baju Zoro', 500000, 2],
                     ['Sweater Uniklooh', 175000, 1]
                   ];

  // you can only write your code here!
  var output = [];

  for (var i = 0; i < listBarang.length; i++) {
    var obj = {};
    obj.product = listBarang[i][0];

    for (var j = 0; j < shoppers.length; j++) {
      if (shoppers[j].product === obj.product) {
        if (obj.shoppers) {
          obj.shoppers.push(shoppers[i].name);
        } else {
          obj.shoppers = [shoppers[i].name];
        }

        obj.leftOver = listBarang[i][2] - shoppers.amount;
        obj.totalProfit = shoppers[i].amount * listBarang[i][1];
      }
    }
    output.push(obj);
  }

  console.log(output);
}

countProfit([{name: 'Windi', product: 'Sepatu Stacattu', amount: 2},
             {name: 'Vanessa', product: 'Sepatu Stacattu', amount: 3},
             {name: 'Rani', product: 'Sweater Uniklooh', amount: 2}]);

// countProfit([{name: 'Windi', product: 'Sepatu Stacattu', amount: 8},
//              {name: 'Vanessa', product: 'Sepatu Stacattu', amount: 10},
//              {name: 'Rani', product: 'Sweater Uniklooh', amount: 1},
//              {name: 'Devi', product: 'Baju Zoro', amount: 1},
//              {name: 'Lisa', product: 'Baju Zoro', amount: 1}]);
//
// countProfit([{name: 'Windi', product: 'Sepatu Naiki', amount: 5}])
