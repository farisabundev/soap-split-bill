import React from "react";

const CardOrderMenu = ({
  orderIndex,
  orderMenuName,
  orderMenuAmount,
  orderMenuPrice,
  stateSetter,
  removeOrderMenu
}) => {
  return (
    <div className="row align-items-center py-2">
      <div className="col-xs-4 col-sm-5">
        <div className="d-flex align-items-center">
          <div className="mx-2">{orderIndex}</div>
          <input
            className="form-control"
            value={orderMenuName}
            type="text"
            onChange={(e) => stateSetter("orderMenuName", e.target.value)}
            placeholder={`Menu Name #${orderIndex}`}
          />
        </div>
      </div>
      <div className="col-xs-3 col-sm-3">
        <div className="d-flex align-items-center">
          <input
            className="form-control"
            value={orderMenuAmount}
            type="number"
            min="1"
            max="99"
            onChange={(e) => stateSetter("orderMenuAmount", e.target.value)}
            placeholder="Quantity"
          />
          <div className="mx-2">X</div>
        </div>
      </div>
      <div className="col-xs-4 col-sm-4">
        <div className="d-flex align-items-center">
          <input
            className="form-control"
            value={orderMenuPrice}
            type="number"
            min="1"
            onChange={(e) => stateSetter("orderMenuPrice", e.target.value)}
            placeholder="Menu Price"
          />
          <button className="btn btn-danger mx-2" onClick={removeOrderMenu}>
            -
          </button>
        </div>
      </div>
      <br />
    </div>
  );
};

export default CardOrderMenu;
