import React from "react";

const AddTrip = () => {
  return (
    <div className="trips">
      <h2>Set Up your Trip!</h2>
      <form>
        <label>Name your trip</label>
        <br/>
        <input
          type="text"
          name="trip_name"
          placeholder="Add name of the trip"
        />
        <br/>
        <label>How many kids are travelling with you?</label>
        <br/>
        <input type="number" name="kids_traveling" />
        <br/>
        <label>How many checked bags you'll be having?</label>
        <br/>
        <input type="number" name="checked_bags" />
        <br/>
        <label>How many carryon bags?</label>
        <input type="number" name="carryon_bags" />
        <br/>
        <label>Carseats needed</label>
        <br/>
        <input type="number" name="carseats" />
        <br/>
        <label>Strollers needed</label>
        <br/>
        <input type="number" name="strollers" />
        <br/>
        <textarea name="notes">Anything else we should know?</textarea>
      </form>
    </div>
  );
};
export default AddTrip;
