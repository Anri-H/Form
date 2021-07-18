import style from "./input.module.css";
import { validate, passValidate } from "../../helpers/validate";

export default function Input({
  title,
  type,
  name,
  value,
  onChange,
  disabled,
}) {
  return (
    <div className={style.labelGroup}>
      <h4 className={style.title}>{title}</h4>
      <input
        className={style.Input}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
      />

      {value !== "" ? (
        name === "password" ? (
          <>
            {passValidate.upperCase(value)}
            {passValidate.lowerCase(value)}
            {passValidate.digit(value)}
            {passValidate.special(value)}
            {passValidate.length(value)}
          </>
        ) : (
          validate[name](value)
        )
      ) : (
        ""
      )}
    </div>
  );
}
