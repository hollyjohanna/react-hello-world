const GreetingMessage = (props) => {
  // console.log(props);
  return (
    <div id="greeting">
      Hello, {props.name}. {props.message}
    </div>
  );
};

const Car = (props) => {
  return (
    <div className="car">
      <h3>{props.type}</h3>
      <p>${props.price}</p>
    </div>
  );
};

const Props = () => {
  return (
    <div className="section">
      <h2>Basic Props</h2>
      <p>
        You can look at Props as arguments - its a way to send data down between
        components
      </p>
      <GreetingMessage name="Hollidaisy" message="Welcome back!" />
      <Car type="BMW" price="10" />
      <Car type="Toyota" price="100" />
      <Car type="Lexus" price="15" />
    </div>
  );
};

export default Props;
