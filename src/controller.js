import InfoView from "./views/InfoView";
import SearchView from "./views/searchview";

const handleSearch = (event) => {
  event.preventDefault();
  console.log(" handle search triggered");
};

const init = () => {
  SearchView.addSubmitController(handleSearch);
  // InfoView.renderSpinner();
  InfoView.render(state);
};

init();
