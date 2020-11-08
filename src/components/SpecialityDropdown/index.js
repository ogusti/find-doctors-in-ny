import doctors from "../../doctors.json";
import amountOfElements from "../../helpers/amountOfElements";
import "./SpecialityDropdown.css";

const {
  data: { items },
} = doctors;

const specialities = items.map((doctor) => doctor.speciality);
const uniqueSpecialities = Array.from(new Set(specialities));

const SpecialityDropdown = () => (
  <li className="App__menu-unit">
    <details>
      <summary className="App__dropdown">Speciality</summary>
      <div className="App__dropdown-content">
        <div className="Speciality__input-container">
          <input
            className="Speciality__input-filter-by"
            placeholder="Filter by speciality"
          />
        </div>
        <ul className="App__dropdown-content--list">
          {uniqueSpecialities.map((speciality) => (
            <li key={speciality}>
              <div className="form-group">
                <input type="checkbox" id="speciality" />
                <label htmlFor="speciality">
                  {speciality}
                  <span className="Availability__amount">
                    ({amountOfElements(speciality, specialities)})
                  </span>
                </label>
              </div>
            </li>
          ))}
        </ul>
        <div className="App__dropdown-content-divider" />
        <div className="App__dropdown-buttons">
          <button className="Speciality__clear">Reset</button>
          <button className="App__apply">Apply</button>
        </div>
      </div>
    </details>
  </li>
);
export default SpecialityDropdown;
