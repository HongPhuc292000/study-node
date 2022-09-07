class NewsController {
  index(req, res) {
    res.render("news");
  }

  show(req, res) {
    res.render("test");
  }
}

module.exports = new NewsController();
