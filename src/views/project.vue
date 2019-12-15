<template>
	<div>
		<section class="hero is-primary is-bold is-medium">
			<div class="hero-body">
				<div class="container">
					<h1 class="title">Projects that I have built</h1>
				</div>
			</div>
		</section>
		<section>
			<div class="container is-fluid" style="padding-top: 20px">
				<div v-for="(item1, index1) in projects" :key="index1" class="columns" style="padding: 0px 10% 20px 10%">
					<div v-for="(item2, index2) in item1" :key="index2" class="column">
						<CardProject :index="index1" :view="index2" :title="item2.title" :src="item2.src" :body="item2.subtitle"></CardProject>
					</div>
				</div>
			</div>
		</section>
	</div>
</template>

<script>
	import CardProject from '../components/CardProject.vue';

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

	function getFile(file, callback){
		readTextFile(file, function(text){
			return callback(JSON.parse(text));
		});
	}

	export default {
		name : "Project",
		components: {
			CardProject
		},
		data : function () {
			return {
				projects : ''
			}
		},
		methods : {
			getData : function (file) {
				return new Promise((resolve) => {
					getFile(file, function(response){
						resolve(response.data);
					});
				})
			}
		},
		mounted: function() {
			this.getData("project/project.json").then((data) => {
				console.log(data);
				this.projects = data;
			});
		}
	};
</script>