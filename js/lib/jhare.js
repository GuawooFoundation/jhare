

/**
 * Define scroll object
 */
function Scroll() {
	/* Define private variables */
	var type;
	var id;
	var value;

	/* Store object reference for calling public methods */
  	var self = this;
  	
  	/* Constructor */
  	function c_Scroll() {
  	}

	// Launch object constructor
	c_Scroll();
}


/**
 * Define component object
 */
function Component() {
	/* Define private variables */
	var type;
	var id;
	var value;
	
	/* Store object reference for calling public methods */
  	var self = this;
  	
  	/* Constructor */
  	function c_Component() {
  	}

	// Launch object constructor
	c_Component();
}


/**
 * Define section object
 */
function Section() {
	/* Define private variables */
	var components = new Array();
	
	/* Store object reference for calling public methods */
  	var self = this;
  	
  	/* Constructor */
  	function c_Section() {
  	}
  	
	/**
	 * Get component
	 * @param component id
	 * @returns component
	 */
	this.getComponent = function(componentid) {
	}
	
	/**
	 * Add component
	 * @param component id
	 * @param component
	 */
	this.addComponent = function(componentid, component) {
	}
	
	/**
	 * Remove component
	 * @param component id
	 */
	this.removeComponent = function(componentid) {
	}
	 
	// Launch object constructor
	c_Section();
}


/**
 * Define page object
 * param page id
 */
function Page(pageid) {
	/* Define private variables */
	var header = new Section();
	var content = new Section();
	var footer = new Section();
	var id = pageid;
	var title = '';
	var scroll = new Scroll();
	
	/* Store object reference for calling public methods */
  	var self = this;
	
	/* Constructor */
	function c_Page() {
	}
	
	/**
	 * Get header
	 * @returns header
	 */
	this.getHeader = function() {
	}
	
	/**
	 * Set header
	 * @param header
	 */
	this.setHeader = function(section) {
	}
	
	/**
	 * Get content
	 * @returns content
	 */
	this.getContent = function() {
	}
	
	/**
	 * Set content
	 * @param content
	 */
	this.setContent = function(section) {
	}
	
	/**
	 * Get footer
	 * @returns footer
	 */
	this.getFooter = function() {
	}
	
	/**
	 * Set footer
	 * @param footer
	 */
	this.setFooter = function(section) {
	}

	/**
	 * Get page id
	 * @returns page id
	 */
	this.getId = function() {
	}
	
	/**
	 * Get title
	 * @returns title
	 */
	this.getTitle = function() {
	}
	
	/**
	 * Set title
	 * @param title
	 */
	this.setTitle = function(title) {
	}
	
	/**
	 * Get scroll
	 * @returns scroll
	 */
	this.getScroll = function() {
	}

	// Launch object constructor
	c_Page();
}


/**
 * Defines application object for jhare library
 */
function App() {
	/* Define private variables */
  	var pages = new Array();
	var navigation = new Array();
	var rootPath = '';
	
	/* Store object reference for calling public methods */
  	var self = this;

	/* Constructor */
	function c_App() {
		// Get path to root
		var rootPath = location.href.replace('index.html', '');
		rootPath = rootPath.replace('#', ''); 
	}

	/*function private_method1() {
		// I can read the public method
		self.showLoading();
	}*/
	
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