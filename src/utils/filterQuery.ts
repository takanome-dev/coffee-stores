/**
 *
 * @param query search query to filter
 * @returns string where space is replaced by %20 and comma by %2C
 */
export default function filterQuery(query: string) {
  return query.replaceAll(/\s/g, '%20').replaceAll(/,/g, '%2C');
}
