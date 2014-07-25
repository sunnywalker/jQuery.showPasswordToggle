/*!
 *  jQuery.showPasswordToggle
 *  @version 1.0.0
 *  @author Sunny Walker, University of Hawaiʻi at Hilo, http://hilo.hawaii.edu/
 *  @license MIT
 *  Project: https://github.com/sunnywalker/jQuery.showPasswordToggle
 *
 *  jQuery plugin for adding a show/hide checkbox toggle to display/hide password fields.
 *
 *  Copyright 2014
 */
(function($) {
    'use strict';
    $.fn.showPasswordToggle = function(options) {
        var defaults = {
                checkboxClass: 'toggle-password-checkbox',
                label:         'Show password',
                labelClass:    'toggle-password-label',
                wrapperClass:  'toggle-password-wrapper',
                wrapperTag:    false
            },
            settings = $.extend({}, defaults, options);
        return this.each(function() {
            var input = $(this),
                label = $('<label class="'+settings.labelClass+'">'+settings.label+'</label>'),
                checkbox = $('<input type="checkbox" class="" />'),
                wrapper = false;
            // don't do anything for non-input elements
            if (input.get(0).nodeName !== 'INPUT') {
                return;
            }
            // don't add the functionality more than once
            if (input.data('has-show-password')) {
                return;
            }
            // append the checkbox to the label
            checkbox.prependTo(label);
            // add the wrapper if wanted
            if (settings.wrapperTag) {
                wrapper = $('<'+settings.wrapperTag+' class="'+settings.wrapperClass+'" />');
                label.prependTo(wrapper);
                input.after(wrapper);
            } else {
                input.after(label);
            }
            // tag it so we don't add the functionality again
            input.data('has-show-password', true);
            // if it's being added to a text input, check the checkbox
            if (!input.attr('type') || input.attr('type').toLowerCase() === 'text') {
                checkbox.prop('checked', true);
            }
            // add the change behavior to the checkbox
            checkbox.on('change', function() {
                var cb = $(this),
                    new_input = $('<input type="'+(cb.is(':checked') ? 'text' : 'password')+'" />');
                // copy all of the source input's attributes to the new input
                for (var i = 0, attrs = input.get(0).attributes, l = attrs.length; i < l; i++) {
                    if (attrs.item(i).name.toLowerCase() !== 'type') {
                        new_input.attr(attrs.item(i).name, attrs.item(i).value);
                    }
                }
                new_input.val(input.val());
                // tag it with the functionality
                new_input.data('has-show-password', true);
                // swap out the old for the new
                input.before(new_input).remove();
                // keep track of the new input
                input = new_input;
            });
        });
    };
})(jQuery);
