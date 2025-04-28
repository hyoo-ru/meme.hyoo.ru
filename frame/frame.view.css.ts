namespace $.$$ {
	
	const { hsla } = $mol_style_func
	
	$mol_style_define( $hyoo_meme_frame, {
		
		position: 'relative',
		width: '40rem',
		flex: {
			direction: 'column',
		},
		background: 'none',
		
		$mol_textarea: {
			
			textShadow: '0 0 0.25rem black',
			color: 'white',
			font: {
				weight: 'bolder',
				size: '2em',
			},			
			textAlign: 'center',
			position: 'absolute',
			width: '100%',
			
			$mol_string: {
				
				caretColor: 'white',
				background: 'none',
				box: {
					shadow: 'none',
				},
				
				':placeholder-shown': {
					background: 'none',
					boxShadow: 'none',
				},
				
				':focus': {
					background: {
						color: hsla( 0, 0, 0, 0.25 ),
					},
					box: {
						shadow: 'none',
					},
				},
				
			},
			
			$mol_text_code: {
				justifySelf: 'stretch',
				justifyItems: 'center',
			},
			
		},
		
		Tools: {
			
			position: 'absolute',
			top: 0,
			right: '-3.5rem',
			flex: {
				direction: 'column',
			},
			
		},
		
		Back: {
			flex: {
				grow: 1,
			},
			width: `100%`,
		},
		
		Before: {
			top: 0,
		},
		
		Inside: {
			top: '50%',
			transform: 'translateY(-50%)',
		},
		
		After: {
			bottom: 0,
		},
		
	} )
	
}
