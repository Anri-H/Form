export const validation = {
  email: (val) => {
    const reg = /^\S+@\S+\.\S+$/;
    return !reg.test(val);
  },
  firstName: (val) => {
    const reg = /[a-zA-Z]{1,}/;
    return !reg.test(val);
  },
  lastName: (val) => {
    const reg = /[a-zA-Z]{1,}/;
    return !reg.test(val);
  },
  password: (val) => {
    const reg =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return !reg.test(val);
  },
};
