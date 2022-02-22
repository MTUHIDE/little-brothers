<script></script>

<template>
    <div class="modal fade"
         id="appointmentModal"
         tabindex="-1"
         role="dialog"
         aria-labelledby="exampleModalLabel"
         aria-hidden="true"
    >
        <div class="modal-dialog modal-dialog-scrollable modal-fullscreen-md-down">
            <div class="modal-content">
                <div class="modal-header" style="{ border: none }">
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"/>
                </div>
                <div class="modal-body">
                    <slot/>
                </div>
            </div>
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
