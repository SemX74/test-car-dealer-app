export const generateYears = (startYear: number) => {
  const currentYear = new Date().getFullYear();
  return Array.from(
    { length: currentYear - startYear + 1 },
    (_, index) => startYear + index
  );
};
