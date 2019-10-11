<?php
/*
Plugin Name: Seo Discount Popup
Description: Best Seo Discount Popup. For change text in popup - edit seo-discount-popup.js file.
Version: 1.0
Author: seo-discount
*/

// Exit if accessed directly
if( !defined( 'ABSPATH' ) ) {
    die;
}

/**
 * Enqueue scripts and styles.
 */
function seo_discount_popup_include() {
	wp_enqueue_style( 'seo-discount-popup-style', plugin_dir_url( __FILE__ ) . 'seo-discount-popup.css', '', '1.0' );
	wp_enqueue_script( 'jquery-cookie', plugin_dir_url( __FILE__ ) . 'js.cookie.js', array('jquery'), '1.4.1', true );
	wp_enqueue_script( 'seo-discount-popup-script', plugin_dir_url( __FILE__ ) . 'seo-discount-popup.js', array('jquery', 'jquery-cookie'), '1.0', true );
}
add_action( 'wp_enqueue_scripts', 'seo_discount_popup_include' );

?>
