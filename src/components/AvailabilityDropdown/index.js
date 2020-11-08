import videovisit from "../../icons/videovisit.svg";
import "./AvailabilityDropdown.css";
const AvailabilityDropdown = () => (
  <li className="App__menu-unit">
    <details>
      <summary className="App__dropdown">Availability</summary>
      <div className="Availability__dropdown-content">
        <p className="Availability__headline">Availability</p>
        <ul className="Availability__container">
          <li>
            <div className="form-group">
              <input type="checkbox" id="availability-1" />
              <label htmlFor="availability-1">
                Today <span className="Availability__amount">(2)</span>
              </label>
            </div>
          </li>
          <li>
            <div className="form-group">
              <input type="checkbox" id="availability-2" />
              <label htmlFor="availability-2">
                Next 3 days <span className="Availability__amount">(2)</span>
              </label>
            </div>
          </li>
          <li>
            <div className="form-group">
              <input type="checkbox" id="availability-3" />
              <label htmlFor="availability-3">
                Next 2 weeks <span className="Availability__amount">(3)</span>
              </label>
            </div>
          </li>
        </ul>
        <div className="Availability__divider" />
        <ul>
          <li>
            <div className="form-group">
              <input type="checkbox" id="availability-4" />
              <label htmlFor="availability-4">
                <picture className="Availability__telehealth">
                  <img
                    src={videovisit}
                    alt="telehealth"
                    className="App__icon"
                  />
                </picture>
                Telehealth <span className="Availability__amount">(#X)</span>
              </label>
            </div>
          </li>
          <li>
            <div className="form-group">
              <input type="checkbox" id="availability-5" />
              <label htmlFor="availability-5">
                Accepts new patients{" "}
                <span className="Availability__amount">(3)</span>
              </label>
            </div>
          </li>
          <li>
            <div className="form-group">
              <input type="checkbox" id="availability-6" />
              <label htmlFor="availability-6">
                Schedules online{" "}
                <span className="Availability__amount">(3)</span>
              </label>
            </div>
          </li>
          <li>
            <div className="form-group">
              <input type="checkbox" id="availability-7" />
              <label htmlFor="availability-7">
                Treats сhildren{" "}
                <span className="Availability__amount">(3)</span>
              </label>
            </div>
          </li>
        </ul>
      </div>
    </details>
  </li>
);

export default AvailabilityDropdown;
