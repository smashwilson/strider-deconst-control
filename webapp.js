var toolbelt = require('./lib/toolbelt');

module.exports = {
  config: {
    contentServiceURL: {
      type: String
    },
    contentServiceAdminAPIKey: {
      type: String
    },
    contentServiceTLSVerify: {
      type: Boolean,
      default: true
    },
    slackWebhookURL: {
      type: String
    },
    slackChannel: {
      type: String
    },
    verbose: {
      type: Boolean,
      default: false
    }
  },

  routes: function (app, context) {
    // We don't actually register any routes, but we *do* take the opportunity to yoink references
    // to internal Strider things.
    toolbelt.rememberExtensions(context);
  }
};
