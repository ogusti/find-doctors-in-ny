import AvailabilityDropdown from "./components/AvailabilityDropdown";
import SpecialityDropdown from "./components/SpecialityDropdown";
import InsuranceDropdown from "./components/InsuranceDropdown";
import SortDropdown from "./components/SortDropdown";
import Cards from "./components/Cards";
import info from "./icons/info.svg";
import "./App.css";

const App = () => (
  <div className="App">
    <header>
      <div className="App__divider" />
      <menu className="App__menu">
        <AvailabilityDropdown />
        <SpecialityDropdown />
        <InsuranceDropdown />
        <SortDropdown />
        <li className="App__menu-unit">
          <button className="App__clear">Clear filters</button>
        </li>
      </menu>
      <h2 className="App__headline">Root Canal doctors in New York, NY</h2>
      <div className="App__subheadline">
        <picture>
          <img src={info} alt="additional info" className="App__icon" />
        </picture>
        <p className="App__subheadline-text">
          The average price of a procedure in New York is $300
        </p>
      </div>
    </header>
    <Cards />
  </div>
);

export default App;
