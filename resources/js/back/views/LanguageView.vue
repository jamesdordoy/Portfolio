<template>
    <div >
        <layout
            :title="payload.name">



            <form @submit.prevent="updateLanguage" slot="content" class="w-1/2 mx-auto mt-4">
                <div class="w-full flex">
                    <div class="w-full">
                        <form-group
                            title="Name">
                            <text-input
                                name="name"
                                v-model="payload.name"
                                placeholder="Name">
                            </text-input>
                        </form-group>
                    </div>
                </div>
                <div class="w-full flex">
                    <div class="w-full">
                        <form-group
                            title="Description">
                            <textarea-input
                                name="description"
                                v-model="payload.description">
                            </textarea-input>
                        </form-group>
                    </div>
                </div>
                <div class="w-full flex">
                    <div class="w-full">
                        <file-input-display
                            :src="imageSrc">
                        </file-input-display>
                    </div>
                </div>
                <div class="w-full flex mt-3">
                    <div class="w-1/2">
                        <file-input
                            @change="getFile">
                        </file-input>
                    </div>
                    <div class="w-1/2">
                        <outline-button
                            title="Submit"
                            type="submit"
                            classes="float-right">
                            <i class="fa fa-floppy-o" aria-hidden="true"></i>
                        </outline-button>
                    </div>
                </div>
            </form>
        </layout>
    </div>
</template>

<script>

    import LanguageService from '../../services/LanguageService';

    export default {
        data() {
            return {
                language: {},
                payload: {
                    name: '',
                    description: '',
                    image: '',
                },
                imageSrc: '',
            };
        },
        created() {
            this.getLanguage();
        },
        methods: {
            alertHi(data) {
                window.location = `/back/languages/${data.id}`
            },
            updateUrl(url) {
                this.url = url;
            },
            getLanguage() {
                LanguageService.find(this.$route.params.id)
                .then(response => {
                    this.language = response.data;
                    this.payload.name = this.language.name;
                    this.payload.description = this.language.description;

                    if (this.language.image) {
                        this.imageSrc = this.language.image.url;
                    }
                })
                .catch(error => {
                    alert("Something went wrong");
                });
            },
            updateLanguage() {

                let payload = new FormData;

                for (let key in this.payload) {
                    payload.append(key, this.payload[key]);
                }

                LanguageService.update(this.$route.params.id, payload)
                .then(response => {
                    this.$swal('Language Updated');
                })
                .catch(error => {
                    alert("Something went wrong");
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
        
    }
</script>
