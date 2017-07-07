export const filterBy = (list, prop, query) => {
  if (!list.length || !prop) {
    return list;
  }

  return list.filter(listItem => listItem[prop].toLowerCase().includes(query.toLowerCase()));
};

export const sliceBy = (list, start = 0, end) => {
  if (!list.length) {
    return list;
  }

  return list.slice(start, end);
};

export const getPageCount = (listLength, itemsCount) => Math.ceil(listLength / itemsCount);
