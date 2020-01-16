<template>
    <div class="h-full">
        <back-nav>
        </back-nav>
        <div class="p-8 bg-grey-darkest text-grey-dark shadow">
            <div>
                <div class="flex">
                    <div class="w-1/2 text-3xl">
                        {{ title }}
                    </div>
                    <div class="w-1/2 text-right">
                        <slot
                            name="buttons">
                        </slot>
                    </div>
                </div>
                <hr class="hr-header">
            </div>
            <div class="flex flex-wrap text-grey-dark">
                <div class="w-full">
                    <slot name="content">
                    </slot>
                    <div class="w-full m-6 flex justify-center">

                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style lang="">
    
hr.hr-header {
    margin-top:20px;
    border-top: 1px solid #ccc;
}

</style>

<script>

export default {
    props: {
        title: {
            type: String,
            default: 'title',
        }
    }
}
</script>
