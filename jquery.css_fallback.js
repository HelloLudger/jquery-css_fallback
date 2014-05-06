/* 
 * jQuery CSS Fallback Plugin 
 * 
 * This plugin provides a fallback if you use a CDN for a CSS file. 
 * To use it, you need: 
 *  1. knowledge about the used CSS file, 
 *  2. knowledge about your page, 
 *  3. another (probably local) copy of the used CSS file. 
 * 
 * The plugin checks if an existing element on the page has been successfully styled (selector, cssRule, cssValue). 
 * If not, the fallback CSS file will be attached to the head (cssFallback, probably local). 
 * 
 * Made by Ludger A. Rinsche. 
 * ------- 05.05.2014 ------- 
 * 
 * http://helloludger.de/ 
 * 
 * Under MIT License. 
 * 
 */ 

;(function ($) { 

        var pluginName    = 'cssFallback', 
            pluginVersion = '0.9' 

        $.cssFallback = function ( options ) { 
        
                var settings = $.extend ( {}, $.cssFallback.defaults, options ); 

                if ($(settings.selector).first().css(settings.cssRule) != settings.cssValue) { 

                        $('<link rel="stylesheet" type="text/css" href="' + settings.cssFallback + '" />').appendTo('head'); 
                        return true;

                } 

                return false;

        } 


        // Defaults are useless, at the moment.
        $.cssFallback.defaults = {
                'selector': '.button', 
                'cssRule' : 'background-color', 
                'cssValue': 'green', 
                'cssFallback': 'css/jquery-mobile.latest.min.css' 
        }; 
}( jQuery)); 
