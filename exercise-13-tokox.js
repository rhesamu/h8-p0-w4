function countProfit(shoppers) {
  let listBarang = [ ['Sepatu Stacattu', 1500000, 10],
                     ['Baju Zoro', 500000, 2],
                     ['Sweater Uniklooh', 175000, 1]
                   ];

  // you can only write your code here!
  var output = [];

  for (var i = 0; i < listBarang.length; i++) {
    var obj = {};
    var arrShoppers = [];

    obj.product = listBarang[i][0];
    obj.leftOver = listBarang[i][2];
    obj.totalProfit = 0;

    for (var j = 0; j < shoppers.length; j++) {
      if (shoppers[j].product === obj.product && shoppers[j].amount <= listBarang[i][2]) {
          arrShoppers.push(shoppers[j].name);
          obj.leftOver = obj.leftOver - shoppers[j].amount;
        // if (obj.shoppers) {
        //   obj.shoppers.push(shoppers[j].name);
        // } else {
        //   obj.shoppers = [shoppers[j].name];
        // }
      //
      }
    }

    obj.shoppers = arrShoppers
    obj.totalProfit = (listBarang[i][2] - obj.leftOver) * listBarang[i][1];

    output.push(obj);
  }

  return output;
}

console.log(countProfit([{name: 'Windi', product: 'Sepatu Stacattu', amount: 2},
             {name: 'Vanessa', product: 'Sepatu Stacattu', amount: 3},
             {name: 'Rani', product: 'Sweater Uniklooh', amount: 2}]));

console.log(countProfit([{name: 'Windi', product: 'Sepatu Stacattu', amount: 8},
             {name: 'Vanessa', product: 'Sepatu Stacattu', amount: 10},
             {name: 'Rani', product: 'Sweater Uniklooh', amount: 1},
             {name: 'Devi', product: 'Baju Zoro', amount: 1},
             {name: 'Lisa', product: 'Baju Zoro', amount: 1}]));

console.log(countProfit([{name: 'Windi', product: 'Sepatu Naiki', amount: 5}]));
