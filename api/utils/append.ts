export const append = (component, destPoint) => {
  component.append(destPoint);
};

export const prepend = (component, destPoint) => {
  component.prepend(destPoint);
};

export const appendMany = (component, destPoints) => {
  component.append(...destPoints);
};
