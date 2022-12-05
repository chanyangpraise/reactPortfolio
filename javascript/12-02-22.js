function call(v1) {
	new Promise((resolve, reject) => {
		v1[0] + v1[1];
	});
}

call([1, 2], (value) => {
  console.log(value);
});

