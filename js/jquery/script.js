/* GIOCATTOLI ITALIANI */

jQuery.noConflict();
jQuery(document).ready(function(){
	//effetti vetrina prodotti 
    jQuery('.item').mouseover(function() {
	    jQuery(this).find('.products-grid-info').hide();
		jQuery(this).find('.actions-hover').show();
    });
	jQuery('.item').mouseleave(function() {
		jQuery(this).find('.actions-hover').hide();
		jQuery(this).find('.products-grid-info').show();
    }); 
});

