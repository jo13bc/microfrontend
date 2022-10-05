function checkId(item) {
  return item.id == this;
}

function getById(query) {
  let params = query.params;
  if (params) {
    fetch("/template/detail.html")
      .then((response) => response.text())
      .then((template) => {
        let elem = data.find(checkId, params.id);
        let rendered = Mustache.render(template, elem);
        document.getElementById("content").innerHTML = rendered;
      });
  } else {
    fetch("/template/list.html")
      .then((response) => response.text())
      .then((template) => {
        let rendered = Mustache.render(template, data);
        document.getElementById("content").innerHTML = rendered;
      });
  }
}

function init() {
  router = new Navigo("/");
  router.on("/", getById).resolve();
}
