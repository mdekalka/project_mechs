import { sortBy } from 'lodash';

export const filterBy = (list, prop, query) => {
  if (!list.length || !prop) {
    return list;
  }

  return list.filter(listItem => listItem[prop].toLowerCase().includes(query.toLowerCase()));
}