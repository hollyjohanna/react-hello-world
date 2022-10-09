const chocolateData = [
  {
    name: "Whittakers Berry Forest",
    price: 6.29,
    img: "https://wtk-live-public.s3.ap-southeast-2.amazonaws.com/public/Uploads/Products/Product/Product-250g-2022/BerryForest-250.png",
  },
  {
    name: "Whittakers Creamy Milk",
    price: 6,
    img: "https://www.thewarehouse.co.nz/on/demandware.static/-/Sites-twl-master-catalog/default/dwf168d702/images/hi-res/96/E8/R732709_30.jpg",
  },
  {
    name: "Cadbury Caramello",
    price: 3,
    img: "https://www.cadbury.co.nz/media/catalog/product/m/o/mond-9300617064978-1.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=519&width=712&canvas=712:519",
  },
  {
    name: "Cadbury Caramilk",
    price: 4,
    img: "https://www.cadbury.co.nz/media/catalog/product/m/o/mond_9300617075547-1.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=519&width=712&canvas=712:519",
  },
];

const AllChocolate = () => {
  const renderedChocolate = chocolateData.map((chocolate, index) => {
    return (
      <div id="chocolate-card" key={index}>
        <h3>{chocolate.name}</h3>
        <p>${chocolate.price}</p>
        <img src={chocolate.img} alt="chocolate" id="choc-img" />
      </div>
    );
  });

  return renderedChocolate;
};

const MapSomeData = () => {
  return (
    <div className="section">
      <h2>Map Some Data</h2>
      <p>
        This component will render a list of chocolate from an array of objects
      </p>
      <div id="chocolate-container">
        <AllChocolate />
      </div>
    </div>
  );
};

export default MapSomeData;
