/* Example HTML, CSS & JavaScript Website */

/* Setup */

var ExampleWebsite = ExampleWebsite || {};

/* Callbacks */

ExampleWebsite.load = function ExampleWebsiteLoad(event){

	/* Remove listener as it's no longer needed */
    window.removeEventListener("load", ExampleWebsiteLoad, false);

	/* Add HTML */

	/* Add controls HTML */
	ExampleWebsite.title = document.getElementById('title');
	ExampleWebsite.title.insertAdjacentHTML( 'afterend', "<span class='font_size'><span class='smaller_font'>A</span><span class='larger_font'>A</span></span>");

	/* Add after-load event listeners */

	/* Add event listeners for the button that makes text bigger */
	ExampleWebsite.biggerBtn = document.getElementsByClassName('larger_font')[ 0 ];
	ExampleWebsite.biggerBtn.addEventListener('click', ExampleWebsite.biggerCallback );

	/* Add event listeners for the button that makes text smaller */
	ExampleWebsite.smallerBtn = document.getElementsByClassName('smaller_font')[ 0 ];
	ExampleWebsite.smallerBtn.addEventListener('click', ExampleWebsite.smallerCallback );

};

/* Callbacks */

ExampleWebsite.description = document.getElementById('description');
ExampleWebsite.biggerCallback = function(e) {
	ExampleWebsite.incrementSize();
};

ExampleWebsite.smallerCallback = function(e) {
	ExampleWebsite.decrementSize();
};

ExampleWebsite.incrementSize = function() {
	ExampleWebsite.changeSize('fontSize', 2, 16);
	ExampleWebsite.changeSize('lineHeight', 4, 24);
};

ExampleWebsite.decrementSize = function() {
	ExampleWebsite.changeSize('fontSize', -2, 12);
	ExampleWebsite.changeSize('lineHeight', -4, 16);
};

ExampleWebsite.changeSize = function(id, diff, default_size) {
	var style = ExampleWebsite.description.style
	, attr = style[ id ];
	style[ id ] = (!isNaN(parseInt(attr.replace(/px$/, ''), 10))) ? (parseInt(attr.replace(/px$/, ''), 10) + diff ).toString() + 'px' : default_size.toString() + 'px';
};

/* Add before-load event listeners  */

window.addEventListener('load', ExampleWebsite.load, false);
