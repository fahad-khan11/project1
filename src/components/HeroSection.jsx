const HeroSection = () => {
  return (
    <main className="hero container">
      <div className="hero-content">
        <h1>YOUR FEET DESERVE THE BEST</h1>
        <p>
          YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.
        </p> 
    
      <div className="hero-button">
        <button className="btn1">Shop Now</button>
        <button className="btn2">Category</button>
      </div>

      <div className="Available">
        <p>ALso Available on</p>
        <div className="brand-icon">
          <img src="/images/amazon.jpg" alt="Amazon-logo" />
          <img src="/images/flipkart.jpg" alt="flipkart-logo" />
        </div>
      </div>
      </div>
      <div className="hero-image">
        <img src="/images/shoe_image.jpg" alt="Logo" />
      </div>
    </main>
  );
};
export default HeroSection;
