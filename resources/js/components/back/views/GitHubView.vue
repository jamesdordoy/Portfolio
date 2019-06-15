<template>

    <div>
    <layout
        title="Dashboard">
        <span slot="buttons">
            <outline-button
                title="Add Language"
                classes="bg-transparent hover:bg-blue text-blue-dark font-semibold hover:text-white py-2 px-4 border border-blue hover:border-transparent rounded">
            </outline-button>
        </span>
        <div slot="content">
            <repository-table>
            </repository-table>
        </div>
    </layout>
</div>

</template>

<script>
export default {

}
</script>

<style>

</style>
