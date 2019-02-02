<template>

    <div class="">
        <back-nav>
        </back-nav>
        <div class="flex flex-col p-6 bg-black">
            <div class="flex w-full justify-end">
                <outline-button
                    title="Add Language"
                    classes="bg-transparent hover:bg-blue text-blue-dark font-semibold hover:text-white py-2 px-4 border border-blue hover:border-transparent rounded">
                </outline-button>
            </div>
            
            <div class="flex mt-4">
                <repository-table>
                </repository-table>
            </div>
        </div>
    </div>

</template>

<script>
export default {

}
</script>

<style>

</style>
