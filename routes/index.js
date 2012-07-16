
/*
 * GET home page.
 */

module.exports = function(config) {
  var ns = {};

  ns.index = function(req, res){
    var args = {
      config : config
    }
    res.render('index', args);
  }

  return ns;
}

