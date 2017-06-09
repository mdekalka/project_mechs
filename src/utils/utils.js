export const isEmptyPrimitive = (primitive) => {
  primitive = primitive.toString().trim();
  return !primitive.trim || primitive.length === 0
};