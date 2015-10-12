#Ink Emailer with Grunt

Compile emails locally instead of using Ink's online version.

##Installation/Requirements
* NodeJS/Grunt
* `gem install premailer`
* `npm install`

##Use
* Edit the `email.html` file using [Ink's standards] (http://zurb.com/ink/docs.php)
* All CSS needs to be written in `css/custom.css`. Do not modify `ink.css`
* When complete, run `grunt email` to compile the inline-style version. The compiled version can be found in `dist/email-inline.html`

##Source
* Grunt tasks pulled from [this blog post](https://medium.com/@victorgarcia/a-workflow-for-responsive-emails-using-ink-and-grunt-32d607879082)