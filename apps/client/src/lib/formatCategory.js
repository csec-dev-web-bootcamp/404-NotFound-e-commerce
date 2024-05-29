export const CATEGORIES = [
  "Fashion",
  "Electronics",
  "Books & Media Hub",
  "Home",
  "Outdoor",
  "Beauty",
];
export function formatCategory(category) {
  return category?.toLowerCase().replace(/ & /g, "-").replace(/\s+/g, "-");
}
