<script>
import { ref } from 'vue';

    	export default {
		props: ['TogglePopup'],

		setup () {
			const popupTriggers = ref({
				buttonTrigger: false,
			});
			const TogglePopup = (trigger) => {
				popupTriggers.value[trigger] = !popupTriggers.value[trigger]
			}
		},
		data() {
			const popupTriggers = ref({
					buttonTrigger: false
			});

			return {
				popupTriggers,
				TogglePopup
			}
		}
	}
</script>

<template>
	<div class="CalendarPopup">
		<div class="popup-inner">
			<slot/>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.CalendarPopup {
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	z-index: 99;
	background-color: rgba(0, 0, 0, 0.2);
	
	display: flex;
	align-items: center;
	justify-content: center;
	.popup-inner {
		background: #FFF;
		padding: 80px;
	}
}
</style>