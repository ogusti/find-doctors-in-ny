import Switch from "../Switch";
import doctors from "../../doctors.json";
import search from "../../icons/search.svg";
import amountOfElements from "../../helpers/amountOfElements";
import "./InsuranceDropdown.css";

const {
  data: { items },
} = doctors;

const insurances = items.map((item) => item.insurances);
const uniqueInsurances = Array.from(new Set(insurances));

const InsuranceDropdown = () => (
  <li className="App__menu-unit">
    <details>
      <summary className="App__dropdown">Insurance</summary>
      <div className="Insurance__dropdown-content">
        <div className="Insurance__switch-container">
          <p className="Insurance__switch-text">
            Provides other than insurance payment options
          </p>
          <Switch />
        </div>
        <div className="Insurance__filter-by-container">
          <div className="Insurance__divider" />
          <input
            className="Insurance__input-filter-by"
            placeholder="Filter by insurance carrier"
          />
          <img alt="search" className="Insurance__icon" src={search} />
        </div>
        <ul className="App__dropdown-content--list">
          {uniqueInsurances.map((insurance) => (
            <li key={insurance}>
              <div className="form-group">
                <input type="checkbox" id="insurance" />
                <label htmlFor="insurance">
                  {insurance}{" "}
                  <span className="Availability__amount">
                    ({amountOfElements(insurance, insurances)})
                  </span>
                </label>
              </div>
            </li>
          ))}
        </ul>
        <div className="App__dropdown-content-divider" />
        <div className="App__dropdown-buttons">
          <button className="Insurance__clear">Reset</button>
          <button className="Insurance__apply">Apply</button>
        </div>
      </div>
    </details>
  </li>
);

export default InsuranceDropdown;
