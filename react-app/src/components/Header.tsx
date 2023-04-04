import React from 'react';
import { Link, NavLink, Route, Routes } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header__inner">
          <Link className="header__logo" to="/">
            <svg
              width="58"
              height="70"
              viewBox="0 0 58 70"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M24.0231 0.891756C19.4885 1.81716 16.1348 5.48026 15.6378 10.0415C15.5573 10.7926 15.5174 10.8864 15.2619 10.8864C15.1009 10.8864 12.807 11.0208 10.1771 11.1818L5.38772 11.4772L5.32052 11.9602C5.15952 13.0606 0.504518 66.0401 0.571018 66.094C0.624918 66.1479 43.6497 69.1663 45.8505 69.2601L46.5477 69.3007L49.459 65.5172L52.357 61.7337H54.8931C57.1604 61.7337 57.4285 61.7071 57.4285 61.5055C57.4285 61.3179 55.6575 46.1846 52.2093 17.0044C51.6997 12.6707 51.2433 9.08875 51.2034 9.04885C51.1635 9.00895 50.8548 9.07546 50.5062 9.19656C49.6879 9.47866 49.5003 9.46465 48.4398 9.12935C47.6621 8.87455 47.3667 8.86126 45.6895 8.92776C44.6563 8.98166 43.5293 9.04816 43.194 9.08876L42.5899 9.16926L42.4156 8.43146C41.8927 6.08366 40.0006 3.80306 37.5723 2.56896C35.9084 1.72406 35.305 1.58965 32.8634 1.54905C31.0658 1.52245 30.489 1.45525 29.831 1.24035C28.1685 0.676854 25.7675 0.542456 24.0231 0.891756ZM25.848 4.24546C24.3857 5.70776 23.433 7.63976 23.2587 9.47796L23.1782 10.3229L22.3599 10.3901C21.9168 10.444 20.8038 10.5112 19.905 10.5644C18.0136 10.6715 18.0941 10.7387 18.456 9.37016C19.1539 6.70036 21.5955 4.45965 24.721 3.64135C25.2579 3.50695 25.9285 3.38655 26.2099 3.38655L26.7195 3.37326L25.848 4.24546ZM35.963 4.43305C37.7872 5.13095 39.4511 6.94186 39.9614 8.75276L40.0958 9.23576L39.2775 9.32956C38.8344 9.37016 38.0966 9.41006 37.6542 9.41006H36.8226L36.5944 8.44406C36.3123 7.20996 35.6018 5.73436 34.8367 4.72776L34.2333 3.93605L34.7562 4.05716C35.0509 4.12506 35.5878 4.29935 35.963 4.43305ZM31.2009 4.91605C32.1669 5.59995 32.9852 6.56595 33.4682 7.58585C33.8035 8.28375 34.1661 9.50456 34.0723 9.61166C34.0051 9.66556 25.7276 10.2158 25.6737 10.1619C25.5533 10.0408 25.9824 8.40416 26.331 7.67966C26.8539 6.57926 28.1153 5.30526 29.2556 4.74176C29.7253 4.50026 30.1677 4.31266 30.2349 4.31266C30.3021 4.31266 30.7445 4.58075 31.2009 4.91605ZM49.2455 10.9802C49.2728 11.0068 49.7285 22.2362 50.2514 35.9072L51.1908 60.781L49.004 63.6384C47.7965 65.2078 46.6961 66.6036 46.5757 66.7373C46.3342 66.9788 46.3342 66.9249 46.3881 65.3954C46.4147 64.5232 46.6163 52.7037 46.8305 39.1265C47.0587 25.5493 47.2736 13.5289 47.3135 12.4152L47.394 10.3894L48.2795 10.6442C48.7758 10.7926 49.2049 10.9403 49.2455 10.9802ZM22.7351 14.4018C22.7757 14.5761 22.9633 16.0923 23.1509 17.7828C23.4729 20.734 23.4862 20.8684 23.258 21.217C21.97 23.1889 16.2685 30.9974 16.1474 30.9435C16.0536 30.9169 14.3764 29.7493 12.4178 28.3675C10.0434 26.6903 8.87582 25.7782 8.90312 25.6438C8.92972 25.5367 10.5397 23.2288 12.4717 20.5191C14.8734 17.1381 16.0669 15.5687 16.2818 15.5148C17.5432 15.1928 22.2654 14.133 22.4397 14.1197C22.5874 14.1064 22.6952 14.2268 22.7351 14.4018Z"
                fill="black"
              />
              <path
                d="M18.5224 16.5479C17.7041 16.9637 17.3149 17.5811 17.3149 18.4533C17.3149 20.8144 20.4943 21.4185 21.4204 19.245C21.6752 18.6416 21.6486 18.1719 21.3266 17.5146C20.803 16.4275 19.5822 16.0117 18.5224 16.5479Z"
                fill="black"
              />
            </svg>
            <h2>КупиЧоХошь</h2>
          </Link>
          <h2>
            <Routes>
              <Route path="/" element={'Main'} />
              <Route path="/about" element={'About'} />
              <Route path="/form" element={'Form'} />
              <Route path="*" element={'NotFound'} />
            </Routes>
          </h2>
          <nav className="nav">
            <ul className="nav__list">
              <li>
                <NavLink to="/">Main</NavLink>
              </li>
              <li>
                <NavLink to="/about">About</NavLink>
              </li>
              <li>
                <NavLink to="/form">Form</NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
