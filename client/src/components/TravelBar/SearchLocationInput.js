import React, { useState, useEffect, useRef, useContext } from "react";
import {Context} from '../../state-management/Store';
import API_KEY from '../../API.js'


let autoComplete;

const loadScript = (url, callback) => {
  let script = document.createElement("script");
  script.type = "text/javascript";

  if (script.readyState) {
    script.onreadystatechange = function() {
      if (script.readyState === "loaded" || script.readyState === "complete") {
        script.onreadystatechange = null;
        callback();
      }
    };
  } else {
    script.onload = () => callback();
  }

  script.src = url;
  document.getElementsByTagName("head")[0].appendChild(script);
};


function SearchLocationInput() {

  const [query, setQuery] = useState("");
  const autoCompleteRef = useRef(null);
  var [state, dispatch] = useContext(Context);

  function handleScriptLoad(updateQuery, autoCompleteRef) {
    autoComplete = new window.google.maps.places.Autocomplete(
      autoCompleteRef.current,
      { types: ["(cities)"], componentRestrictions: { country: "us" } }
    );
    autoComplete.setFields(["address_components", "formatted_address"]);
    autoComplete.addListener("place_changed", () =>
      handlePlaceSelect(updateQuery)
    );
  }

  async function handlePlaceSelect(updateQuery) {
    const addressObject = autoComplete.getPlace();
    const query = addressObject.formatted_address;
    updateQuery(query);
    console.log('state', state.tripInfo)
    var tripInfoClone = {...state.tripInfo}
    console.log('tripInfoClone', tripInfoClone)
    tripInfoClone.location = query;
    dispatch({type: 'SET_TRIP_INFO', payload: tripInfoClone});
  }


  useEffect(() => {

    loadScript(
      `https://maps.googleapis.com/maps/api/js?key=${API_KEY.GOOGLE_API_KEY}&libraries=places`,
      () => handleScriptLoad(setQuery, autoCompleteRef)
    );

  }, [state]);

  return (
    <div className="search-location-input">
      <input
        ref={autoCompleteRef}
        onChange={event => setQuery(event.target.value)}
        placeholder="Enter a City"
        value={query}
      />
    </div>
  );
}

export default SearchLocationInput;