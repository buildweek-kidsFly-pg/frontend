import React from "react";

const AddTrip = () => {
  return (
    <div>
      <h1>Set Up your Trip!</h1>
      <form>
        <label>Name your trip</label>
        <input
          type="text"
          name="trip_name"
          placeholder="Add name of the trip"
        />
        <label>How many kids are travelling with you?</label>
        <input type="number" name="kids_traveling" />
        <label>How many checked bugs you'll be having?</label>
        <input type="number" name="checked_bags" />
        <label>How many carryon bugs?</label>
        <input type="number" name="carryon_bags" />
        <label>Carseats needed</label>
        <input type="number" name="carseats" />
        <label>Strollers needed</label>
        <input type="number" name="strollers" />
        <textarea name="notes">Anything else we should know?</textarea>
      </form>
    </div>
  );
};
export default AddTrip;
