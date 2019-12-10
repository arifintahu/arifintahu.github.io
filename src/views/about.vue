<template>
	<div>
		<section class="about hero is-medium is-dark is-bold">
			<div class="hero-body">
				<div class="container">
					<h1 class="title">Meet Arifin</h1>
				</div>
			</div>
		</section>
		<section style="padding-bottom: 100px;">
			<div class="container is-fluid">
				<h1 class="title has-text-centered" style="padding: 40px;">What I Bring</h1>
				<div class="columns" style="padding:0 10% 0 10%;">
					<div class="column">
						<CardAbout title="Front End Focus"  hCard="300px"  body="Focused on building user interfaces with JS (Vue, Angular, ES6), HTML, and CSS (Sass) that are well designed and functional."></CardAbout>
					</div>
					<div class="column">
						<CardAbout title="Full Stack Experience"  hCard="300px" body="Experience working across the application stack using APIs, Node, Mongo, and Firebase and Heroku to deliver production applications from design to deployment."></CardAbout>
					</div>
					<div class="column">
						<CardAbout title="Broad Business Exposure" hCard="300px" body="6 years of startup experience as a co-founder of Knotty Tie Co. Managed and contributed to development, UX, marketing, service, and operations."></CardAbout>
					</div>
				</div>
			</div>
		</section>
		<section class="about hero is-light">
			<div class="hero-body">
				<div class="container">
					<h1 class="title has-text-centered">Where I Come From</h1>
					<h5 class="has-text-justified is-size-6" style="padding:20px 10% 20px 10%;">In 2013, I co-founded Knotty Tie Co, a custom tie manufacturer built from the ground up to employ resettling refugees. I built technology and processes for design, sales, service, marketing, and manufacturing that helped us put nearly 100,000 products in our customers' hands and spurred growth to 23 employees and $1.6 million in annual revenue.</h5>
				</div>
			</div>
		</section>
		<section>
			<div class="container is-fluid">
				<h1 class="title has-text-centered" style="padding: 40px;">Technologies That I've Worked With</h1>
				<div class="columns" style="padding:0 10% 0 10%;">
					<div class="column">
						<CardAbout title="Vue.js" hCard="400px" center="center" body="Full production applications written in Vue" imgShow="true" srcImg="/logo-vue.png"></CardAbout>
					</div>
					<div class="column">
						<CardAbout title="JavaScript" hCard="400px" center="center" body="Proficient in ES6 and ES5 JS" imgShow="true" srcImg="/logo-js.png"></CardAbout>
					</div>
					<div class="column">
						<CardAbout title="Node.js" hCard="400px" center="center" body="Back-ends written using Node and Express" imgShow="true" srcImg="/logo-node.png"></CardAbout>
					</div>
					<div class="column">
						<CardAbout title="Firebase" hCard="400px" center="center" body="Apps using Cloud Firestore and Cloud Storage" imgShow="true" srcImg="/logo-firebase.png"></CardAbout>
					</div>
				</div>
				<h1 class="has-text-centered is-size-4" style="padding: 40px;">Web API's • Mongodb • Angular • Ruby On Rails • Postgresql</h1>
			</div>
		</section>
	</div>
</template>

<script>
	import CardAbout from '../components/CardAbout.vue'

	export default {
		name : "About",
		components : {
			CardAbout
		}
	};
</script>

<style>

</style>