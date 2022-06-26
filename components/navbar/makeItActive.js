export function makeItActive(element) {
  if (element.nodeName === "P") {
    let lis = element.parentNode.parentNode.children;
    for (let i = 0; i < lis.length; i++) {
      lis[i].children[0].classList.remove("navigationActive");
    }
    element.classList.add("navigationActive");
  }
}

export function reset(ulElement) {
  for (let i = 0; i < ulElement.children.length; i++) {
    ulElement.children[i].children[0].classList.remove("navigationActive");
  }
}
