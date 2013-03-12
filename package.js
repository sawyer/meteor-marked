// Source: https://github.com/chjj/marked

Package.describe({
  summary: "A markdown parser and compiler. Built for speed."
});

Package.on_use(function (api, where) {
  where = where || ["client", "server"];
  where = where instanceof Array ? where : [where];

  api.add_files("marked/lib/marked.js", where);

  for(var i = 0; i < where.length; i++) {                                       
    if(where[i] === "client") {
        api.use("handlebars", "client");
        api.add_files("template-integration.js", "client");
    }
  }
});
