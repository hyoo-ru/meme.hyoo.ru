namespace $.$$ {
	export class $hyoo_meme_frame extends $.$hyoo_meme_frame {
		
		back() {
			return this.data().back || super.back()
		}
		
		@ $mol_mem
		before( next?: string ) {
			const arg = next === undefined ? next : { ... this.data(), before: next }
			return this.data( arg ).before ?? super.before()
		}
		
		@ $mol_mem
		inside( next?: string ) {
			const arg = next === undefined ? next : { ... this.data(), inside: next }
			return this.data( arg ).inside ?? super.inside()
		}
		
		@ $mol_mem
		after( next?: string ) {
			const arg = next === undefined ? next : { ... this.data(), after: next }
			return this.data( arg ).after ?? super.after()
		}
		
	}
}
