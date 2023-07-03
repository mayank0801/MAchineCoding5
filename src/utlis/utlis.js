export const filterData = (searchValue, filterBasis, data) => {
  console.log(filterBasis);

  if (searchValue === "") return data;
  else if (filterBasis === "name") {
    return data.filter(({ name }) =>
      name.toLowerCase().includes(searchValue.trim().toLowerCase())
    );
  } else if (filterBasis === "cuisine") {
    return data.filter(({ cuisine }) =>
      cuisine.toLowerCase().includes(searchValue.trim().toLowerCase())
    );
  } else {
    return data.filter((recipe) => {
      let isFind = recipe[filterBasis]?.find((el) =>
        el.toLowerCase().includes(searchValue.trim().toLowerCase())
      );

      return isFind;
    });
  }
};
