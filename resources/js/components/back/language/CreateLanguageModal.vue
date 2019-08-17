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

                    <file-input-display
                        :src="imageSrc">
                    </file-input-display>
                    
                    <div class="w-1/2 p-6">
                        <file-input
                            @change="getFile"
                            name="icon">
                        </file-input>
                    </div>
                </div>

                <outline-button
                    title="Submit"
                    type="submit"
                    classes="float-right">
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
                image: {},
            },
            imageSrc: '',
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
                this.close()
                this.$swal("Language Created");
                this.$emit("created");
            })
            .catch(error => {
                
            });
        },
        getFile(file) {
            this.payload.image = file;
            this.renderImage(file);
        },
        renderImage(file) {
            let reader = new FileReader;

            reader.onload = (e) => {
                this.imageSrc = e.target.result;
            }
            
            reader.readAsDataURL(file);
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
