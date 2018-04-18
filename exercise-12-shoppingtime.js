function shoppingTime(memberId, money) {
  var inventory = [
    { item: 'Sepatu Stacattu', price: 1500000 },
    { item: 'Baju Zoro', price: 500000 },
    { item: 'Baju H&N', price: 250000 },
    { item: 'Sweater Uniklooh', price: 175000 },
    { item: 'Casing Handphone', price: 50000}
  ]

  if (memberId === undefined || memberId === '') {
    return "Mohon maaf, toko X hanya berlaku untuk member saja"
  }

  if (money < 50000) {
    return "Mohon maaf, uang tidak cukup"
  }

  var customer = {
    memberId: memberId,
    money: money,
    listPurchased: []
  }

  var index = 0;

  if (customer.money < inventory[index].price) {
    while (customer.money < inventory[index].price) {
      index++
    }
  }

  customer.changeMoney = customer.money

  for (var i = index; i < inventory.length; i++) {
    if (i !== inventory.length - 1) {
      if (customer.changeMoney - inventory[i].price < 0) {
        i++;
      }
    }

    if (customer.changeMoney - inventory[i].price < 0) {
      break;
    }
    customer.changeMoney = customer.changeMoney - inventory[i].price;
    customer.listPurchased.push(inventory[i].item);
  }

  return customer
}

console.log(shoppingTime('1820RzKrnWn08', 2475000));
  //{ memberId: '1820RzKrnWn08',
  // money: 2475000,
  // listPurchased:
  //  [ 'Sepatu Stacattu',
  //    'Baju Zoro',
  //    'Baju H&N',
  //    'Sweater Uniklooh',
  //    'Casing Handphone' ],
  // changeMoney: 0 }

console.log(shoppingTime('82Ku8Ma742', 170000));
//{ memberId: '82Ku8Ma742',
// money: 170000,
// listPurchased:
//  [ 'Casing Handphone' ],
// changeMoney: 120000 }

console.log(shoppingTime('', 2475000));
//Mohon maaf, toko X hanya berlaku untuk member saja

console.log(shoppingTime('234JdhweRxa53', 15000));
//Mohon maaf, uang tidak cukup

console.log(shoppingTime());
//Mohon maaf, toko X hanya berlaku untuk member saja

console.log(shoppingTime('234JdhweRxa53', 70000));
