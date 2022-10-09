const DinoData = ({ name, diet, img }) => {
  return (
    <div id="dino-card">
      <h3>{name}</h3>
      <p>{diet}</p>
      <img src={img} id="dino-img" alt="dinosaur" />
    </div>
  );
};

const Dinosaurs = () => {
  return (
    <div className="section">
      <h2>My Favourite Dinosaurs</h2>
      <p>Heres a list of the coolest dinosaurs</p>
      <div id="dino-container">
        <DinoData
          name="Tyrannosaurus Rex"
          diet="Carnivore"
          img="https://images.unsplash.com/photo-1525877442103-5ddb2089b2bb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dCUyMHJleHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"
        />
        <DinoData
          name="Stegosaurus"
          diet="Herbivore"
          img="https://images.unsplash.com/photo-1627874458566-20503b954fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80"
        />
        <DinoData
          name="Triceratops"
          diet="Herbivore"
          img="https://images.unsplash.com/photo-1632665745163-84b8342ee740?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2458&q=80"
        />
      </div>
    </div>
  );
};

export default Dinosaurs;
