
	function switchContent(match) {
		$(`[data-toggle-match="${match}"]`).attr('data-switch', (i, val) => {
			return val === 'show' ? 'hide' : 'show'
		})
	}