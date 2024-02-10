import UrlParser from '../routes/url-parser';
import routes from '../routes/index';

class App {
  constructor({ content }) {
    this._content = content;
    this.start = true;
  }

  async renderPage() {
    const url = UrlParser.parseActiveUrlWithCombiner();
    if (this.start || url !== '/') {
      const page = routes[url];
      this.start = false;
      this._content.innerHTML = await page.render();
      await page.afterRender();
    }
  }
}
export default App;
