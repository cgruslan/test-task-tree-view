function className(baseClassName, o = {}) {
  return Object.keys(o).reduce((acc, className) => {
    return o[className] ? [...acc, className] : acc;
  }, [baseClassName]).join(' ');
}

export default className;
