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
            id="home"
            style={{
              backgroundColor: "transparent",
              borderColor: "transparent",
            }}
          >
            <NavLink to="/">
              <img src={backIcon} alt="back button" />
            </NavLink>
          </button>
          <h2 id="AC">Activity Categories</h2>
        </div>
        <div id="icons">
          <img src={eduIcon} alt="books" />
          <img src={recIcon} alt="bicycle" />
          <img src={socIcon} alt="people" />
          <img src={diyIcon} alt="tools" />
          <img src={charityIcon} alt="cash" />
          <img src={cookIcon} alt="utensils" />
          <img src={relIcon} alt="battery" />
          <img src={musIcon} alt="headphones" />
          <img src={busyIcon} alt="clock" />
        </div>
        <h3>Let's find an activity for you.</h3>
        <h4>Choose a category you want to explore.</h4>
      </header>
      <div id="categoryBtnsS1">
          <NavLink to="/educational"> <button>Educational</button></NavLink>
          <NavLink to="/recreational"> <button>Recreational</button> </NavLink>
          <NavLink to="/social"> <button>Social</button> </NavLink>
          <NavLink to="/diy"> <button>DIY</button> </NavLink>
          <NavLink to="/charity"> <button>Charitable</button> </NavLink>
      </div>
      <div id="categoryBtnsS2">
          <NavLink to="/cooking"> <button>Cooking</button> </NavLink>
          <NavLink to="/relaxation"> <button>Relaxation</button> </NavLink>
          <NavLink to="/music"> <button>Musical</button> </NavLink>
          <NavLink to="/busywork"> <button>Busywork</button> </NavLink>
      </div>
    </div>
  );
}

export default Categories;
