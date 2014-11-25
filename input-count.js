// *
// *  PlumpJS: InputCount
// *  Count/limit the length of any input passed.
// *  You should always validate values server-side as the DOM can easily
// *  be manipulated. This is purely used to impose a UI feature by
// *  displaying a figure to the user.
// *
'use strict';

var InputCount = new Class({

	Implements: Options,

	options: {
		maxLength               : 20,
		alertThreshold          : 5,
		suffix 					: 'character remaining',
		suffixPlural		    : 'characters remaining',
		showSuffix              : true,
		inputAlertSelector      : 'js-count--alert',
		figureAlertSelector     : 'js-count-figure--alert'
	},

	initialize: function(el, options) {
		this.el = $(el);
		this.figure = this.el.getNext('.js-count-figure');

		this.setOptions(options);

		// Take advantage of the maxlength attribute.
		this.el.setProperty('maxLength', this.options.maxLength);

		// Set the suffix.
		if (this.options.showSuffix) {
			this.figure.set('html', this.options.maxLength + ' ' + this.options.suffixPlural);
		} else {
			this.figure.set('html', this.options.maxLength);
		}

		// Bind key event listener to input.
		this.el.addEvent('keyup', this.checkLength.bind(this));
	},

	checkLength: function() {
		// Get current length of string and deduct maxLength by the length
		// of the string giving us the remainder of characters leftover.
		var inputLength = this.el.value.length,
			remainingCharacterLength = this.options.maxLength - inputLength;

		if (this.options.showSuffix) {
			// We need to pluralize our suffix when hit that singleton number 1.
			if (remainingCharacterLength == 1) {
				this.setSuffix(remainingCharacterLength, this.options.suffix);
			} else {
				this.setSuffix(remainingCharacterLength, this.options.suffixPlural);
			}
		} else {
			this.figure.set('html', remainingCharacterLength);
		}

		// Add alert states using class selectors by checking whether the
		// alertThreshold has been met based on the remainingCharacterLength.
		if (remainingCharacterLength <= this.options.alertThreshold) {
			this.el.addClass(this.options.inputAlertSelector);
			this.figure.addClass(this.options.figureAlertSelector);
		} else {
			this.el.removeClass(this.options.inputAlertSelector);
			this.figure.removeClass(this.options.figureAlertSelector);
		}
	},

	setSuffix: function(leng, opts) {
		return this.figure.set('html', leng + ' ' + opts);
	}
});


