namespace $.$$ {
	
	type Frame_data = ReturnType< $hyoo_meme_frame['data'] >
	
	export class $hyoo_meme extends $.$hyoo_meme {
		
		async load_file( blob: Blob ) {
			return new Promise< string >( ( done, fail )=> {
				const reader = new FileReader
				reader.onerror = fail
				reader.onload = event => done( event.target!.result as string )
				reader.readAsDataURL( blob )
			} )
		}
		
		@ $mol_mem
		data( next?: readonly Frame_data[] ) {
			return this.$.$mol_state_local.value( 'draft', next ) ?? [
				{
					back: "https://camo.githubusercontent.com/857e0c82124edf3c2d6d72b8883ac7daaf4ccbbec075e3e91c1273959f66378c/68747470733a2f2f6e696e2d6a696e2e6769746875622e696f2f736c696465732f6d6f6c2f6275732d666163746f722e6a7067",
					before: "Hype train            ",
					inside: "Your   \nIdea   ",
					after: "                Too $mol bus-factor",
				}
			]
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
					back: $mol_wire_sync( this as $hyoo_meme ).load_file( file ),
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
			return this.title() + '.jpg'
		}
		
		@ $mol_action
		download_uri() {
			const node = this.Frames().dom_tree()
			const canvas = $mol_wire_sync( this.$ ).$mol_dom_capture_canvas( node )
			return canvas.toDataURL( 'image/jpeg' )
		}
		
	}
}
