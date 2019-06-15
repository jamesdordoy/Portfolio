<template>
    <back-modal :show="show" @close="close">
        <h1 slot="header">Add a Language</h1>
        <div slot="body">
            <form @submit.prevent="submit">
                <form-group
                    title="Name">
                    <text-input
                        name="name"
                        v-model="payload.name"
                        placeholder="Name">
                    </text-input>
                </form-group>
                <form-group
                    title="Description">
                    <textarea-input
                        name="description"
                        v-model="payload.description">
                    </textarea-input>
                </form-group>

                <div class="w-full flex">
                    
                    <div class="w-1/2 p-6">
                        <file-input
                            @change="getFile"
                            name="icon">
                        </file-input>
                    </div>

                    <div class="w-1/2">
                        <form-group
                            title="Icon URL">
                            <text-input
                                name="icon_url"
                                placeholder="Icon URL">
                            </text-input>
                        </form-group>
                    </div>  
                </div>

                <outline-button
                    title="Submit"
                    type="submit"
                    classes="float-right ">
                </outline-button>
            </form>
            
        </div>
        <div slot="footer" class="mb-8"></div>
    </back-modal>
</template>

<script>
"use strict";

import LanguageService from '../../../services/LanguageService';

export default {
    data() {
        return {
            payload: {
                name: '',
                description: '',
                icon_url: '',
                icon: {},
            }
        }
    },
    props: {
        show: {
            type: Boolean,
            default: () => (false)
        },
        size: {
            type: String,
            default: () => ('medium')
        },
    },
    methods: {
        close() {
            this.$emit("close");
        },
        submit() {

            LanguageService.create(this.getFormData)
            .then(response => {
                this.languages = response.data;
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            });
        },
        getFile(files) {
            console.log(files);
            this.payload.icon = files[0]
        }
    },
    computed: {
        getFormData() {
            let formData = new FormData();
            for (let item in this.payload) {
                formData.append(item, this.payload[item]);
            }
            return formData;
        }
    }
}
</script>
