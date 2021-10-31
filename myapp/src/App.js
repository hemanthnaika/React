const App = () => {
  // !Add the city
  const city = "Paris";
  //! Add the style in react
  // const styles={
  //   width:"500px",
  //   border:"10px solid red"}
  //!Add the if else and style
  let styles;
  if (city == "Paris") {
    styles = {
      width: "100px",
      border: "10px solid red",
    };
  } else {
    styles = { width: "500px", border: "10px solid black" };
  }
  const handler=()=>{
    console.log("Hii Iam click")
  }
  return (
    <div className="App">
      <nav>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
      <div className="container">
        {/* Add the changes */}
        <h3>{city}</h3>

        <img
          style={styles}
          src="https://images.unsplash.com/photo-1635331225654-c6b5a14797cb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1329&q=80"
          alt=""
        />
        {/* Event listeners */}
        {/* <button onClick={handler} >Click Me</button> */}
        {/* <button onMouseMove={handler} >Click Me</button> */}
        <button onDoubleClick={handler} >Click Me</button>
      </div>
      <footer>
        <a href="#">Github</a>
        <a href="#">Instagram</a>
        <a href="#">Twitter</a>
        <a href="#">Linked</a>
      </footer>
    </div>
  );
};

export default App;
