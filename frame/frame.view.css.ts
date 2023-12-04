namespace $.$$ {
	
	const { per, rem, vw } = $mol_style_unit
	const { clamp, hsla } = $mol_style_func
	
	$mol_style_define( $hyoo_meme_frame, {
		
		position: 'relative',
		maxWidth: rem(50),
		flex: {
			direction: 'column',
		},
		background: 'none',
		
		$mol_textarea: {
			
			textShadow: '0 0 0.25rem black',
			color: 'white',
			font: {
				weight: 'bolder',
				size: clamp( rem(0), vw(4), rem(2) ),
			},			
			textAlign: 'center',
			position: 'absolute',
			width: per(100),
			
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
			right: rem(-3.5),
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
			top: per(50),
			transform: 'translateY(-50%)',
		},
		
		After: {
			bottom: 0,
		},
		
	} )
	
}
