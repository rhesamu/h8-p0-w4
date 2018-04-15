function luasPersegi(sisi) {
  return sisi * sisi;
}

function luasLingkaran(r) {
  return 3.14 * r * r;
}

function luasSegitiga(alas, tinggi) {
  return (alas * tinggi) / 2
}

function luasRobot() {
  var total = luasPersegi(10, 15) +
              luasLingkaran(7) +
              luasSegitiga(10, 20);
  return total;
}

console.log(luasRobot())
