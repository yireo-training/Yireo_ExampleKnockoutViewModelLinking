define([
    'uiComponent',
    'ko',
    'uiRegistry',
    'Yireo_ExampleKnockoutViewModelLinking/js/example-target'
], function (Component, ko, registry) {

    return Component.extend({
        initialize: function() {
            this._super();
            this.exampleInput = ko.observable('');
            var target = registry.get(this.targetName);
            this.exampleInput.subscribe(function (value) {
                target.targetText(value);
            });
        }
    });
});
