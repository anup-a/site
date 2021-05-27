const main = document.getElementById("main-container");
const loaderWrapper = document.getElementById("wrapper");
const svglogo = document.getElementById("svglogo");
const navLogo = document.getElementById("nav-logo");
const content = document.getElementById("content");
const illustration = document.getElementById("illustration");
const about = document.getElementById("about-container");
const navBar = document.getElementById("navbar");

const navRect = navLogo?.getBoundingClientRect();
const loaderRect = svglogo?.getBoundingClientRect();

const adjustHeight = (navRect?.top || 0) - (loaderRect?.top || 0);
const adjustWidth = (navRect?.left || 0) - (loaderRect?.left || 0);

const toggleElement = (
  element: HTMLElement | null,
  status: "show" | "hide"
) => {
  if (status === "show") {
    element?.classList.add("show");
    element?.classList.remove("hide");
  } else {
    element?.classList.add("hide");
    element?.classList.remove("show");
  }
};

window.onreadystatechange = () => {
  //@ts-ignore
  console.log("Time until DOMready: ", Date.now() - timerStart);
};

const hideLoader = () => {
  if (svglogo) {
    // svglogo.classList.add("translate-to-origin");
    svglogo.style.transform = `translateX(${adjustWidth}px) translateY(${adjustHeight}px) scale(0.5)`;
  }
  setInterval(() => {
    toggleElement(loaderWrapper, "hide");
    toggleElement(content, "show");
    toggleElement(illustration, "show");
    toggleElement(about, "show");
    toggleElement(navBar, "show");
    // main?.classList.remove("over-y-hidden");
  }, 600);
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
