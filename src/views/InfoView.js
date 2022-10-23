import { images } from "../icons/*.png";
// import { images } from "../icons/* .png";

class InfoView {
  container = document.querySelector(".w_info");

  render(data) {
    this.data = data;
    this.renderHTMLElements();
  }

  renderHTMLElements() {
    const data = this.data;
    console.log(images);
    const basicInfo = document.createElement("div");
    this.container.appendChild(basicInfo);
    basicInfo.className = "basic_info";
    const icon = document.createElement("img");
    icon.src = images[data.weather[0].icon];
    icon.className = "w_icon";
    basicInfo.append(icon);
    basicInfo.insertAdjacentHTML(
      "beforeend",
      `
      <div>
        <h3>${data.weather[0].description}</h3>
        <h4> ${data.main.temp} </h4>
      </div>
      `
    );
  }

  renderSpinner() {
    this.container.innerHTML = `
    <div class="spinner-border text-primary" role="status">
    <span class="visually-hidden">Loading...</span>
    </div>
    `;
  }
}

export default new InfoView();
