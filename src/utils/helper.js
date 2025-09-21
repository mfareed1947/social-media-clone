export const calculatePrice = () => {};

export const filterData = (array, condition) => {
  return array.filter((currValue) => {
    return condition <= currValue;
  });
};
