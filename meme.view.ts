namespace $.$$ {
	
	type Frame_data = ReturnType< $hyoo_meme_frame['data'] >
	
	const load = $mol_fiber_sync( ( blob: Blob )=> new Promise< string >( ( done, fail )=> {
		const reader = new FileReader
		reader.onerror = fail
		reader.onload = event => done( event.target!.result as string )
		reader.readAsDataURL( blob )
	} ) )
	
	export class $hyoo_meme extends $.$hyoo_meme {
		
		@ $mol_mem
		data( next?: readonly Frame_data[] ) {
			return this.$.$mol_state_local.value( 'draft', next ) ?? []
		}
		
		@ $mol_mem
		title() {
			for( const frame of this.data() ) {
				if( frame.before ) return frame.before
				if( frame.after ) return frame.after
			}
			return super.title()
		}
		
		add( files: readonly File[] ) {
			
			this.data([
				... this.data(),
				... [ ... files ].map( file => ({
					back: load( file ),
					before: '',
					inside: '',
					after: '',
				}) ),
			])
			
			return files
		}
		
		@ $mol_mem
		frames() {
			return this.data().map( ( _, i )=> this.Frame( i ) )
		}
		
		frame_data( index: number, next?: Frame_data | null ) {
			
			const arg = next === undefined ? undefined : [
				... this.data().slice( 0, index ),
				... next ? [ next ] : [],
				... this.data().slice( index + 1 ),
			]
			
			return this.data( arg )[ index ]
		}
		
		frame_drop( index: number ) {
			this.frame_data( index, null )
		}
		
		@ $mol_mem
		file_name() {
			return this.title() + '.png'
		}
		
		download_uri() {
			const capture = $mol_fiber_sync( $mol_dom_capture_canvas )
			const app = new $hyoo_meme
			app.data = ()=> this.data()
			app.frame_tools = ()=> []
			const node = app.Frames().dom_tree()
			document.body.appendChild( node )
			const canvas = capture( node )
			document.body.removeChild( node )
			app.destructor()
			return canvas.toDataURL()
		}
		
	}
}