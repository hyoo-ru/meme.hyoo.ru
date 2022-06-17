namespace $.$$ {
	
	const { per, rem, vw } = $mol_style_unit
	const { clamp, hsla } = $mol_style_func
	
	$mol_style_define( $hyoo_meme_frame, {
		
		position: 'relative',
		maxWidth: rem(40),
		flex: {
			direction: 'column',
		},
		background: 'none',
		
		$mol_textarea: {
			
			background: 'none',
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
				
			}
			
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
		},
		
		Before: {
			top: 0,
			Edit: {
				background: {
					color: hsla( 0, 0, 0, 0.25 ),
				},
			},
		},
		
		Inside: {
			top: per(50),
			transform: 'translateY(-50%)',
			mixBlendMode: 'exclusion',
			Edit: {
				background: 'none',
			},
		},
		
		After: {
			bottom: 0,
			Edit: {
				background: {
					color: hsla( 0, 0, 0, 0.25 ),
				},
			},
		},
		
	} )
	
}
