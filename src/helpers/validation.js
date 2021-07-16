export const validation = {
  email: (val) => {
    const reg = /^\S+@\S+\.\S+$/;
    return !reg.test(val);
  },
  
};

