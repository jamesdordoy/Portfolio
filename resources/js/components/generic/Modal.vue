|<template>
    <div class="modal-mask" v-show="show" transition="modal">

        <div class="modal-container relative" :class="sizeClass" >
            <button @click="close" class="absolute close-btn">X</button>
            <div class="modal-header">
                <slot name="header">
                    default header
                </slot>
            </div>

            <div class="modal-body">
                <slot name="body">
                    default body
                </slot>
            </div>

            <div class="modal-footer">
                <slot name="footer">
                    <div class="clearfix">
                        <outline-button
                            @click="submit"
                            title="Submit"
                            classes="float-left bg-transparent hover:bg-blue text-blue-dark font-semibold hover:text-white py-2 px-4 border border-blue hover:border-transparent rounded">
                        </outline-button>

                        <outline-button
                            @click="close"
                            title="Close"
                            classes="float-right bg-transparent hover:bg-red text-red-dark font-semibold hover:text-white py-2 px-4 border border-red hover:border-transparent rounded">
                        </outline-button>
                    </div>
                </slot>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    data() {
        return {
            
        };
    },
    props: {
        show: {
            type: Boolean,
            default: false,
        },
        size: {
            type: String,
            default: 'md',
        }
    },
    methods: {

        close() {
            this.$emit("close");
        },
        submit() {
            this.$emit("submit");
        }
    },
    ready() {
        document.addEventListener("keydown", (e) => {
            if (this.show && e.keyCode == 27) {
                this.close();
            }
        });
    },
    computed: {
        sizeClass() {
            var size = this.size;

            return {
                'modal-sm' : size == 'sm',
                'modal-md' : size == 'md',
                'modal-lg' : size == 'lg',
                'modal-xl' : size == 'xl',
            }
        }
    }
}

</script>

<style scoped>

* {
    box-sizing: border-box;
}

.close-btn {
    position: absolute;
    top: 20px;
    right: 30px;
}

.modal-mask {
    position: fixed;
    z-index: 9998;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, .5);
    transition: opacity .3s ease;
}

.modal-sm {
    max-width: 576px;
}

.modal-md {
    max-width: 768px;
}

.modal-lg {
    max-width: 992px;
}

.modal-xl {
    max-width: 1200px;
}

.modal-container {
    margin: 10% auto;
    padding: 20px 30px;
    background-color: #fff;
    border-radius: 2px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
    transition: all .3s ease;
    font-family: Helvetica, Arial, sans-serif;
}

.modal-header h3 {
    margin-top: 0;
    color: #42b983;
}

.modal-body {
    margin: 20px 0;
}

.text-right {
    text-align: right;
}

.modal-enter, .modal-leave {
    opacity: 0;
}

.modal-enter .modal-container,
.modal-leave .modal-container {
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
}


</style>
