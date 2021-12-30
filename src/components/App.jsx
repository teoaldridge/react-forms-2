import React, { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [headingName, setHeadingName] = useState("");

  function manageInput(event) {
    setName(event.target.value);
    //console.log(event.target.type);
    //console.log(event.target.placeholder);
  }

  function handleClick(event) {
    setHeadingName(name);

    //we do preventDefault to prevent the html
    //form its default behaviour to refresh the page.
    event.preventDefault();
  }

  return (
    <div className="container">
      <form>
        <h1>Hello {headingName}</h1>
        <input
          onChange={manageInput}
          type="text"
          placeholder="What's your name?"
        />
        <button onClick={handleClick}>Submit</button>
      </form>
    </div>
  );
}

export default App;
