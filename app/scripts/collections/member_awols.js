define([
    "jquery",
    "underscore",
    "backbone",
    "config"
], function ($, _, Backbone, config) {

    return Backbone.Collection.extend({
        initialize: function (models, options) {
            options = options || {};
            this.member_id = options.member_id || false;
            this.days = options.days || false;
        },
        url: function () {
            return config.apiHost + "/members/" + this.member_id + "/awols" + (this.days ? "?days=" + this.days : "");
        },
        parse: function (response, options) {
            return response.awols || [];
        }
    });
});