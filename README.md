#jQuery CSS Fallback Plugin 

## Description
This plugin provides a fallback, for example, if you use a CDN for a CSS file. 
To use it, you need: 
  1. knowledge about the used CSS file, 
  2. knowledge about your page, 
  3. another (probably local) copy of the used CSS file. 

The plugin checks if an existing element on the page has been successfully styled (selector, cssRule, cssValue). 
If not, the fallback CSS file will be attached to the head (cssFallback, probably local). 

## Tested with
* IE 8
* IE 11
* Chrome 34
* FireFox 26

## Author
Ludger A. Rinsche. 

## License
Released under [MIT license](http://opensource.org/licenses/MIT).