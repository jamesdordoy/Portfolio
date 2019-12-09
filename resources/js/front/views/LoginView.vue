<template>
    <div class="h-full bg-nav">
        <front-nav
            :auth="auth">
        </front-nav>
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
        },
        auth: {
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