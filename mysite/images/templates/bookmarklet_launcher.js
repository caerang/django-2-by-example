(function() {
    if (window.mybookmarklet !== undefined) {
        myBookmarklet();
    }
    else {
        document.body.appendChild(document.createElement('script')).src='https://df7e0390.ngrok.io/static/js/bookmarklet.js?r='+Math.floor(Math.random()*99999999999999999999);
    }
})();