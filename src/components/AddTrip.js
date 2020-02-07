import React, { useState } from "react";
import { connect } from "react-redux";
import { addTrip } from "../actions/addTrip";

const AddTrip = props => {
  const [trip, setTrip] = useState({
    trip_name: "",
    kids_traveling: 0,
    checked_bags: 0,
    carryon_bags: 0,
    carseats: 0,
    strollers: 0,
    notes: ""
  });

  const handleChange = event => {
    setTrip({ ...trip, [event.target.name]: event.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log("on handleSubmit", trip);
    props.addTrip(trip);
    setTrip({
      trip_name: "",
      kids_traveling: 0,
      checked_bags: 0,
      carryon_bags: 0,
      carseats: 0,
      strollers: 0,
      notes: ""
    });
  };

  return (
    <div className="trips">
      <h2>Set Up your Trip!</h2>
      <form>
        <label>Name your trip</label>
        <br />
        <input
          type="text"
          name="trip_name"
          placeholder="Add name of the trip"
          value={trip.trip_name}
          onChange={handleChange}
        />
        <br />
        <label>How many kids are travelling with you?</label>
        <br />
        <input
          type="number"
          name="kids_traveling"
          value={trip.kids_traveling}
          onChange={handleChange}
        />
        <br />
        <label>How many checked bags you'll be having?</label>
        <br />
        <input
          type="number"
          name="checked_bags"
          value={trip.checked_bags}
          onChange={handleChange}
        />
        <br />
        <label>How many carryon bags?</label>
        <input
          type="number"
          name="carryon_bags"
          value={trip.carryon_bags}
          onChange={handleChange}
        />
        <br />
        <label>Carseats needed</label>
        <br />
        <input
          type="number"
          name="carseats"
          value={trip.carseats}
          onChange={handleChange}
        />
        <br />
        <label>Strollers needed</label>
        <br />
        <input
          type="number"
          name="strollers"
          value={trip.strollers}
          onChange={handleChange}
        />
        <br />
        <textarea
          name="notes"
          type="text"
          value={trip.strollers}
          onChange={handleChange}
        >
          Anything else we should know?
        </textarea>
        <br />
        <button onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    trips: state.trips
  };
};
export default connect(mapStateToProps, { addTrip })(AddTrip);
