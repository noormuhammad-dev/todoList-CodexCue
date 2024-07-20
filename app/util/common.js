export const formatDate = (date) => {
  const monthName = date.toLocaleDateString("en-US", { month: "short" });
  return date.getDate() + " " + monthName + " " + date.getFullYear();
};
