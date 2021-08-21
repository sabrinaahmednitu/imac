
//memory part
const memory = document.getElementById('memory-16');
memory.addEventListener('click', function () {
  document.getElementById('memory-cost').innerText = '180';
  netPrice();
});

const memory2 = document.getElementById('memory-8');
memory2.addEventListener('click', function () {
  document.getElementById('memory-cost').innerText = '0';
  netPrice();
});

//storage part
//256gb
const storage = document.getElementById('storage-256');
storage.addEventListener('click', function () {
  document.getElementById('storage-cost').innerText = '0';
  netPrice();
});

//512gb
const storage2 = document.getElementById('storage-512');
storage2.addEventListener('click', function () {
  document.getElementById('storage-cost').innerText = '100';
  netPrice();
});

//1tb
const lastStorage = document.getElementById('storage-1tb');
lastStorage.addEventListener('click', function () {
  document.getElementById('storage-cost').innerText = '180';
  netPrice();
});

//delivery part
const freeDelivery = document.getElementById('free-delivery');
freeDelivery.addEventListener('click', function () {
  document.getElementById('delivery-cost').innerText = '0';
  netPrice();
});

const delivery = document.getElementById('delivery');
delivery.addEventListener('click', function () {
  document.getElementById('delivery-cost').innerText = '20';
  netPrice();
});
  


// sum of all the prices

function netPrice() {
  const bestPriceCost = parseInt(
    document.getElementById('best-price').innerText
  );

  const deliveryCost = parseInt(
    document.getElementById('delivery-cost').innerText
  );

  const memoryCost = parseInt(document.getElementById('memory-cost').innerText);

  const storageCost = parseInt(
    document.getElementById('storage-cost').innerText
  );

  let netCostPrice = bestPriceCost + deliveryCost + memoryCost + storageCost;

  const totalPrice = document.getElementById('total-price');
  totalPrice.innerText = netCostPrice;

  const total=document.getElementById('total');
  total.innerText= netCostPrice;

};

document.getElementById('promo-btn').addEventListener('click', function () {
   
  const promoInput = document.getElementById('promo-Input');
  if (promoInput.value == "stevekaku") {
     const promoOut = document.getElementById('total');
     const promoDiscount = promoOut.innerText * 20 / 100;
     promoOut.innerText = promoOut.innerText - promoDiscount;
  }

  document.getElementById("promo-btn").disabled = true;
  promoInput.value = "";
});




