import style from "./input.module.css";

export default function Input({title, type, name, onChange, disabled  }) {
  return (
    <div className={style.labelGroup}>
      <h4 className={style.title}>{title}</h4>
      <input
        className={style.Input}
        type={type}
        name={name}
        onChange={onChange}
      />
      {disabled ? (
        <p className={style.inValid}>Please enter some value</p>
      ) : (
        ""
      )}
    </div>
  );
}
