const bill = {
  orderMenu: [
    {
      id: "menu-1",
      name: "Americano",
      priceTotal: 24000,
      qty: 1
    },
    {
      id: "menu-2",
      name: "Cappuccino",
      priceTotal: 24000,
      qty: 1
    },
    {
      id: "menu-3",
      name: "Calamari",
      priceTotal: 45000,
      qty: 1
    },
    {
      id: "menu-4",
      name: "SPG Carbonara",
      priceTotal: 50000,
      qty: 1
    }
  ],
  subtotal: 143000,
  tax: 14300,
  total: 157300
};

const persons = [
  {
    name: "Faris",
    orders: [
      {
        menuId: "menu-1",
        qty: 1
      },
      {
        menuId: "menu-3",
        qty: 1
      }
    ]
  },
  {
    name: "Fareesha",
    orders: [
      {
        menuId: "menu-2",
        qty: 1
      },
      {
        menuId: "menu-4",
        qty: 1
      }
    ]
  }
];

const generateSplitBill = () => {
  let priceEachOrderMenu = [...bill.orderMenu];
  let tax = bill.tax / bill.subtotal;

  console.log(`Tax: ${tax * 100}%`);

  priceEachOrderMenu = priceEachOrderMenu.map((each) => {
    return {
      id: each.id,
      name: each.name,
      priceEach: each.priceTotal / each.qty
    };
  });

  const generateSplit = () => {
    const bills = [];

    persons.forEach((person) => {
      if (person.orders.length) {
        const billObj = {
          name: person.name,
          subtotal: 0,
          total: 0
        };
        person.orders.forEach((order) => {
          const orderFound = priceEachOrderMenu.find(
            (x) => x.id === order.menuId
          );

          if (orderFound) {
            billObj.subtotal += orderFound.priceEach;
            billObj.orderMenu = {
              name: orderFound.name,
              price: orderFound.priceEach,
              qty: order.qty
            };
          }
        });
        billObj.total = billObj.subtotal + billObj.subtotal * tax;
        bills.push(billObj);
      }
    });
    console.log("bills", bills);
  };

  generateSplit();
};

export default generateSplitBill;
