/** Функция для поиска идентификатора в графе. Возвращает искомый элемент.
 *  Если идентификатор не найден, возвращает undefined. */
export function findGraphNodeById<T extends { id: string | number }, G extends T>(
  id: string | number,
  graph: T[] = [],
  childrenKey: keyof T = "children" as keyof T,
): G | undefined {
  //recursive search
  function search(node: T): G | undefined {
    if (node.id === id) return node as G;
    if (node[childrenKey]) {
      const children = node[childrenKey] as T[];
      for (let i = 0; i < children.length; i++) {
        const result = search(children[i]);
        if (result) return result;
      }
    }
    return undefined;
  }
  for (let i = 0; i < graph.length; i++) {
    const result = search(graph[i]);
    if (result) return result;
  }
  return undefined;
}
