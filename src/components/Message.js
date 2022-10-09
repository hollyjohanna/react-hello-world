// const grabUserName = () => {
//   let name = prompt("what is your name?");
// };

const greeting = () => {
  alert("Hello");
};

const Message = () => {
  return (
    <div className="section" id="message">
      <img
        className="rarity-img"
        src="https://i.pinimg.com/originals/30/9a/6d/309a6d5689f62cd04bd54049de27c0c3.png"
        alt="Random"
      />
      <p>Welcome to the home page</p>
      <button onClick={greeting}>Click Me!</button>
    </div>
  );
};

export default Message;
