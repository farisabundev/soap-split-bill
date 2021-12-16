import React, { useState } from "react";
import CardOrderMenu from "./CardOrderMenu";
import CardPerson from "./CardPerson";

const SoapSplitBill = () => {
  const [orderMenu, setOrderMenu] = useState([]);
  const [persons, setPerson] = useState([]);

  const addOrderMenu = () => {
    let newOrder = [...orderMenu];

    newOrder.push({
      orderMenuName: "",
      orderMenuAmount: 1,
      orderMenuPrice: 0,
    });
    setOrderMenu(newOrder);
  };

  const removeOrderMenu = (index) => {
    let newOrder = [...orderMenu];
    newOrder.splice(index, 1);

    setOrderMenu(newOrder);
  };

  const changeOrderMenuValue = (propertyName, val, index) => {
    let newOrder = [...orderMenu];
    newOrder[index][propertyName] = val;

    setOrderMenu(newOrder);
  };

  const addPerson = () => {
    let newPerson = [...persons];

    newPerson.push({
      orderMenuName: "",
      orderMenuAmount: 1,
      orderMenuPrice: 0,
    });
    setPerson(newPerson);
  };

  const removePerson = (index) => {
    let newPerson = [...persons];
    newPerson.splice(index, 1);

    setPerson(newPerson);
  };

  const changePerson = (val, index) => {
    let newPerson = [...persons];
    newPerson[index].name = val;

    setPerson(newPerson);
  };

  return (
    <div className="App">
      <div className="container">
        <h1 className="pt-3">Split Bill</h1>
        {/* <button onClick={generateSplitBill}>Generate Test</button> */}

        <div className="pt-4">
          {orderMenu.length ? (
            <div>
              <div className="d-flex align-items-center mb-3">
                <div className="me-3">
                  <b>Menu</b>
                </div>
                <div>
                  <button
                    className="btn btn-primary round"
                    onClick={addOrderMenu}
                  >
                    Add menu
                  </button>
                </div>
              </div>
              {orderMenu.map((each, index) => (
                <div key={index} className="d-flex align-items-center">
                  <CardOrderMenu
                    orderIndex={index + 1}
                    orderMenuName={each.orderMenuName}
                    orderMenuAmount={each.orderMenuAmount}
                    orderMenuPrice={each.orderMenuPrice}
                    stateSetter={(propertyName, val) =>
                      changeOrderMenuValue(propertyName, val, index)
                    }
                    removeOrderMenu={() => removeOrderMenu(index)}
                  />
                </div>
              ))}
            </div>
          ) : (
            <div>
              <b>Order menu is empty</b>
              <div>
                <button onClick={addOrderMenu}>Add order menu</button>
              </div>
            </div>
          )}
        </div>

        <div className="pt-4">
          {persons.length ? (
            <div>
              <div className="d-flex align-items-center mb-3">
                <div className="me-3">
                  <b>Person</b>
                </div>
                <div>
                  <button className="btn btn-primary round" onClick={addPerson}>
                    Add Person
                  </button>
                </div>
              </div>
              {persons.map((each, index) => (
                <div key={index} className="d-flex align-items-center">
                  <CardPerson
                    personIndex={index + 1}
                    stateSetter={(val) => changePerson(val, index)}
                    removePerson={() => removePerson(index)}
                    orderPerson={each.orderMenuName}
                  />
                </div>
              ))}
            </div>
          ) : (
            <div>
              <b>Person is empty</b>
              <div>
                <button onClick={addPerson}>Add Person</button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SoapSplitBill;
