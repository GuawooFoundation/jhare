

/**
 * Object Scroll
 * @returns
 */
function Scroll(){
	
}


/**
 * Object Component
 * @returns
 */
function Component (){
	
	var type;

}


/**
 * Object Section
 * @returns
 */
function Section() {
	
	var components;
	
	/**
	 * Get Component
	 */
	
	/**
	 * Add Component
	 */
	
	/**
	 * Show Component
	 */
	
	/**
	 * Hide Component
	 */
}


/**
 * Object Page
 * @returns
 */
function Page() {
	
	var header;
	var content;
	var footer;
	
	/**
	 * Get Header
	 */
	
	/**
	 * Add Header
	 */
	
	/**
	 * Show Header
	 */
	
	/**
	 * Hide Header
	 */
	
	/**
	 * Get Content
	 */
	
	/**
	 * Add Content
	 */
	
	/**
	 * Show Content
	 */
	
	/**
	 * Get Footer
	 */
	
	/**
	 * Add Footer
	 */
	
	/**
	 * Show Footer
	 */
	
	/**
	 * Hide Footer
	 */

}


/**
 * Object App
 * @returns
 */
function App() {
	/* Define private variables */
  	var pages = 'private var';
	var navigation;
	var rootPath = '';
	
	/* Store object reference for calling public methods */
  	var self = this;

	function c_App() {
		// Get path to root
		var rootPath = location.href.replace('index.html', '');
		rootPath = rootPath.replace('#', ''); 
	}

	function private_method1() {
		// I can read the public method
		self.showLoading();
	}
	
	/**
	 * Get Page
	 */
	this.getPage = function() {
		
	}
	
	/**
	 * Add Page
	 */
	this.addPage = function() {
		
	}
	
	/**
	 * Get default page
	 * @returns default page id
	 */
	this.getDefaultPage = function() {
	}
	
	/**
	 * Show page
	 * @param page id
	 */
	this.showPage = function(pageid) {
		
	}
	
	/**
	 * Hide current page and remove it from navigation stack
	 */
	this.hidePage = function() {
		
	}
	
	// Launch object constructor
	c_App();
}

// Initialize app
var jhare = new App();