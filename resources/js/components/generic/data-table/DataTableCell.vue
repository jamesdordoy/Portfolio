<script>
export default {
    props: {
        comp: {

        },
        name: {
            type: String,
            default: '',
        },
        value: {
            type: Object,
        },
        clickEvent: {
            type: Function,
        },
    },
    data() {
        return {

        };
    },
    render(createElement) {

        if (this.comp) {
            return createElement(this.comp, {
                props: {
                    data: this.value,
                    name: this.name,
                    click: this.clickEvent,
                },
            })
        }
        
        return createElement('span', {}, this.value[this.name])
    }
}
</script>

<style>

</style>
