import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about-wrapper">
      <div className="about-page">
        <div className="about-box">
          <h2>WearDistrict</h2>
          <p>
            Founded with a passion for modern street culture, WearDistrict is a lifestyle brand
            designed for everyday comfort and style. <br />
            We believe fashion isn’t about following trends, it’s about creating your own.
          </p>
          <p>
            Every collection we release blends street wear energy with timeless comfort,
            so you can look good and feel real, whether you’re out with friends,
            hustling in the city, or chilling at home.
          </p>
        </div>

        <div className="about-box mission">
          <h3>Mission</h3>
          <p>
            To make street wear that speaks confidence, creativity, and authenticity.
          </p>
        </div>

        <div className="about-box">
          <h3>Our Promise</h3>
          <h4>Style with Substance</h4>
          <p>
            We care about how our clothes are made. That’s why we work with trusted
            local and international suppliers to ensure:
          </p>
          <ul>
            <li>Quality materials that last</li>
            <li>Comfort-first designs for everyday wear</li>
            <li>Ethical production practices</li>
          </ul>
        </div>
      </div>

      <footer className="about-footer">
        <p>Follow us on</p>
        <p>
          Instagram: [@weardistrict] &nbsp; | &nbsp;
          TikTok: [@weardistrictph] &nbsp; | &nbsp;
          Facebook: [WearDistrict Official]
        </p>
      </footer>
    </div>
  );
};

export default About;
