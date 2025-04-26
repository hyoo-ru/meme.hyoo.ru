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
					back: "hyoo/meme/gallery/bus.jfif",
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
		
		paste( event: ClipboardEvent ) {
			const files = [ ... event.clipboardData!.files ]
			$mol_wire_async( this ).add( files )
		}
		
		add( files: readonly File[] ) {
			
			this.data([
				... this.data(),
				... [ ... files ]
				.map( file => $mol_picture.fit( file, 800 ).format("image/webp" )! )
				.map( file => ({
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
			return [
				... this.data().map( ( _, i )=> this.Frame( i ) ),
				... super.frames(),
			]
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
		picture() {
			const node = this.Frames().dom_tree()
			const img = $mol_wire_sync( this.$ ).$mol_dom_capture_image( node )
			return $mol_picture.fit( img )
		}
		
		@ $mol_action
		export_jpg() {
			return this.picture().format( 'image/jpeg' )!
		}
		
		@ $mol_action
		export_png() {
			return this.picture().format( 'image/png' )!
		}
		
	}
}
