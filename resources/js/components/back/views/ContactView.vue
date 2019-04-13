<template>
    <div class="flex flex-col">
        <back-nav>
        </back-nav>
        <div class="flex flex-col p-6 bg-black">
            <contacts-table
                :contacts="contacts">
            </contacts-table>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            contacts: [],
        };
    },
    created() {
        axios.get('/api/contacts')
        .then(response => {
            this.contacts = response.data;
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        });
    },
}
</script>
