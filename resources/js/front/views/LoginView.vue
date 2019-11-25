<template>
    <div class="h-full bg-nav">
        <particles>
            <login-form
                :old-email="oldEmail">
            </login-form>
        </particles>  
    </div>
</template>

<script>
export default {
    props: {
        old: {
            type: Object,
            default: () => ({})
        }
    },
    computed: {
        oldEmail() {
            return this.old['email'] ? this.old['email'] : '';
        }
    }
}
</script>