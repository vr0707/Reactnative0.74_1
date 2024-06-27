import store from '../store';
import { isValidImageURL } from './utils';

export const SanitizeCity = (payload: any) => {
  let cities = [];
  try {
    for (let item of payload) {
      cities.push({
        name: item,
      });
    }
    return cities;
  } catch (err) {
    console.log('>>SanitizeCity>>>------', err);
    return cities;
  }
};
export const sanitizeDropDowData = (payload: any) => {
  let product = [];
  try {
    // product.push({ label: "others", value: 0 })
    for (let item of payload) {
      product.push({
        label: item.name,
        value: item?.id,
        ...item,
      });
    }
    return product;
  } catch (err) {
    console.log('>>sanitizeTurnOver>>>------', err);
    return product;
  }
};