
export const validate = {
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
};

export const passValidate = {
  upperCase: (val) => {
    const reg = /(?=.*?[A-Z])/;
    return !reg.test(val) 
  },
  lowerCase: (val) => {
    const reg = /(?=.*?[a-z])/;
    return !reg.test(val)
  },
  digit: (val) => {
    const reg = /(?=.*?[0-9])/;
    return !reg.test(val) 
  },
  special: (val) => {
    const reg = /(?=.*?[#?!@$%^&*-])/;
    return !reg.test(val)
  },
  length: (val) => {
    const reg = /.{8,}/;
    return !reg.test(val) 
  },
};
