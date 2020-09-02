<template>
    <transition name="fade">

        <div v-show="modalOpen" class="fixed inset-0 z-30">

            <!-- background -->
            <div v-show="modalOpen" @click="$emit('close')" class="bg-filter bg-black opacity-25 fixed inset-0 w-full h-full z-20"></div>

            <main class="flex flex-col items-center justify-center h-full w-full">
                <transition name="fade-up-down">
                    <div v-show="modalOpen" class="modal-wrapper inline-block flex items-center z-30">
                        <div class="modal max-w-md mx-auto xl:max-w-5xl lg:max-w-5xl md:max-w-2xl bg-white max-h-screen shadow-lg flex-row rounded relative">

                            <div class="modal-header p-5 bg-gray-900 text-gray-900 rounded-t">
                                <h5 class="text-white text-3xl uppercase">Privacy Preferences</h5>
                            </div>
                            <div class="modal-body p-5 w-full h-full overflow-y-auto flex flex-wrap ">
                                <div class="w-1/3 h-full bg-gray-900">
                                    <ul>

                                    </ul>
                                </div>
                                <div class="w-2/3">
                                    <h6 class="text-2xl mb-2">Consent Management</h6>

                                    <p class="text-xl">Privacy Policy (Required)</p>
                                    <hr>
                                    <p class="text-justify">
                                        If you would like more information on how we manage your privacy, please visit our Privacy Policy Page.
                                    </p>
                                </div>
                            </div>
                            <div class="modal-footer py-3 px-5 border0-t text-right">
                                <button
                                    @click="$emit('close')"
                                    class="px-5 py-2 text-white"
                                    :class="`bg-${$store.getters.primaryThemeColour}-${$store.getters.primaryThemeColourShade} hover:bg-${$store.getters.primaryThemeColour}-${$store.getters.primaryThemeColourShadeDarker}`">
                                    Save Preferences
                                </button>
                            </div>
                        </div>
                    </div>
                </transition>
            </main>
        </div>
    </transition>
</template>

<script>
export default {
    props: {
        modalOpen: {
            type: Boolean,
            default: false,
        }
    },
    watch: {
        modalOpen(newVal) {
            if (newVal) {
                document.getElementsByTagName("html")[0].classList.remove('overflow-y-hidden');
            }
        }
    },
}
</script>

<style>
.modal-body{
    max-height: 500px;
}
.bg-gray-800-opacity{
    background-color: #2D374850;
}
@media screen and (max-width: 768px){
    .modal-body {
        max-height: 400px;
    }
}

/* animation for vue transition tag */

.fade-up-down-enter-active {
    transition: all 0.3s ease;
}
.fade-up-down-leave-active {
    transition: all 0.3s ease;
}
.fade-up-down-enter {
    transform: translateY(10%);
    opacity: 0;
}
.fade-up-down-leave-to {
    transform: translateY(10%);
    opacity: 0;
}

.fade-enter-active{
    -webkit-transition: opacity 2s;
    transition: opacity .3s;

}
.fade-leave-active {
    transition: opacity .3s;
}

.fade-enter,
.fade-leave-to{
    opacity: 0;
}

</style>
