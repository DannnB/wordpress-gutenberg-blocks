/**
 * BLOCK: display
 *
 * Registering a basic block with Gutenberg.
 * Simple block, renders and saves the same content without any interactivity.
 */

//  Import CSS.
import './style.scss';
import './editor.scss';

const { __ } = wp.i18n; // Import __() from wp.i18n
const { registerBlockType } = wp.blocks; // Import registerBlockType() from wp.blocks
const { PlainText } = wp.editor;
/**
 * Register: aa Gutenberg Block.
 *
 * Registers a new block provided a unique name and an object defining its
 * behavior. Once registered, the block is made editor as an option to any
 * editor interface where blocks are implemented.
 *
 * @link https://wordpress.org/gutenberg/handbook/block-api/
 * @param  {string}   name     Block name.
 * @param  {Object}   settings Block settings.
 * @return {?WPBlock}          The block, if it has been successfully
 *                             registered; otherwise `undefined`.
 */
registerBlockType( 'cgb/block-price-list', {
	// Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.
	title: __( 'DB - Price List' ), // Block title.
	icon: 'shield', // Block icon from Dashicons → https://developer.wordpress.org/resource/dashicons/.
	category: 'common', // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.
	keywords: [],
	attributes: {
		title: {
			type: 'array',
			source: 'children',
			selector: 'h3',
		},
		price: {
			type: 'array',
			source: 'children',
			selector: 'p',
		},
	},

	/**
	 * The edit function describes the structure of your block in the context of the editor.
	 * This represents what the editor will render when the block is used.
	 *
	 * The "edit" property must be a valid function.
	 *
	 * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/
	 */
	edit: ( { attributes, className, isSelected, setAttributes } ) => {
		const { price, title } = attributes;

		const onChangeTitle = value => {
			setAttributes( { title: value } );
		};
		const onChangePrice = value => {
			setAttributes( { price: value } );
		};

		return [
			<div className={ className } key="container">
				<div className="price-block">
					<div className="price-block-inner">
						<PlainText
							placeholder={ __( 'Enter a title' ) }
							className="price-block-title"
							value={ title }
							onChange={ onChangeTitle }
						/>
						<PlainText
							placeholder={ __( 'Enter a price' ) }
							className="price-block-value"
							value={ price }
							onChange={ onChangePrice }
						/>
						<ul className="price-block-features">
							<li>1</li>
							<li>2</li>
							<li>3</li>
						</ul>
						<a href="/" className="price-block-button" role="button">BUY</a>
					</div>
				</div>
			</div>
		];
	},

	/**
	 * The save function defines the way in which the different attributes should be combined
	 * into the final markup, which is then serialized by Gutenberg into post_content.
	 *
	 * The "save" property must be specified and must be a valid function.
	 *
	 * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/
	 */
	save: ( props ) => {
		const {
			className,
			attributes: {
				title,
				price,
			}
		} = props;
		return (
			<div className="price-block">
				<div className="price-block-inner">
					<h3 className="price-block-title">{ title }</h3>
					<p className="price-block-value">{ price }</p>
					<ul className="price-block-features">
						<li>1</li>
						<li>2</li>
						<li>3</li>
					</ul>
					<a href="/" className="price-block-button" role="button">BUY</a>
				</div>
			</div>
		);
	},
} );
