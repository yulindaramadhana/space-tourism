const BodyContentNavigator = {
  goToNext: ({ dataLength, currentIndex }) => {
    const newIndex = currentIndex === dataLength - 1 ? 0 : currentIndex + 1;
    return newIndex;
  },
  goToPrev: ({ dataLength, currentIndex }) => {
    const newIndex = currentIndex === 0 ? dataLength - 1 : currentIndex - 1;
    return newIndex;
  },
};

export default BodyContentNavigator;
