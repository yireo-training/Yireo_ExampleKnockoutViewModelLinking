define(['ko'], function(ko) {
    return function(exampleTarget) {
        return exampleTarget.extend({
            initialize: function() {
                this._super();
                this.targetText = ko.observable(this.targetText);
            }
        });
    }
});
