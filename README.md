Performance-Optimization
-----------------------
Performance-Optimization is a php program that enhances your website performance using techniques such as minifying, compression, caching, concatenation and embedding.The idea is based on yahoo performace rules (http://developer.yahoo.com/performance/rules.html)


Performance-Optimization Features
-----------------------
* Performance-Optimization Increases your website download speed by reducing the size of JavaScript and
  CSS files approximately up to 80% or even higher.
* Reduces count of http requests by combining js/css files together.
* Also reduces count of http requests by embedding css images inside css files.
* Performance-Optimization generates minified, compressed, combined and embedded files on the
  first request and caches them on the server and uses the cache on future requests.
* It doesn't embed duplicated urls (i.e. css sprites) in css files for better performance.
* It also knows to regenerate already cached files if the originals have been changed.
* Performance-Optimization handles browsers that doesn't support gzip encoding and sends them non-gzipped content.
* It also forces the browser to cache the files optionally forever or until they have not changed.
* Performance-Optimization removes Etag headers. (for better performance on clustered servers).
* It is easy to install, since it requires no code modifications whatsoever. (other than .htaccess)
* All the features is configurable using config file.


Installation Requirements
-------------------------
* PHP 4.3.0 or higher.
* Apache with `mod_rewrite` enabled.


Installation Instructions
------------------------
1. Upload the  folder to your website.
2. "../cache" folder should be writable (in most cases 777 permission is needed).
3. Upload .htaccess file on the folder that  folder is placed, if there is no another htaccess file currently.
   Otherwise, Copy content of Performance-Optimization htaccess file and paste it inside your current htaccess at the beginning of the file.
4. It's ready. Enjoy it.


Bug reports
-----------
Any feedback is appreciated.

Use the issue tracker at github for bug reports:
http://github.com/naacal/Performance-Optimization/issues
