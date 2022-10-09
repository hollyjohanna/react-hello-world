// import addTwoNumbers from "../utilities/add";
// <></> these are called react fragments
// they sit in as parent elements which are required to be around JSX

const name = "Holliday";

//heres a component of the hero which goes on the bottom
//scrolling text
const BottomText = () => {
  return (
    <div id="scroll-container">
      <p id="scroll-text">COOL TEXT /// COOL TEXT /// COOL TEXT RAD</p>
    </div>
  );
};

const Hero = () => {
  return (
    <div className="section" id="hero">
      <h1 className="main-header">Hello World</h1>
      <p>This is the hero</p>
      <p>Welcome back, {name}</p>
      <BottomText />
    </div>
  );
};

export default Hero;
