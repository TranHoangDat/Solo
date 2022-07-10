import React from "react";
import "./Platform.css";

const Platform = () => {
  return (
    <section id="downloads__platform">
      <div className="container">
        <div className="section__wrapper downloads_platform__wrapper">
          <h1
            className="section_main__description aos-init"
            data-aos="animation-scale-top"
            data-aos-duration="600"
          >
            Looking for another device?
          </h1>
        </div>
        <div className="downloads_platform__list">
          <div className="downloads_platform__item">
            <div className="platform__icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                fill="none"
                viewBox="0 0 32 32"
              >
                <path
                  d="M15.942 4.606l.89-1.574a1.98 1.98 0 0 1 2.738-.753c.962.562 1.286 1.816.737 2.799l-8.581 15.187h6.207c2.012 0 3.139 2.417 2.265 4.092H2.001C.891 24.357 0 23.447 0 22.311s.891-2.046 2.001-2.046h5.102l6.531-11.573-2.04-3.62c-.55-.984-.225-2.226.737-2.799.962-.562 2.177-.23 2.738.753l.874 1.579zM8.224 26.465L6.3 29.877a1.98 1.98 0 0 1-2.738.753c-.962-.562-1.286-1.816-.737-2.799l1.429-2.529c1.616-.511 2.93-.118 3.969 1.163zm16.569-6.188h5.206c1.11 0 2.001.911 2.001 2.046s-.891 2.046-2.001 2.046h-2.892l1.952 3.462c.55.984.225 2.226-.737 2.799-.962.562-2.177.23-2.738-.753L18.191 16.78c-1.677-2.956-.478-5.924.704-6.93l5.899 10.427z"
                  fill="#272e35"
                ></path>
              </svg>
            </div>
            <div className="platform_main__description">Solo for iOS</div>
            <div className="platform_sub__description">Mobile App</div>
          </div>
          <div className="downloads_platform__item">
            <div className="platform__icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="26"
                height="32"
                viewBox="0 0 26 32"
              >
                <path
                  fill="#272e35"
                  d="M13.206 9.21c1.256 0 3.645-1.733 6.111-1.475 1.155.037 2.286.342 3.302.891s1.891 1.329 2.553 2.275c-1.043.641-1.907 1.536-2.512 2.601s-.93 2.266-.946 3.49c.001 1.378.408 2.725 1.171 3.874s1.845 2.047 3.115 2.583c-.5 1.621-1.253 3.152-2.231 4.537-1.312 1.963-2.687 3.881-4.872 3.918-2.122.048-2.835-1.25-5.268-1.25-2.458 0-3.218 1.214-5.254 1.299-2.081.076-3.67-2.096-5.031-4.04-2.718-3.972-4.835-11.194-1.997-16.107a7.8 7.8 0 0 1 6.564-4.003c2.081-.044 4.015 1.406 5.295 1.406zM19.342 0a7.15 7.15 0 0 1-1.636 5.122c-.57.709-1.294 1.28-2.117 1.669s-1.723.586-2.633.577c-.058-.892.061-1.786.349-2.632s.74-1.627 1.33-2.298C15.842 1.061 17.522.191 19.342 0z"
                ></path>
              </svg>
            </div>
            <div className="platform_main__description">Solo for Mac</div>
            <div className="platform_sub__description">Desktop App</div>
          </div>
          <div className="downloads_platform__item">
            <div className="platform__icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="33"
                height="31"
                viewBox="0 0 33 31"
              >
                <path
                  fill="#272e35"
                  d="M26.5 15v16h-20V15h20zm-24 0a2 2 0 0 1 2 2h0v10a2 2 0 1 1-4 0h0V17a2 2 0 0 1 2-2zm28 0a2 2 0 0 1 2 2h0v10a2 2 0 1 1-4 0h0V17a2 2 0 0 1 2-2zM23.668.446c.304-.462.924-.584 1.386-.278a1 1 0 0 1 .278 1.386h0l-2.506 3.76C25.052 7.148 26.5 9.89 26.5 13h0-20c0-3.11 1.448-5.852 3.674-7.686h0l-2.506-3.76A1 1 0 0 1 7.946.168a1 1 0 0 1 1.386.278h0l2.506 3.758C13.236 3.46 14.806 3 16.5 3s3.264.46 4.662 1.204h0z"
                ></path>
              </svg>
            </div>
            <div className="platform_main__description">Solo for Android</div>
            <div className="platform_sub__description">Mobile App</div>
          </div>
          <div className="downloads_platform__item">
            <div className="platform__icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                fill="none"
                viewBox="0 0 32 32"
              >
                <path
                  d="M31 1H1a1 1 0 0 0-1 1v23a1 1 0 0 0 1 1h13v3H9a1 1 0 1 0 0 2h14a1 1 0 1 0 0-2h-5v-3h13a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zm-1 23H2V3h28v21z"
                  fill="#272e35"
                ></path>
              </svg>
            </div>
            <div className="platform_main__description">Solo for Web</div>
            <div className="platform_sub__description">Desktop App</div>
          </div>
          <div className="downloads_platform__item">
            <div className="platform__icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                fill="none"
                viewBox="0 0 32 32"
              >
                <path
                  d="M14.675 2.511L31.969 0l.004 15.163-17.298.128V2.511zM.053 4.551c4.335-.669 8.689-1.247 13.043-1.791l.007 12.575c-4.35-.004-8.7.062-13.05.051V4.551zm0 12.154l13.039.047.004 12.611L.053 27.57V16.706zm14.596.168h17.32V32l-17.294-2.445-.026-12.681z"
                  fill="#272e35"
                ></path>
              </svg>
            </div>
            <div className="platform_main__description">Solo for Windows</div>
            <div className="platform_sub__description">Desktop App</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Platform;
