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

import { PanelBody, ColorPalette } from '@wordpress/components';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';
import { Panel } from '@wordpress/components';

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
	return (
		<div>
			<InspectorControls>
				<PanelBody
					title={ __('Accordion Title Settings') }
					initialOpen={ true }
					>
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
			<div className="simpleaccordion-accordion" style={ { backgroundColor: attributes.titleBackgroundColor } }>
				<RichText
					{ ...blockProps }
					tagName="h3"
					label="Title"
					value={ attributes.title }
					onChange={ ( title ) => setAttributes( { title } ) }
					placeholder='Accordion Title'
					style={ { color: attributes.titleColor } }
				/>
				<span className="simpleaccordion-expand" style={ { color: attributes.titleColor } }>+</span>
			</div>
			<div className="simpleaccordion-panel" style={ { color: attributes.panelBackgroundColor } }>
				<InnerBlocks />
			</div>
		
		</div>
	);
}
