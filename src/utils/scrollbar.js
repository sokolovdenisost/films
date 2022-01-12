export const toggleScrollbar = (active) => {
  return (document.body.style.overflowY = active ? "hidden" : "auto");
};
