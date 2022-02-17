<script></script>

<template>
	<div class="CalendarPopup">
        <button type="submit" id="appointSubmit">
            <font-awesome-icon icon="far fa-times" />
        </button>
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
        border-radius: 16px;
		background: #FFF;
		padding: 10px;
        min-width: 30%;
        min-height: 30%;
	}
}
</style>
