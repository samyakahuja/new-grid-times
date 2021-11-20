export const createBorder = ({ position, borderWidth = 1, spacing = 16 }) => `
  border-${position}: ${borderWidth}px solid var(--color-gray-300);
  padding-${position}: ${spacing}px;
  margin-${position}: ${spacing}px;
`;
