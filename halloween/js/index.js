const show = (id) => {
  document.getElementById(id).style.visibility = "visible";
};

const hide = (id) => {
  document.getElementById(id).style.visibility = "hidden";
};

const sound = (id) => {
  document.getElementById(id).play();
};

const silence = (id) => {
  document.getElementById(id).currentTime = 0;
  document.getElementById(id).pause();
};
