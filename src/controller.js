import SearchView from "./views/searchview";

const handleSearch = (event) => {
  event.preventDefault();
  console.log(" handle search triggered");
};

const init = () => {
  SearchView.addSubmitController(handleSearch);
};

init();
