import React from "react";
import ava_1 from "@assets_images/Home/ava-1.png";
import ava_2 from "@assets_images/Home/ava-2.png";
import ava_3 from "@assets_images/Home/ava-3.png";
import ava_4 from "@assets_images/Home/ava-4.png";
import "./Team.css";

const Team = () => {
  return (
    <section id="about__team">
      <div className="container">
        <div className="section__wrapper">
          <p className="section__title">Meet Solo's team</p>
          <h1 className="section_main__description">Who we are?</h1>
        </div>
        <ul className="about__list">
          <li className="about__item">
            <div className="about__icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="42"
                height="46"
                viewBox="0 0 42 46"
              >
                <path d="M21 .854a14.98 14.98 0 0 1 13.253 7.999L36 8.853a4 4 0 0 1 4 4h0v11a4 4 0 0 1-4 4h0-2.514c-1.152 2.312-2.703 4.293-4.486 5.803v2.766a5 5 0 0 0 3.277 4.691l.253.085 8.765 2.7a1 1 0 0 1-.475 1.939l-.113-.028-8.765-2.7a7 7 0 0 1-4.934-6.388L27 36.422l.001-1.33c-1.887 1.13-3.94 1.761-6 1.761s-4.113-.631-6-1.761v1.331a7 7 0 0 1-4.657 6.592l-.284.094-8.765 2.7a1 1 0 0 1-.698-1.871l.109-.041 8.765-2.7a5 5 0 0 0 3.522-4.509l.007-.266v-2.767c-1.783-1.51-3.334-3.491-4.485-5.802H6a4 4 0 0 1-4-4h0v-11a4 4 0 0 1 4-4l1.748-.001A14.98 14.98 0 0 1 21 .854zm0 22.014a2.4 2.4 0 0 0-2.033 1.124h0l-2.119 3.391a1 1 0 0 1-.848.47h0l-5.218.001c1.027 1.796 2.322 3.32 3.763 4.484a.87.87 0 0 1 .151.118c1.943 1.526 4.142 2.397 6.305 2.397s4.361-.871 6.305-2.395c.045-.046.096-.087.15-.122 1.442-1.162 2.737-2.686 3.764-4.482L26 27.853a1 1 0 0 1-.848-.47h0l-2.118-3.39A2.4 2.4 0 0 0 21 22.868zm15-12.014H6a2 2 0 0 0-2 2h0v11a2 2 0 0 0 2 2h2.758l.052-.019c.223-.071.456-.06.663.019h5.972l1.827-2.922a4.4 4.4 0 0 1 1.384-1.387h0l.213-.126a4.4 4.4 0 0 1 4.261 0 4.4 4.4 0 0 1 1.598 1.514h0l1.825 2.921h5.973c.223-.086.477-.092.715-.001l2.757.001a2 2 0 0 0 1.284-.467h0l.13-.119A2 2 0 0 0 38 23.853h0v-11a2 2 0 0 0-2-2h0zm-3 4a1 1 0 0 1 .117 1.993l-.117.007H9a1 1 0 0 1-.117-1.993L9 14.853h24zM21 2.854a12.98 12.98 0 0 0-10.942 5.999h21.884A12.98 12.98 0 0 0 21 2.854z"></path>
              </svg>
            </div>
            <div className="about__details">Young & passionate</div>
          </li>
          <li className="about__item">
            <div className="about__icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="46"
                height="47"
                viewBox="0 0 46 47"
              >
                <path d="M23 .853c8.284 0 15 6.716 15 15 0 .891-.078 1.764-.227 2.613C42.654 20.94 46 26.006 46 31.853c0 8.284-6.716 15-15 15a14.93 14.93 0 0 1-7.999-2.309c-2.316 1.462-5.059 2.309-8.001 2.309-8.284 0-15-6.716-15-15 0-5.847 3.346-10.913 8.227-13.387C8.078 17.617 8 16.744 8 15.853c0-8.284 6.716-15 15-15zM8.723 20.467l-.202.113C4.624 22.825 2 27.032 2 31.853c0 7.18 5.82 13 13 13a12.94 12.94 0 0 0 6.251-1.599C18.037 40.502 16 36.416 16 31.853c0-.891.078-1.764.227-2.613-3.537-1.793-6.268-4.947-7.504-8.773zm28.553-.001l-.06.185c-1.263 3.743-3.963 6.825-7.443 8.59.149.848.227 1.721.227 2.613 0 4.563-2.037 8.649-5.251 11.4 1.855 1.02 3.985 1.6 6.251 1.6 7.18 0 13-5.82 13-13 0-4.904-2.715-9.173-6.724-11.387zm-19.151 9.577l-.038.294c-.058.497-.087 1.003-.087 1.516 0 4.163 1.956 7.868 5 10.248 3.044-2.38 5-6.086 5-10.248 0-.614-.043-1.219-.125-1.81-1.528.525-3.168.81-4.875.81a14.98 14.98 0 0 1-4.875-.81zm4.876-8.437l-.132.103c-2.018 1.619-3.542 3.828-4.311 6.365a12.97 12.97 0 0 0 4.442.779c1.56 0 3.056-.275 4.442-.779-.785-2.592-2.359-4.84-4.441-6.468zM31 18.853a12.94 12.94 0 0 0-6.251 1.599c2.08 1.781 3.667 4.121 4.528 6.788 2.934-1.62 5.175-4.342 6.165-7.608A12.97 12.97 0 0 0 31 18.853zm-16 0c-1.56 0-3.056.275-4.442.779.99 3.266 3.231 5.988 6.165 7.609a15.01 15.01 0 0 1 4.528-6.788c-1.855-1.02-3.985-1.6-6.251-1.6zm8-16c-7.18 0-13 5.82-13 13 0 .614.043 1.219.125 1.81 1.528-.525 3.168-.81 4.875-.81a14.93 14.93 0 0 1 7.999 2.309c2.316-1.462 5.059-2.309 8.001-2.309a14.98 14.98 0 0 1 4.875.81 13.11 13.11 0 0 0 .125-1.81c0-7.18-5.82-13-13-13z"></path>
              </svg>
            </div>
            <div className="about__details">Enthusiasm & creativity</div>
          </li>
          <li className="about__item">
            <div className="about__icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="44"
                height="45"
                viewBox="0 0 44 45"
              >
                <path d="M22 .853c12.15 0 22 9.85 22 22s-9.85 22-22 22-22-9.85-22-22 9.85-22 22-22zm0 2c-11.046 0-20 8.954-20 20s8.954 20 20 20 20-8.954 20-20-8.954-20-20-20zM11.152 26.687A11 11 0 0 0 22 35.864a11 11 0 0 0 10.848-9.177 1 1 0 1 1 1.972.332A13 13 0 0 1 22 37.864 13 13 0 0 1 9.18 27.019a1 1 0 1 1 1.972-.332zM30 14.853a5 5 0 0 1 5 5 1 1 0 0 1-1.993.117L33 19.853a3 3 0 0 0-3-3 3 3 0 0 0-3 3 1 1 0 1 1-2 0 5 5 0 0 1 5-5zm-16 0a5 5 0 0 1 5 5 1 1 0 0 1-1.993.117L17 19.853a3 3 0 0 0-3-3 3 3 0 0 0-3 3 1 1 0 1 1-2 0 5 5 0 0 1 5-5z"></path>
              </svg>
            </div>
            <div className="about__details">Cheerful & comfortable</div>
          </li>
        </ul>
        <div className="section__wrapper">
          <h1 className="section_main__description">Meet the team</h1>
        </div>
        <div className="member__list">
          <div className="member__item">
            <div className="member__avatar">
              <img src={ava_1} alt="ava_1" />
            </div>
            <div className="member__name">Lexie Wolff</div>
            <div className="member__role">Communications Strategist</div>
          </div>
          <div className="member__item">
            <div className="member__avatar">
              <img src={ava_2} alt="ava_2" />
            </div>
            <div className="member__name">Ida Flatley</div>
            <div className="member__role">Lead Research Producer</div>
          </div>
          <div className="member__item">
            <div className="member__avatar">
              <img src={ava_3} alt="ava_3" />
            </div>
            <div className="member__name">Britney Barrows</div>
            <div className="member__role">Implementation Specialist</div>
          </div>
          <div className="member__item">
            <div className="member__avatar">
              <img src={ava_4} alt="ava_4" />
            </div>
            <div className="member__name">Chelsey Corkery</div>
            <div className="member__role">Forward Interactions Developer</div>
          </div>
          <div className="member__item">
            <div className="member__avatar">
              <img src={ava_2} alt="ava_2" />
            </div>
            <div className="member__name">Ida Flatley</div>
            <div className="member__role">Lead Research Producer</div>
          </div>
          <div className="member__item">
            <div className="member__avatar">
              <img src={ava_1} alt="ava_1" />
            </div>
            <div className="member__name">Lexie Wolff</div>
            <div className="member__role">Communications Strategist</div>
          </div>
          <div className="member__item">
            <div className="member__avatar">
              <img src={ava_4} alt="ava_4" />
            </div>
            <div className="member__name">Chelsey Corkery</div>
            <div className="member__role">Forward Interactions Developer</div>
          </div>
          <div className="member__item">
            <div className="member__avatar">
              <img src={ava_3} alt="ava_3" />
            </div>
            <div className="member__name">Britney Barrows</div>
            <div className="member__role">Implementation Specialist</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
