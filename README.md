# Input Count

Count input length and read it out to the UI with optional alert states.

## Install

Using Bower:
````
$ bower install --save plumpjs-input-count
````

## Usage

Using extremely basic HTML:

````
<input class="js-count" type="text">
<span class="js-count-figure"></span>
````
Or, you can use textarea too:
````
<textarea class="js-count"></textarea>
<span class="js-count-figure"></span>
````

Now implement the loop for each `InputCount` call:

````
$$('.js-count').each(function(el) {

	new InputCount();

});
````

This will now look for any markup in the HTML with a `.js-count` selector and initialize `InputCount`.


## Default options

We can pass a number of options in to our plugin:

| Option  			| Type   	| Default Value		| Description		|
|---	    		|---	    |---	 			|---    			|
| maxLength     	| Integer   | 20				| Define the maximum character length.. |
| alertThreshold  	| Integer  	| 5					| At a certain number, add alert states. |
| suffix  			| String  	| 'character remaining'	 | Text to show after the counter. |
| suffixPlural  	| String  	| 'characters remaining' | Pluralised version of the suffix. |
| showSuffix  		| Boolean  	| true				| True of false whether to show the suffix or not. |
| inputAlertSelector  | String  | 'js-count--alert'	| Add class to input when the alertThreshold is met. |
| figureAlertSelector | String  | 'js-count-figure--alert' | Add class to figure when the alertThreshold is met. |

Apply options by passing in a second array of arguments:

````
$$('.js-count').each(function(el) {

	new InputCount(el, {
		maxLength               : 20,
		alertThreshold          : 5,
		suffix 					: 'character remaining',
		suffixPlural		    : 'characters remaining',
		showSuffix              : true,
		inputAlertSelector      : 'js-count--alert',
		figureAlertSelector     : 'js-count-figure--alert'
	});

});
````
