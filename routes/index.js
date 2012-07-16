
/*
 * GET home page.
 */

module.exports = function(config) {
  var ns = {};

  ns.index = function(req, res){
    var args = {
      config : config
    }
    console.log(res);
    res.render('index', args);
  }

  ns.serverinfo = function(req, res){
    var info = {
      websocket : config.websocket
    };

    res.header('Content-Type', 'application/json');
    res.send(JSON.stringify(info));
  }

  return ns;
}

