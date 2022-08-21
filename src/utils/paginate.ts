import _ from 'lodash';

/**
 *
 * @param items the items to paginate
 * @param pageNumber the current page number
 * @param pageSize the number of items per page
 * @returns a paginated items
 */
export default function paginate<T>(
  items: T[],
  pageNumber: number,
  pageSize: number
) {
  const startIndex = (pageNumber - 1) * pageSize;
  return _(items).slice(startIndex).take(pageSize).value();
}
