/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps, RichText, InspectorControls, InnerBlocks } from '@wordpress/block-editor';

import { PanelBody, ColorPalette, TextControl } from '@wordpress/components';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {JSX.Element} Element to render.
 */
export default function Edit( { attributes, setAttributes } ) {
	const blockProps = useBlockProps();
	const { InnerBlocks } = wp.blockEditor;
	const titleBlockStyle = {
		padding: attributes.titlePadding,
		backgroundColor: attributes.titleBackgroundColor
	}
	const titleStyle = {
		fontSize: attributes.titleSize,
		color: attributes.titleColor
	};
	return (
		<div>
			<InspectorControls>
				<PanelBody
					title={ __('Accordion Title Settings') }
					initialOpen={ true }
					>
					<p><strong>Title Size</strong><br/><small>in pixels</small></p>
					<TextControl
						value={ attributes.titleSize }
						onChange={ (titleSize) => setAttributes( { titleSize } ) }
					/>
					<p><strong>Title Padding</strong><br/><small>follow box: 20px 10px 20px 10px</small></p>
					<TextControl
						value={ attributes.titlePadding }
						onChange={ (titlePadding) => setAttributes( { titlePadding } ) }
					/>
					<p><strong>Title Background Color</strong></p>
					<ColorPalette
						value={ attributes.titleBackgroundColor }
						onChange={ (titleBackgroundColor) => setAttributes( { titleBackgroundColor } ) }
					/>
					<p><strong>Title Color</strong></p>
					<ColorPalette
						value={ attributes.titleColor }
						onChange={ (titleColor) => setAttributes( { titleColor } ) }
					/>
					<p><strong>Panel Background Color</strong></p>
					<ColorPalette
						value={ attributes.panelBackgroundColor }
						onChange={ (panelBackgroundColor) => setAttributes( { panelBackgroundColor } ) }
					/>
				</PanelBody>
			</InspectorControls>
			<div className="simpleaccordion-accordion" style={ titleBlockStyle }>
				<RichText
					{ ...blockProps }
					tagName="h3"
					label="Title"
					value={ attributes.title }
					onChange={ ( title ) => setAttributes( { title } ) }
					placeholder='Accordion Title'
					style={ titleStyle }
				/>
				<span className="simpleaccordion-expand" style={ { color: attributes.titleColor } }>+</span>
			</div>
			<div className="simpleaccordion-panel" style={ { backgroundColor: attributes.panelBackgroundColor } }>
				<InnerBlocks />
			</div>
		</div>
	);
}
