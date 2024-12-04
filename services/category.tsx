import { data } from '../data';

export const getCategories = () => {
  return data.categories;
}

export const getCategoryById = (id: number) => {
  return data.categories.find(item => item.id === id);
}


