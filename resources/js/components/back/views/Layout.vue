
<template>
    <div class="h-full">
        <back-nav>
        </back-nav>
        <div class="p-8 bg-grey-darkest text-grey-dark shadow">
            <div>
                <div>
                    <div class="flex">
                        <div class="w-1/2 text-lg">
                            {{ title }}
                        </div>
                        <div class="w-1/2 text-right">
                            <slot
                                name="buttons">

                            </slot>
                        </div>
                    </div>
                </div>
            </div>
            <hr>
            <div class="flex flex-wrap mt-6 text-grey-dark">
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
