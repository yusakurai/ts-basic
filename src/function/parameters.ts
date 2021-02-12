// レストパラメーターを持つ関数の例
export const sumProductsPrice = (...productsPrice: number[]): number => {
  return productsPrice.reduce((prevTotal, productPrice) => {
    return prevTotal + productPrice;
  }, 0);
};
