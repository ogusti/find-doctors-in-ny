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
              <input type="checkbox" id="availability" />
              <label htmlFor="availability">
                Today <span className="Availability__amount">(2)</span>
              </label>
            </div>
          </li>
          <li>
            <div className="form-group">
              <input type="checkbox" id="html" />
              <label htmlFor="availability">
                Next 3 days <span className="Availability__amount">(2)</span>
              </label>
            </div>
          </li>
          <li>
            <div className="form-group">
              <input type="checkbox" id="html" />
              <label htmlFor="availability">
                Next 2 weeks <span className="Availability__amount">(3)</span>
              </label>
            </div>
          </li>
        </ul>
        <div className="Availability__divider" />
        <ul>
          <li>
            <div className="form-group">
              <input type="checkbox" id="html" />
              <label htmlFor="availability">
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
              <input type="checkbox" id="html" />
              <label htmlFor="availability">
                Accepts new patients{" "}
                <span className="Availability__amount">(3)</span>
              </label>
            </div>
          </li>
          <li>
            <div className="form-group">
              <input type="checkbox" id="html" />
              <label htmlFor="availability">
                Schedules online{" "}
                <span className="Availability__amount">(3)</span>
              </label>
            </div>
          </li>
          <li>
            <div className="form-group">
              <input type="checkbox" id="html" />
              <label htmlFor="availability">
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
