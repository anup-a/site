const loaderWrapper = document.getElementById("wrapper");

window.onreadystatechange = () => {
  //@ts-ignore
  console.log("Time until DOMready: ", Date.now() - timerStart);
};

const hideLoader = () => {
  loaderWrapper?.classList.remove("show");
  loaderWrapper?.classList.add("hide");
};

window.onload = () => {
  //@ts-ignore
  let loadTime = Date.now() - timerStart;
  if (loadTime <= 2000) {
    const remaining = 2000 - loadTime;
    setInterval(() => {
      hideLoader();
    }, remaining);
  } else {
    hideLoader();
  }
};
