export const getIdFromUrl = (url: string) => {
  const url_ = new URL(url);
  const pathnameSplitted = url_.pathname.split("/");
  // Handle potential trailing slash
  return pathnameSplitted.pop() || pathnameSplitted.pop()
};
