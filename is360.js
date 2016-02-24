var is360 = function(){
  try {
    if(/UBrowser/i.test(navigator.userAgent)){
      return '';
    }

    if (typeof window.scrollMaxX !== 'undefined') {
      return '';
    }

    var _track = 'track' in document.createElement('track');
    var webstoreKeysLength = window.chrome && window.chrome.webstore ? Object.keys(window.chrome.webstore).length : 0;

    if (window.clientInformation && window.clientInformation.languages && window.clientInformation.languages.length > 2) {
      return '';
    }

    if (_track) {
      return webstoreKeysLength > 1 ? ' QIHU 360 EE' : ' QIHU 360 SE';
    }

    return '';
  }catch(e){
    return '';
  }
}();
