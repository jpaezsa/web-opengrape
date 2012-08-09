OpenGrape
=========

This is a sample app that uses node.js, express, ejs and the Facebook
client-side JS SDK to demonstrate simple Open Graph principles.

This app is configured so as to use the Heroku cedar stack, as per
http://devcenter.heroku.com/articles/nodejs

If you want to run this application itself, you will need to change
the Facebook application ID in `public/opengrape.js`:

    ...
    FB.init({
      appId: '435461749820612', // change this to your own app ID
      cookie: true
    });
    ...

You will also have to create your own Facebook Open Graph namespace
and ensure it is used in place of `opngrpe` in the two `.ejs` view 
files.

## Wine & Grape Images

Used under Creative Commons from:

* http://www.flickr.com/photos/bugmonkey/5297095608/
* http://www.flickr.com/photos/dalem/21340684/
* http://www.flickr.com/photos/wickenden/3599754414/
* http://www.flickr.com/photos/brianjmatis/4800524537
* http://www.flickr.com/photos/dodundee/4804890542/
* http://www.flickr.com/photos/zest-pk/923930277/

## Licence

Copyright 2012 Facebook, Inc.

You are hereby granted a non-exclusive, worldwide, royalty-free license to
use, copy, modify, and distribute this software in source code or binary
form for use in connection with the web services and APIs provided by
Facebook.

As with any software that integrates with the Facebook platform, your use
of this software is subject to the Facebook Developer Principles and
Policies [http://developers.facebook.com/policy/]. This copyright notice
shall be included in all copies or substantial portions of the software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL
THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
DEALINGS IN THE SOFTWARE.
