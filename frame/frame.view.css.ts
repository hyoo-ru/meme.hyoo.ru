namespace $.$$ {
	
	const { per, rem, vw } = $mol_style_unit
	const { clamp } = $mol_style_func
	
	$mol_style_define( $hyoo_meme_frame, {
		
		position: 'relative',
		maxWidth: rem(40),
		flex: {
			direction: 'column',
		},
		
		$mol_textarea: {
			
			color: 'white',
			background: 'none',
			mixBlendMode: 'exclusion',
			border: {
				radius: $mol_gap.round,
			},
			font: {
				weight: 'bolder',
				size: clamp( rem(0), vw(4), rem(2) ),
			},			
			textAlign: 'center',
			position: 'absolute',
			width: per(100),
			
			$mol_string: {
				
				background: 'none',
				caretColor: 'white',
				
				':placeholder-shown': {
					background: 'none',
					boxShadow: 'none',
					backdropFilter: 'none',
					width: per(100),
				},
				
				':focus': {
					background: 'none',
					box: {
						shadow: 'none',
					},
				},
				
			}
			
		},
		
		Tools: {
			
			position: 'absolute',
			top: 0,
			right: 0,
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
			backdropFilter: 'blur(30rem)',
		},
		
		Inside: {
			top: per(50),
			transform: 'translateY(-50%)',
		},
		
		After: {
			bottom: 0,
			backdropFilter: 'blur(30rem)',
		},
		
	} )
	
}
