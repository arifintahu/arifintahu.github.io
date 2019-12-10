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
				<div class="columns" style="padding: 0px 10% 20px 10%">
					<div class="column">
						<CardProject view=1 title="Operation Automations" src="/project1.png" body="Using Airtable as CMS and displaying the content in a Vue Project"></CardProject>
					</div>
					<div class="column">
						<CardProject view=2 title="Operation Automations" src="/project1.png" body="Using Airtable as CMS and displaying the content in a Vue Project"></CardProject>
					</div>
					<div class="column">
						<CardProject view=3 title="Operation Automations" src="/project1.png" body="Using Airtable as CMS and displaying the content in a Vue Project"></CardProject>
					</div>
				</div>
				<div class="columns" style="padding: 0px 10% 20px 10%">
					<div class="column">
						<CardProject view=4 title="Operation Automations" src="/project1.png" body="Using Airtable as CMS and displaying the content in a Vue Project"></CardProject>
					</div>
					<div class="column">
						<CardProject view=5 title="Operation Automations" src="/project1.png" body="Using Airtable as CMS and displaying the content in a Vue Project"></CardProject>
					</div>
					<div class="column">
						<CardProject view=6 title="Operation Automations" src="/project1.png" body="Using Airtable as CMS and displaying the content in a Vue Project"></CardProject>
					</div>
				</div>
			</div>
		</section>
	</div>
</template>

<script>
	import CardProject from '../components/CardProject.vue'

	export default {
		name : "Project",
		components: {
			CardProject
		}
	};
</script>