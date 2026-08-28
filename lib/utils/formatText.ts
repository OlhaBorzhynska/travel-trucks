export const formatText = (value: string) => {
  return value
    .replaceAll("_", " ")
    .replace(/\bac\b/gi, "AC")
    .replace(/\b\w/g, (char) => char.toUpperCase());
};

export const formatValue = (value: string) => {
  return value
    .replace(/(\d)([a-zA-Z])/g, "$1 $2")
    .replace(/\//g, " / ")
    .replace(/\s+/g, " ")
    .trim();
};
