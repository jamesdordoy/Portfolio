<template>
    <div class="h-full bg-nav">
        <front-nav
            :auth="auth">
        </front-nav>

        <div class="h-full" id="home">
            <particles>
                <login-form
                    :old-email="oldEmail">
                </login-form>
            </particles>
        </div>
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