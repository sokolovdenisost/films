export const toggleScrollbar = (active) => {
  console.log("test", active);
  return (document.body.style.overflowY = active ? "hidden" : "auto");
};
