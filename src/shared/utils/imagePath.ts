// http://a.com/image.png => ["http://a.com/image", "png"]
export const imagePath = (path: string) => {
  const splitted = path.split(".");
  const extension = splitted.at(-1);
  const pathWithoutExt = splitted.slice(0, -1).join(".");
  return [pathWithoutExt, extension] as [string, string];
};
