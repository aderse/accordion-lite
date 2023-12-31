/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps, RichText } from '@wordpress/block-editor';

/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#save
 * @param {Object} props            Properties passed to the function.
 * @param {Object} props.attributes Available block attributes.
 * @return {JSX.Element} Element to render.
 */
export default function save( { attributes } ) {
	const blockProps = useBlockProps.save();
	const { InnerBlocks } = wp.blockEditor;
	const titleBlockStyle = {
		padding: attributes.titlePadding,
		backgroundColor: attributes.titleBackgroundColor
	}
	const titleStyle = {
		fontSize: attributes.titleSize,
		color: attributes.titleColor
	}
	return (
		<div { ...blockProps }>
			<div className="simpleaccordion-accordion" style={ titleBlockStyle }>
				<RichText.Content 
					tagName="h3"
					value={ attributes.title }
					style={ titleStyle }
				/> 
				<span className="simpleaccordion-expand" style={ { color: attributes.titleColor  } }>+</span>
			</div>
			<div className="simpleaccordion-panel" style={ { backgroundColor: attributes.panelBackgroundColor } }>
				<InnerBlocks.Content />
			</div>
		</div>
	);
}
