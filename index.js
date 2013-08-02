var eejs = require('ep_etherpad-lite/node/eejs/');
var settings = require('ep_etherpad-lite/node/utils/Settings');

if (settings.ep_footer)
{
  var epFooter = settings.ep_footer;

  exports.eejsBlock_scripts = function (hook_name, args, cb)
  {
    args.content = args.content + epFooter;
    return cb();
  }
}

