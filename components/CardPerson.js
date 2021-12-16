import React from "react";

const CardPerson = ({ personIndex, personName, stateSetter, removePerson }) => {
  return (
    <div className="d-flex align-items-center py-2">
      <div className="mx-2">{personIndex}</div>
      <div>
        <input
          className="form-control"
          type="text"
          onChange={(e) => stateSetter(e.target.value)}
          value={personName}
        />
      </div>
      <div>
        <button className="btn btn-danger mx-2" onClick={removePerson}>
          -
        </button>
      </div>
    </div>
  );
};

export default CardPerson;
