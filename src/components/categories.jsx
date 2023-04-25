import { NavLink } from "react-router-dom";
import {
  backIcon,
  eduIcon,
  recIcon,
  socIcon,
  diyIcon,
  charityIcon,
  cookIcon,
  relIcon,
  musIcon,
  busyIcon,
} from "../assets/index";

function Categories() {
  return (
    <div id="categories">
      <header id="categoryHeader">
        <div id="topRow">
          <button
            type="submit"
            className="back"
            style={{
              backgroundColor: "transparent",
              borderColor: "transparent",
            }}
          >
            <NavLink to="/activity-generator/">
              <img src={backIcon} alt="back button" />
            </NavLink>
          </button>
          <h2 id="AC">Activity Categories</h2>
        </div>
        <div id="icons">
          <img src={eduIcon} alt="books" />
          <img src={recIcon} alt="play" />
          <img src={socIcon} alt="people" />
          <img src={diyIcon} alt="tools" />
          <img src={charityIcon} alt="cash" />
          <img src={cookIcon} alt="utensils" />
          <img src={relIcon} alt="home" />
          <img src={musIcon} alt="headphones" />
          <img src={busyIcon} alt="clock" />
        </div>
        <h3>Let's find an activity for you.</h3>
        <h4>Choose a category you want to explore.</h4>
      </header>
      <div id="button-container">
      <div id="categoryBtnsS1">
          <NavLink to="/activity-generator/categories/educational"> <button>Educational</button></NavLink>
          <NavLink to="/activity-generator/categories/recreational"> <button>Recreational</button> </NavLink>
          <NavLink to="/activity-generator/categories/social"> <button>Social</button> </NavLink>
          <NavLink to="/activity-generator/categories/diy"> <button>DIY</button> </NavLink>
          <NavLink to="/activity-generator/categories/charity"> <button>Charitable</button> </NavLink>
      </div>
      <div id="categoryBtnsS2">
          <NavLink to="/activity-generator/categories/cooking"> <button>Cooking</button> </NavLink>
          <NavLink to="/activity-generator/categories/relaxation"> <button>Relaxation</button> </NavLink>
          <NavLink to="/activity-generator/categories/music"> <button>Musical</button> </NavLink>
          <NavLink to="/activity-generator/categories/busywork"> <button>Busywork</button> </NavLink>
      </div>
      </div>
    </div>
  );
}

export default Categories;
