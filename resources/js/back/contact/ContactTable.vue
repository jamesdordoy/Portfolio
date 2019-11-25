<template>
    <div class="flex justify-center w-full">
        <table class="text-left w-full">
            <thead class="bg-grey-darkest text-grey-dark text-white w-full">
                <tr class="flex w-full text-grey-dark">
                    <th class="p-2 w-1/5">Name</th>
                    <th class="p-2 w-1/5">Email</th>
                    <th class="p-2 w-1/5">Message</th>
                    <th class="p-2 w-1/5">Created At</th> 
                    <th class="p-2 w-1/5"></th>
                </tr>
            </thead>
            <tbody class="flex flex-col items-center justify-between w-full text-grey-light border-l border-r border-b border-grey-darkest rounded-b bg-nav">
                <tr v-for="contact in contacts" :key="contact.id" class="flex w-full mb-4">
                    <td class="p-2 w-1/5">{{ contact.name }}</td>
                    <td class="p-2 w-1/5">{{ contact.email }}</td>
                    <td class="p-2 w-1/5">{{ contact.message }}</td>
                    <td class="p-2 w-1/5">{{ contact.created_at|format-moment-dd/mm/yyyy }}</td>
                    <td class="p-2 w-1/5">
                      <button class="bg-grey-light hover:bg-grey text-grey-darkest font-bold py-2 px-4 rounded inline-flex items-center">
                            <i class="fa fa-edit" aria-hidden="true"></i>&nbsp;
                            <span>Mark as seen</span>&nbsp;
                      </button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<style>

</style>

<script>

export default{
    props: {
        contacts: {
          type: Array,
          default: []
        },
    },
}

</script>
