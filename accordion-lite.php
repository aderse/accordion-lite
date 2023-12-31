<?php
/**
 * Plugin Name:       Accordion Lite
 * Description:       A simple accordion block for Gutenberg.
 * Requires at least: 6.4.2
 * Requires PHP:      8.0
 * Version:           1.0.6
 * Author:            <a href="https://andrewderse.com">Andrew Derse</a>
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       accordion-lite
 *
 * @package           accordion-lite
 */

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */

if ( ! defined( 'ABSPATH' ) ) exit;

function accordion_lite_block_init() {
	register_block_type( __DIR__ . '/build' );
}
add_action( 'init', 'accordion_lite_block_init' );
