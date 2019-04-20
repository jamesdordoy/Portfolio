<template>
    <div class="">
        <back-nav>
        </back-nav>
        <data-table
            url="/api/projects"
                :columns="[
                {label: 'ID', name: 'id' },
                {label: 'Name', name: 'name'},
                {label: 'Link', name: 'link'}
            ]">
        </data-table>
    </div>
</template>

<script>
export default {

}
</script>
