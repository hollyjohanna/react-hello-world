const Title = () => {
  return <h2>Gallery Images</h2>;
};

const GalleryImages = () => {
  return (
    <div id="gallery-container">
      <img
        id="pony-img"
        src="https://is4-ssl.mzstatic.com/image/thumb/Purple71/v4/be/b8/67/beb8670d-7cf7-b61f-b038-0b7abfd69f06/source/512x512bb.jpg"
        alt="rarity"
      />
      <img
        id="pony-img"
        src="https://i.pinimg.com/736x/c0/d2/5a/c0d25a265aeee9c47c6c4ca92d499f8a--my-little-pony-characters-my-little-pony-rarity.jpg"
        alt="rarity"
      />
      <img
        id="pony-img"
        src="https://www.looper.com/img/gallery/the-complete-timeline-of-my-little-pony-friendship-is-magic-explained/intro-1583353080.jpg"
        alt="All the ponies grown up"
      />
    </div>
  );
};

const ContactInfo = () => {
  return (
    <div>
      <h3>Contact image owner</h3>
      <p>Holliday Robbins - 0273880624</p>
    </div>
  );
};

const Gallery = () => {
  return (
    <div className="section">
      <Title />
      <GalleryImages />
      <ContactInfo />
    </div>
  );
};

export default Gallery;
