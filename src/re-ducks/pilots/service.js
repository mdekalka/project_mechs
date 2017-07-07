import { isEmpty } from 'lodash';

export const filterBy = (list, prop, query) => {
  if (isEmpty(list) || !prop) {
    return [];
  }

  return Object.keys(list).filter((listItem) => {
    const seachField = list[listItem][prop].toLowerCase();
    return seachField.includes(query.toLowerCase())
  });
};

export const sliceBy = (list, start = 0, end) => {
  if (!list.length) {
    return [];
  }

  return list.slice(start, end);
};

export const getPageCount = (listLength, itemsCount) => Math.ceil(listLength / itemsCount);
