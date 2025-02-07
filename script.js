document.getElementById('search').addEventListener('input', function(){
	let filter = this.value.toLowerCase();
	let items = document.querySelectorAll('#list li');

	items.forEach(function(item) {
		let text = item.textContent.toLowerCase();
		if (text.includes(filter)) {
			item.style.display = '';
		} else {
			item.style.display = 'none';
		}
	});
});

