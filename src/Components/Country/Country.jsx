import { countries } from "./country.data";
import style from "./country.module.css";

export default function Country({ value, onChange }) {
  return (
    <label className={style.labelGroup}>
      <h4 className={style.title}>Country</h4>
      <select
        name="country"
        className={style.region}
        value={value}
        onChange={onChange}
      >
        {countries.map((el) => (
          <option className={style.option} value={el}>
            {el}
          </option>
        ))}
      </select>
    </label>
  );
}
