import "./HeroStyle.css";
import ImgWall from "../assets/img/wood-tools-desk.jpg";
function Hero() {
  return (
    <>
      <div className="hero">
        <img alt="HeroImg" src={ImgWall} />

        <div className="hero-text">
          <div class="aggettivi">
            <div className="text">
              <div class="text-animated-one">
                <h1>Custom Furniture,</h1>
                <h1> Any Woodworking</h1>
                <p>Let us build for you!</p>
              </div>
            </div>
          </div>

          <div className="btnLinks">
            <a href="https://example.com" className="btn">
              <i className="animation"></i>English<i className="animation"></i>
            </a>
            <a href="https://example.com" className="btn">
              <i className="animation"></i>සිංහල<i className="animation"></i>
            </a>
          </div>
          <sup>* Select the Language </sup>
        </div>
      </div>
    </>
  );
}
export default Hero;
