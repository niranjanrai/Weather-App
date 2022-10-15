class InfoView {
  container = document.querySelector(".w_info");

  render(data) {
    this.data = data;
    this.renderHTMLElements();
  }
  renderHTMLElements() {
    const data = this.data;
    const basicInfo = document.createElement("div");
    basicInfo.className = "basic_Info";
    const icon = document.createElement("img");
    icon.src = require(`../icons/${data.weather[0].icon}.png`);
    icon.className = "w_icon";
    basicInfo.append(icon);
    basicInfo.insertAdjacentHTML(
      "afterend",
      `<div>
      <h3>Clear Sky</h3>
      <h4>234 *F</h4>
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
