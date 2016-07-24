import React, {Component} from 'react';
/*
var exercise = window.location.hash.replace('#', '') || 'add';

var config = {
  session: `${exercise}`,
  initialJs: "// Write you code here",
  files: {
    js: {
      before: [
        "//cdnjs.cloudflare.com/ajax/libs/mocha/2.3.3/mocha.js",
        "//cdnjs.cloudflare.com/ajax/libs/chai/3.4.1/chai.js",
        "runner/before.js"
      ],
      after: [
        "runner/after.js"
      ],
      tests: [
        `exercises/${exercise}/tests.js`
      ]
    },
    css: [
      "//cdnjs.cloudflare.com/ajax/libs/mocha/2.3.3/mocha.css",
      "runner/style.css"
    ]
  },
  elements: {
    tests: document.getElementById('tests'),
    camel: document.getElementById('camel')
  },
  camel: {
    messages: {
      0: {
        image: 'camel.jpg',
        title: 'Hello, I\'m a JavaScript camel',
        message: 'Please write some JavaScript so I can eat it!'
      },
      50: {
        image: 'camel-30.jpg',
        title: '',
        message: 'Can I have more JavaScript please?'
      },
      100: {
        image: 'camel-happy.jpg',
        title: 'All done',
        message: 'Please submit the code to google classroom.'

      },
      error: {
        image: 'error.jpg',
        title: 'Looks like something got broken :('
      }
    }
  }

};


function startCamel(config, saver) {
  var settings = {
    cache: {
      result: -1
    }
  };


  function jsInjector(iframe) {
    return function (script) {
      iframe.contentWindow.eval(script);
    }
  }

  function cssInjector(iframe) {
    return function (css) {
      var s = iframe.contentDocument.createElement("style");
      s.innerHTML = css;
      iframe.contentDocument.getElementsByTagName("head")[0].appendChild(s);
    }
  }

  function appendIframe(iframe) {
    var testContainer = document.getElementById('tests');
    testContainer.appendChild(iframe);
  }


  function injectIframe(code) {
    var iframe = document.createElement('iframe');
    iframe.setAttribute('sandbox', 'allow-modals allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts');
    iframe.setAttribute('frameBorder', '0');

    appendIframe(iframe);

    iframe.contentDocument.body.innerHTML = '<div id = "not-up-to-date"></div><div id = "mocha"></div>';


    var runJs = jsInjector(iframe);
    settings.cache.jsBefore.map(runJs);
    settings.cache.css.map(cssInjector(iframe));

    iframe.contentWindow.console = {
      log: ()=> {
        console.log.apply(console, arguments);
      }
    };

    try {
      runJs(code);
    } catch (e) {
      camel.render('error', e.message);
      if (settings.cache.iframe) {
        settings.cache.iframe.contentWindow.jsCamelNotUpToDate();
      }
      iframe.remove();
      throw e;
    }


    if (settings.cache.iframe) {
      settings.cache.iframe.remove();
    }
    settings.cache.iframe = iframe;


    iframe.contentWindow.jsCamelHandleResult = (result)=> {
      camel.displayProgress(result);
      handleResultChange(result);
    };

    settings.cache.tests.map(runJs);
    settings.cache.jsAfter.map(runJs);
    return iframe;
  }


  function runCode(code) {
    injectIframe(code);
  }


  function preloadFiles(files) {
    return Promise.all(
        files.map(
            a=>fetch(a, {cache: "no-cache"})
                .then(a=>a.text())));
  }


  Promise.all([
    preloadFiles(config.files.js.before),
    preloadFiles(config.files.js.after),
    preloadFiles(config.files.css),
    preloadFiles(config.files.js.tests)
  ]).then(([jsBefore, jsAfter, css, tests])=> {
    settings.cache.jsBefore = jsBefore || [];
    settings.cache.jsAfter = jsAfter || [];
    settings.cache.css = css || [];
    settings.cache.tests = tests || [];
  });
}
*/
export default class Runner extends Component {
  render() {
    console.log(this.props.code);
    return <div>{this.props.code}</div>;
  }
}
