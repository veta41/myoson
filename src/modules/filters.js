export const searchFilter = (goods, value) => {
  return goods.filter((goodsItem) => {
    return goodsItem.title.toLowerCase().includes(value.toLowerCase())
  })

}

export const categoryFilter = (goods, value) => {
  return goods.filter((goodsItem) => {
    return goodsItem.category === value
  })

}

// min price search

export const minSizeFilter = (goods, minValue) => {

  return goods.filter((goodsItem) => {
    return goodsItem.price >= minValue;
  });
};

//  max price search

export const maxSizeFilter = (goods, maxValue) => {

  return goods.filter((goodsItem) => {
    return goodsItem.price <= maxValue;
  });
};