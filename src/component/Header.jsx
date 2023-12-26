import "../assets/css/header.css";
import { IoSearchSharp } from "react-icons/io5";
import { FaChevronDown } from "react-icons/fa";
import { Link } from "react-router-dom";
import { BsTelephonePlus } from "react-icons/bs";
import { FaRegEnvelope } from "react-icons/fa";
import { TiSocialDribbbleCircular } from "react-icons/ti";
import { FaBehance } from "react-icons/fa";

const Header = () => {
  return (
    <header>
      <div className="header  header-background_contacts ">
        <div className="flex item-center header-contact ">
          <div className="px-4 icon-fff">
            <BsTelephonePlus />
          </div>
          <div className="px-4 flex align-center item-center color-fff">
            <div className="px-4">
              <FaRegEnvelope className="color-fff" />
            </div>
            <div>
              Rivax@gmail.com
            </div>
          </div>
        </div>
        <div className="flex color-fff hiden">
          <div className="mx-4">
            <TiSocialDribbbleCircular className="text-16" />
          </div>
          <div className="mx-4">
            <FaBehance className="text-16" />
          </div>
        </div>
      </div>
      <div className="header">
        <div className="header-logo">
          <Link to='/' className="header-img__list">
            <img src="https://demo.rivaxstudio.com/raveen/personal/wp-content/uploads/2023/06/logo.svg" alt="logo" />
          </Link>
        </div>
        <div className="header-category">
          <ul className="header-category_list">
            <li className="header-category_list--item">HOME
              <FaChevronDown className="header-category_list--icon" />
              <ul className="sub-menu">
                <li id="menu-item-318" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-318"><a href="https://gobomus.com/home-01/"><span>Home 01</span></a></li>
                <li id="menu-item-430" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-430"><a href="https://gobomus.com/home-02/"><span>Home 02</span></a></li>
                <li id="menu-item-769" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-769"><a href="https://gobomus.com/home-03/"><span>Home 03</span></a></li>
                <li id="menu-item-310" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-310"><a href="https://gobomus.com/home-04/"><span>Home 04</span></a></li>
                <li id="menu-item-108" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-108"><a href="https://gobomus.com/home-05/"><span>Home 05</span></a></li>
                <li id="menu-item-309" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-309"><a href="https://gobomus.com/home-06/"><span>Home 06</span></a></li>
                <li id="menu-item-314" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-314"><a href="https://gobomus.com/home-07/"><span>Home 07</span></a></li>
                <li id="menu-item-877" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-877"><a href="https://gobomus.com/home-08/"><span>Home 08</span></a></li>
                <li id="menu-item-881" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-881"><a href="https://gobomus.com/home-09/"><span>Home 09</span></a></li>
                <li id="menu-item-1054" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1054"><a href="https://gobomus.com/home-10/"><span>Home 10</span></a></li>
                <li id="menu-item-1056" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1056"><a href="https://gobomus.com/home-11/"><span>Home 11</span></a></li>
                <li id="menu-item-1055" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1055"><a href="https://gobomus.com/home-12/"><span>Home 12</span></a></li>
              </ul>
            </li>
            <li className="header-category_list--item">FEATURES
              <FaChevronDown className="header-category_list--icon" />
              <ul className="sub-menu">
                <li id="menu-item-640" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-640"><a href="#"><span>Post Type</span></a>
                  <ul className="sub-menu">
                    <li id="menu-item-727" className="menu-item menu-item-type-post_type menu-item-object-post menu-item-727"><a href="https://gobomus.com/the-single-most-important-thing-you-need-to-know-about-success/"><span>Post Standard</span></a></li>
                    <li id="menu-item-722" className="menu-item menu-item-type-post_type menu-item-object-post menu-item-722"><a href="https://gobomus.com/if-you-were-to-start-a-business-from-scratch-tomorrow/"><span>Post Quote</span></a></li>
                    <li id="menu-item-723" className="menu-item menu-item-type-post_type menu-item-object-post menu-item-723"><a href="https://gobomus.com/10-best-books-to-read-at-the-beach-this-summer/"><span>Post Gallery</span></a></li>
                    <li id="menu-item-724" className="menu-item menu-item-type-post_type menu-item-object-post menu-item-724"><a href="https://gobomus.com/global-warming-is-changing-how-hurricanes-work/"><span>Post Link</span></a></li>
                    <li id="menu-item-725" className="menu-item menu-item-type-post_type menu-item-object-post menu-item-725"><a href="https://gobomus.com/after-a-few-dates-they-traveled-to-the-other-side-of-the-world/"><span>Post Video</span></a></li>
                    <li id="menu-item-726" className="menu-item menu-item-type-post_type menu-item-object-post menu-item-726"><a href="https://gobomus.com/finding-your-inner-peace-through-meditation/"><span>Post Audio</span></a></li>
                  </ul>
                </li>
                <li id="menu-item-739" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-739"><a href="#"><span>Sidebar</span></a>
                  <ul className="sub-menu">
                    <li id="menu-item-753" className="menu-item menu-item-type-post_type menu-item-object-post menu-item-753"><a href="https://gobomus.com/how-i-traveled-the-world-with-only-100/"><span>Right Sidebar</span></a></li>
                    <li id="menu-item-738" className="menu-item menu-item-type-post_type menu-item-object-post menu-item-738"><a href="https://gobomus.com/when-walking-i-keep-my-eyes-straight-ahead/"><span>Left Sidebar</span></a></li>
                    <li id="menu-item-741" className="menu-item menu-item-type-post_type menu-item-object-post menu-item-741"><a href="https://gobomus.com/im-happy-this-comfortable-trend-is-still-going-to-be-cool-in-2023/"><span>No Sidebar</span></a></li>
                  </ul>
                </li>
                <li id="menu-item-641" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-641"><a href="#"><span>Post Layout</span></a>
                  <ul className="sub-menu">
                    <li id="menu-item-717" className="menu-item menu-item-type-post_type menu-item-object-post menu-item-717"><a href="https://gobomus.com/health-tips-and-benefits-of-healthy-lifestyle-you-should-consider-2/"><span>Layout 1</span></a></li>
                    <li id="menu-item-718" className="menu-item menu-item-type-post_type menu-item-object-post menu-item-718"><a href="https://gobomus.com/style-is-a-way-to-say-who-you-are-without-having-to-speak/"><span>Layout 2</span></a></li>
                    <li id="menu-item-719" className="menu-item menu-item-type-post_type menu-item-object-post menu-item-719"><a href="https://gobomus.com/where-to-score-the-best-travel-deals-on-cyber-monday/"><span>Layout 3</span></a></li>
                    <li id="menu-item-720" className="menu-item menu-item-type-post_type menu-item-object-post menu-item-720"><a href="https://gobomus.com/style-is-a-way-to-say-who-you-are-without-having-to-speak-2/"><span>Layout 4</span></a></li>
                    <li id="menu-item-721" className="menu-item menu-item-type-post_type menu-item-object-post menu-item-721"><a href="https://gobomus.com/taking-control-of-your-daily-life-is-easy-when-you-know-how/"><span>Layout 5</span></a></li>
                    <li id="menu-item-882" className="menu-item menu-item-type-post_type menu-item-object-post menu-item-882"><a href="https://gobomus.com/how-to-stay-positive-during-challenging-times/"><span>Layout 6</span></a></li>
                  </ul>
                </li>
                <li id="menu-item-745" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-745"><a href="#"><span>Table of Content</span></a>
                  <ul className="sub-menu">
                    <li id="menu-item-744" className="menu-item menu-item-type-post_type menu-item-object-post menu-item-744"><a href="https://gobomus.com/a-journey-through-the-majestic-mountains-of-switzerland/"><span>Sticky</span></a></li>
                    <li id="menu-item-746" className="menu-item menu-item-type-post_type menu-item-object-post menu-item-746"><a href="https://gobomus.com/how-to-photograph-a-model-like-a-professional/"><span>Inline</span></a></li>
                  </ul>
                </li>
                <li id="menu-item-751" className="menu-item menu-item-type-post_type menu-item-object-post menu-item-751"><a href="https://gobomus.com/know-a-travel-pros-tips-for-staying-moisturized-on-long-flights/"><span>Updated Date</span></a></li>
                <li id="menu-item-1037" className="menu-item menu-item-type-post_type menu-item-object-post menu-item-1037"><a href="https://gobomus.com/ultimate-guide-to-planning-your-first-overseas-trip/"><span>Comments Template</span></a></li>
                <li id="menu-item-1053" className="menu-item menu-item-type-post_type menu-item-object-post menu-item-1053"><a href="https://gobomus.com/winter-2023-fashion-trends-the-only-looks-you-need-to-know/"><span>Autoload Next Post</span></a></li>
                <li id="menu-item-1038" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-1038"><a href="https://demo.rivaxstudio.com/raveen/personal/author/userdemo/"><span>Author Page</span></a></li>
                <li id="menu-item-1039" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-1039"><a href="https://demo.rivaxstudio.com/raveen/personal/404"><span>Page 404</span></a></li>
                <li id="menu-item-1040" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-1040"><a href="https://demo.rivaxstudio.com/raveen/personal/?s=travel"><span>Search Result</span></a></li>
                <li id="menu-item-749" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-749"><a href="https://demo.rivaxstudio.com/raveen/personal/the-single-most-important-thing-you-need-to-know-about-success/?amp=1"><span>AMP</span></a></li>
              </ul>
            </li>
            <li>TRAVEL</li>
            <li className="header-category_list--item">PAGES
              <FaChevronDown className="header-category_list--icon" />
              <ul className="sub-menu">
                <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-110"><a href="https://gobomus.com/shop-2/"><span>Shop</span></a></li>
                <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-499"><a href="https://gobomus.com/about-us/"><span>About Us</span></a></li>
                <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-508"><a href="https://gobomus.com/coming-soon/"><span>Coming Soon</span></a></li>
              </ul>
            </li>
            <li>CONTACT</li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
