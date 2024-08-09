export const scrollValues = () => {
  if (window.pageYOffset !== undefined) {
    return [window.pageXOffset, window.pageYOffset];
  }
  const doc = document;
  const html = doc.documentElement;
  const { body } = doc;
  return [html.scrollLeft || body.scrollLeft || 0, html.scrollTop || body.scrollTop || 0];
};
