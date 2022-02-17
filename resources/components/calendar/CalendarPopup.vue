<script>
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
            popupTriggers
        }
    }
}
</script>

<template>
	<div class="CalendarPopup">
		<div class="popup-inner">
			<slot />
			<button class="popup-close" @click="TogglePopup()">
				Close Popup
			</button>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.popup {
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
		padding: 32px;
	}
}
</style>