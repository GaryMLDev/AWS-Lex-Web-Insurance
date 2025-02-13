// In the most simple form, you can load the component in a single statement:
//   new ChatBotUiLoader.FullPageLoader().load();
     new ChatBotUiLoader.FullPageLoader;

// The script below break the process into parts to further illustrate
// the load process.

// The ChatBotUiLoader variable contains the FullPageLoader field which is a
// constructor for the loader.
var Loader = ChatBotUiLoader.FullPageLoader;

// The loader constructor supports various configurable options used to
// control how the component configuration and dependencies are retrieved.
// In this case, we are just passing one option (which doesn't changethe
// default) for illustration purposes.
var loaderOpts = {
  // The following option controls if the local config should be ignored
  // when running this page embedded in an iframe.
  // If set to true, only passes the parentOrigin field when run as an
  // iframe and delegates the config to the parent
  shouldIgnoreConfigWhenEmbedded: true,

  // Controls if it should load minimized production dependecies
  // defaults to true for production builds and false in development
  shouldLoadMinDeps: true,
};

// Instantiate the loader by optionally passing the loader options to
// control its behavior. You may leave the options empty if you wish
// to take the defaults which works in most cases.
var loader = new Loader(loaderOpts);

// When loading the chatbot UI component, you can optionally pass it a
// configuration object
var chatbotUiConfig = {
  lex: {
    sessionAttributes: {
      /* QNAClientFilter: '', */
      userAgent: navigator.userAgent
    }
  }
};

// Calling the load function of the loader does a few things:
//   1. Loads JavaScript and CSS dependencies to the DOM
//   2. Loads the chatbot UI configuration from various sources
//       (e.g. JSON file, event)
//   3. Instantiates the chatbot UI component in the DOM
loader
  .load(chatbotUiConfig)
  .then(function () { console.log('ChatBotUiLoader loaded'); })
  .catch(function (error) { console.error(error); });