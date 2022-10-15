class SearchView {
  container = document.querySelector(".search_form");

  addSubmitController(controller) {
    if (typeof controller !== "function")
      throw new TypeError("controller must be function");
    this.container.addEventListener("submit", controller.bind(this));
  }
}

export default new SearchView();
