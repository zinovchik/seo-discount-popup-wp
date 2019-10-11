jQuery(document).ready(function () {
    if(Cookies.get('seo_discount_popup') != 1) {
        var posX = 0;
        jQuery('body').mousemove(function (event) {
            posX = event.pageY;
        }).mouseleave(function() {
            if (posX < 100 && Cookies.get('seo_discount_popup') != 1) {
                jQuery('#seo_discount_popup').css('display', 'block');
                jQuery('#seo_discount_popup .close').click(function () {
                    jQuery('#seo_discount_popup').css('display', 'none');
                    Cookies.set('seo_discount_popup', '1', { expires: 0.5, path: '/' });
                    gtag('event', 'close_button', {'event_category': 'seo_discount_popup'}); //gtag.js
                    // ga('send', 'event', 'seo_discount_popup', 'close_button'); //analytics.js
                });
                jQuery('.seo_discount_popup_button').click(function () {
                    gtag('event', 'order_button', {'event_category': 'seo_discount_popup'}); //gtag.js
                    // ga('send', 'event', 'seo_discount_popup', 'order_button'); //analytics.js
                    Cookies.set('seo_discount_popup', '1', { expires: 0.5, path: '/' });
                });
            }
        }).append('<div id="seo_discount_popup" class="seo_discount_popup">\n' +
            '  <div class="seo_discount_popup_content">\n' +
            '    <span class="close" title="Close">&times;</span>\n' +
            '    <div class="seo_discount_popup_title">What is Lorem Ipsum?</div>\n' +
            '    <div class="seo_discount_popup_desc">Lorem Ipsum is simply dummy text.</div>\n' +
            '    <div class="seo_discount_popup_text1">Where does it come from?</div>\n' +
            '    <div class="seo_discount_popup_text2">LoremIpsum</div>\n' +
            '    <a href="#" class="seo_discount_popup_button">Buy Now</a>\n' +
            '  </div>\n' +
            '</div>');
    }
});
