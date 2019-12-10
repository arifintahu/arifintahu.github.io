<template>
	<div>
		<section class="about hero is-light is-medium is-bold">
			<div class="hero-body">
				<div class="container">
					<h1 class="title">Project Detail</h1>
				</div>
			</div>
		</section>
	</div>
</template>

<script>
	function readTextFile(file, callback) {
		var rawFile = new XMLHttpRequest();
		rawFile.overrideMimeType("application/json");
		rawFile.open("GET", file, true);
			rawFile.onreadystatechange = function() {
			if (rawFile.readyState === 4 && rawFile.status == "200") {
				callback(rawFile.responseText);
			}
		}
		rawFile.send(null);
	}
	export default {
		name : "ProjectDetail",
		mounted: function() {
			readTextFile("project.json", function(text){
				var data = JSON.parse(text);
				console.log(data);
			});
		},
		computed: {
			project: function(){
				return new Promise((resolve, reject) => {
					try{
						readTextFile("project.json", function(text){
							var data = JSON.parse(text);
							console.log(data);
							resolve(data.data[0]);
						});
					} catch (e){
						console.log(e);
						reject(e);
					}
				});
			}
		}
	};
</script>