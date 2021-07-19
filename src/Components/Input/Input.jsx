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
            {passValidate.upperCase(value) ? (
              <p className={style.inValid}>At least one upper case</p>
            ) : (
              ""
            )}
            {passValidate.lowerCase(value) ? (
              <p className={style.inValid}>At least one lower case</p>
            ) : (
              ""
            )}
            {passValidate.digit(value) ? (
              <p className={style.inValid}>At least one digit</p>
            ) : (
              ""
            )}
            {passValidate.special(value) ? (
              <p className={style.inValid}>At least one special character</p>
            ) : (
              ""
            )}
            {passValidate.length(value) ? (
              <p className={style.inValid}>Minimum eight in length</p>
            ) : (
              ""
            )}
          </>
        ) : validate[name](value) ? (
          <p className={style.inValid}>Invalid {title}</p>
        ) : (
          ""
        )
      ) : (
        ""
      )}
    </div>
  );
}
