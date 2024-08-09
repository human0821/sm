interface ChangeCaseQuery {
  currentPath?: string;
  whiteListApi?: string[];
  blackListApi?: string[];
  blackListApiRegExp?: RegExp;
  adapter?: (x: any, { deep }: { deep: boolean }) => any;
}
