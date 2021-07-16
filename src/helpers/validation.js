export const validation = {
  email: (val) => {
    const reg = /^\S+@\S+\.\S+$/;
    return !reg.test(val);
  },
  firstName: (val) => {
    const reg = /^[a-z ,.'-]+$/;
    return !reg.test(val);
  },
  lastName: (val) => {
    const reg = /^[a-z ,.'-]+$/;
    return !reg.test(val);
  },
};

