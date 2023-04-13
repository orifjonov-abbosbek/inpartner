import React from "react";

import "./Header.css";

const Header = () => {
  return (
    <>
      <div className="container">
        <div className="header_wrapper">
          <div className="header_start">
            <a className="Logo" href="">
              <svg
                width="143"
                height="60"
                viewBox="0 0 143 60"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 52.6073V34.4897H3.04718V52.6073H0ZM0 31.0884V27.2705H3.04718V31.0884H0Z"
                  fill="#FF5500"
                />
                <path
                  d="M23.1064 52.6073H20.0593V42.4726C20.0593 40.552 19.7592 39.1522 19.159 38.2729C18.5819 37.3705 17.6931 36.9193 16.4927 36.9193C15.6616 36.9193 14.8306 37.1275 13.9995 37.544C13.1916 37.9605 12.4644 38.5274 11.818 39.2447C11.1948 39.9389 10.7446 40.7487 10.4676 41.6743V52.6073H7.42041V34.4897H10.1906V38.377C10.6753 37.5209 11.2986 36.7805 12.0604 36.1557C12.8222 35.531 13.6879 35.0451 14.6575 34.698C15.627 34.3509 16.6427 34.1774 17.7046 34.1774C18.7434 34.1774 19.6091 34.374 20.3017 34.7674C21.0173 35.1376 21.5713 35.6698 21.9638 36.364C22.3793 37.035 22.6678 37.8333 22.8294 38.7588C23.0141 39.6844 23.1064 40.6909 23.1064 41.7784V52.6073Z"
                  fill="#FF5500"
                />
                <path
                  d="M37.5559 52.9543C36.0785 52.9543 34.7626 52.5841 33.6084 51.8437C32.4542 51.1032 31.5423 50.1661 30.8729 49.0323V60H27.8257V34.4897H30.5266V37.8911C31.2422 36.7805 32.1771 35.8896 33.3314 35.2186C34.4856 34.5244 35.7437 34.1774 37.1057 34.1774C38.3523 34.1774 39.495 34.4319 40.5338 34.9409C41.5726 35.45 42.4729 36.1441 43.2347 37.0234C43.9965 37.9027 44.5852 38.9092 45.0007 40.043C45.4393 41.1537 45.6586 42.3222 45.6586 43.5485C45.6586 45.2608 45.3123 46.8342 44.6198 48.2688C43.9503 49.7034 43.0039 50.8487 41.7804 51.7049C40.5569 52.5378 39.1487 52.9543 37.5559 52.9543ZM36.6209 50.3165C37.5212 50.3165 38.3292 50.1314 39.0448 49.7612C39.7835 49.3679 40.4068 48.8588 40.9147 48.2341C41.4456 47.5862 41.8496 46.8573 42.1266 46.0475C42.4037 45.2376 42.5422 44.4046 42.5422 43.5485C42.5422 42.6461 42.3806 41.79 42.0574 40.9801C41.7573 40.1703 41.3187 39.453 40.7416 38.8282C40.1875 38.2035 39.5296 37.7176 38.7678 37.3705C38.0291 37.0003 37.2211 36.8152 36.3439 36.8152C35.7899 36.8152 35.2128 36.9193 34.6126 37.1275C34.0355 37.3358 33.4814 37.6366 32.9505 38.0299C32.4195 38.4002 31.9694 38.8282 31.6 39.3141C31.2307 39.8 30.9883 40.3207 30.8729 40.876V46.0475C31.2191 46.8342 31.6808 47.5515 32.2579 48.1994C32.8351 48.8472 33.5045 49.3679 34.2663 49.7612C35.0281 50.1314 35.813 50.3165 36.6209 50.3165Z"
                  fill="black"
                />
                <path
                  d="M47.4297 47.3664C47.4297 46.2094 47.7529 45.2145 48.3992 44.3815C49.0687 43.5254 49.9805 42.8659 51.1348 42.4031C52.289 41.9404 53.6279 41.709 55.1515 41.709C55.9595 41.709 56.8136 41.7784 57.7139 41.9172C58.6142 42.0329 59.4106 42.218 60.1032 42.4726V41.1537C60.1032 39.7653 59.6877 38.6778 58.8566 37.8911C58.0256 37.0813 56.8482 36.6763 55.3246 36.6763C54.332 36.6763 53.374 36.8614 52.4506 37.2317C51.5503 37.5787 50.5923 38.0878 49.5766 38.7588L48.4685 36.6069C49.6458 35.7971 50.8231 35.1955 52.0005 34.8021C53.1778 34.3856 54.4013 34.1774 55.6709 34.1774C57.9794 34.1774 59.8031 34.8252 61.142 36.121C62.4809 37.3936 63.1504 39.1753 63.1504 41.466V49.1365C63.1504 49.5067 63.2196 49.7843 63.3581 49.9695C63.5197 50.1314 63.7736 50.224 64.1199 50.2471V52.6073C63.8198 52.6535 63.5543 52.6882 63.3235 52.7114C63.1157 52.7345 62.9426 52.7461 62.8041 52.7461C62.0885 52.7461 61.546 52.5494 61.1766 52.1561C60.8303 51.7627 60.6341 51.3462 60.588 50.9066L60.5187 49.7612C59.7338 50.7793 58.7066 51.566 57.4369 52.1213C56.1672 52.6767 54.9091 52.9543 53.6625 52.9543C52.4621 52.9543 51.3887 52.7114 50.4422 52.2255C49.4958 51.7164 48.7571 51.0454 48.2261 50.2124C47.6952 49.3563 47.4297 48.4076 47.4297 47.3664ZM59.2029 48.6506C59.4799 48.3266 59.6992 48.0027 59.8608 47.6787C60.0224 47.3317 60.1032 47.0424 60.1032 46.811V44.555C59.3875 44.2774 58.6373 44.0691 57.8524 43.9303C57.0675 43.7683 56.2942 43.6873 55.5324 43.6873C53.9857 43.6873 52.7276 43.9997 51.7581 44.6244C50.8116 45.226 50.3384 46.059 50.3384 47.1234C50.3384 47.7019 50.4884 48.2688 50.7885 48.8241C51.1117 49.3563 51.5734 49.7959 52.1736 50.143C52.7969 50.4901 53.5587 50.6636 54.459 50.6636C55.4054 50.6636 56.3057 50.4785 57.1599 50.1083C58.014 49.7149 58.695 49.229 59.2029 48.6506Z"
                  fill="black"
                />
                <path
                  d="M89.7332 51.7048C89.4792 51.8205 89.133 51.9709 88.6943 52.156C88.2557 52.3412 87.7479 52.5031 87.1708 52.642C86.5936 52.7808 85.9819 52.8502 85.3355 52.8502C84.5968 52.8502 83.9158 52.7229 83.2925 52.4684C82.6692 52.1908 82.1729 51.7743 81.8036 51.2189C81.4342 50.6405 81.2495 49.9232 81.2495 49.067V36.8846H78.791V34.4897H81.2495V28.4506H84.2967V34.4897H88.3481V36.8846H84.2967V48.1299C84.3429 48.7778 84.5622 49.2637 84.9546 49.5877C85.3471 49.8885 85.8088 50.0389 86.3397 50.0389C86.9399 50.0389 87.4939 49.9347 88.0018 49.7265C88.5097 49.5183 88.8444 49.3678 89.006 49.2753L89.7332 51.7048Z"
                  fill="black"
                />
                <path
                  d="M107.818 52.6073H104.771V42.4726C104.771 40.552 104.471 39.1522 103.871 38.2729C103.294 37.3705 102.405 36.9193 101.205 36.9193C100.374 36.9193 99.5425 37.1275 98.7115 37.544C97.9035 37.9605 97.1763 38.5274 96.53 39.2447C95.9067 39.9389 95.4565 40.7487 95.1795 41.6743V52.6073H92.1323V34.4897H94.9025V38.377C95.3873 37.5209 96.0106 36.7805 96.7723 36.1557C97.5341 35.531 98.3998 35.0451 99.3694 34.698C100.339 34.3509 101.355 34.1774 102.417 34.1774C103.455 34.1774 104.321 34.374 105.014 34.7674C105.729 35.1376 106.283 35.6698 106.676 36.364C107.091 37.035 107.38 37.8333 107.541 38.7588C107.726 39.6844 107.818 40.6909 107.818 41.7784V52.6073Z"
                  fill="black"
                />
                <path
                  d="M120.537 52.9543C119.175 52.9543 117.928 52.7114 116.797 52.2255C115.689 51.7164 114.72 51.0338 113.889 50.1777C113.081 49.2984 112.446 48.2919 111.984 47.1581C111.545 46.0243 111.326 44.8211 111.326 43.5485C111.326 41.8362 111.719 40.2744 112.503 38.8629C113.288 37.4515 114.373 36.3177 115.758 35.4616C117.167 34.6054 118.771 34.1774 120.572 34.1774C122.395 34.1774 123.977 34.617 125.315 35.4963C126.677 36.3524 127.728 37.4862 128.467 38.8976C129.228 40.286 129.609 41.79 129.609 43.4097C129.609 43.6411 129.598 43.8724 129.575 44.1038C129.575 44.3121 129.563 44.474 129.54 44.5897H114.546C114.639 45.7698 114.962 46.8226 115.516 47.7482C116.093 48.6506 116.832 49.3679 117.732 49.9C118.632 50.4091 119.602 50.6636 120.641 50.6636C121.749 50.6636 122.788 50.386 123.757 49.8306C124.75 49.2753 125.431 48.5464 125.8 47.644L128.432 48.3729C128.039 49.2522 127.451 50.0389 126.666 50.733C125.904 51.4272 124.992 51.9709 123.93 52.3643C122.892 52.7577 121.76 52.9543 120.537 52.9543ZM114.443 42.4726H126.77C126.677 41.2925 126.343 40.2512 125.766 39.3488C125.189 38.4464 124.45 37.7407 123.55 37.2317C122.649 36.7226 121.657 36.4681 120.572 36.4681C119.51 36.4681 118.529 36.7226 117.628 37.2317C116.728 37.7407 115.989 38.4464 115.412 39.3488C114.858 40.2512 114.535 41.2925 114.443 42.4726Z"
                  fill="black"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M136.034 34.0881H132.943C132.943 16.9732 119.101 3.09892 102.026 3.09892C84.9508 3.09892 71.1088 16.9732 71.1088 34.0881H68.0171C68.0171 15.2618 83.2433 0 102.026 0C120.808 0 136.034 15.2618 136.034 34.0881ZM77.5742 37.1622C76.0506 37.1854 74.7001 37.5787 73.5228 38.3423C72.3686 39.0827 71.5491 40.1124 71.0643 41.4313V52.6073H68.0171V34.0881H71.1088L70.8565 38.6894C71.4798 37.4399 72.2993 36.4334 73.315 35.6698C74.3538 34.8831 75.4388 34.4435 76.57 34.3509H77.1586C77.3202 34.3509 77.4587 34.3625 77.5742 34.3856V37.1622ZM142.5 37.1622C140.976 37.1854 139.626 37.5787 138.448 38.3423C137.294 39.0827 136.475 40.1124 135.99 41.4313V52.6073H132.943L132.943 34.0881H136.034L135.782 38.6894C136.405 37.4399 137.225 36.4334 138.241 35.6698C139.279 34.8831 140.364 34.4435 141.496 34.3509H142.084C142.246 34.3509 142.384 34.3625 142.5 34.3856V37.1622Z"
                  fill="#FF5500"
                />
              </svg>
            </a>
            <input className="searchInput" type="text" placeholder="Qidirish" />
          </div>

          <div className="header_end">
            <nav className="site_nav">
              <ul className="nav_list">
                <li className="nav_list_item">
                  <a href="">E’lonlar</a>
                </li>
                <li className="nav_list_item">
                  <a href="">Chat</a>
                </li>
                <li className="nav_list_item">
                  <a href="">E’lon Berish</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;