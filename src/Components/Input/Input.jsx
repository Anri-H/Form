import style from "./input.module.css";

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

      {value!=="" && disabled ? (
        name === "password" ? (
          <>
            <p className={style.inValid}>Minimum eight characters</p>
            <p className={style.inValid}>At least one uppercase letter</p> 
            <p className={style.inValid}>One lowercase letter</p>
            <p className={style.inValid}>One number</p> 
            <p className={style.inValid}>One special character</p>
            </>
        ) : (
          <p className={style.inValid}>Your input invalid</p>
        )
      ) : (
        ""
      )}
    </div>
  );
}
