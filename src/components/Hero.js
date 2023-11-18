import "./HeroStyle.css";
import ImgWall from "../assets/img/wood-tools-desk.svg";
function Hero() {
  return (
    <>
      <div className="hero">
        <img alt="HeroImg" src={ImgWall} />

        <div className="hero-text">
          <div class="aggettivi">
            <div className="text">
              <div class="text-animated-one">
                Custom Furniture, <br></br>Any Woodworking<br></br>
                <p>Let us build for you!</p>
              </div>
              <div class="text-animated-two">
                සිතැගි ගෘහභාණ්ඩ, <br></br>ඕනෑම ලී වැඩ<br></br>
                <p>අපි ඔබ වෙනුවෙන් සකසා දෙන්නෙමු!</p>
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
