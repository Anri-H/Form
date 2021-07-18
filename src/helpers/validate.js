import style from "./invalidInput.module.css";

export const validate = {
  email: (val) => {
    const reg = /^\S+@\S+\.\S+$/;
    return !reg.test(val) ? (
      <p className={style.inValid}>Invalid Email address</p>
    ) : (
      ""
    );
  },
  firstName: (val) => {
    const reg = /[a-zA-Z]{1,}/;
    return !reg.test(val) ? (
      <p className={style.inValid}>Invalid First name</p>
    ) : (
      ""
    );
  },
  lastName: (val) => {
    const reg = /[a-zA-Z]{1,}/;
    return !reg.test(val) ? (
      <p className={style.inValid}>Invalid Last name</p>
    ) : (
      ""
    );
  },
};

export const passValidate = {
  upperCase: (val) => {
    const reg = /(?=.*?[A-Z])/;
    return !reg.test(val) ? (
      <p className={style.inValid}>At least one upper case</p>
    ) : (
      ""
    );
  },
  lowerCase: (val) => {
    const reg = /(?=.*?[a-z])/;
    return !reg.test(val) ? (
      <p className={style.inValid}>At least one lower case</p>
    ) : (
      ""
    );
  },
  digit: (val) => {
    const reg = /(?=.*?[0-9])/;
    return !reg.test(val) ? (
      <p className={style.inValid}>At least one digit</p>
    ) : (
      ""
    );
  },
  special: (val) => {
    const reg = /(?=.*?[#?!@$%^&*-])/;
    return !reg.test(val) ? (
      <p className={style.inValid}>At least one special character</p>
    ) : (
      ""
    );
  },
  length: (val) => {
    const reg = /.{8,}/;
    return !reg.test(val) ? (
      <p className={style.inValid}>Minimum eight in length</p>
    ) : (
      ""
    );
  },
};
