import $ from 'jquery';

import { Vue, Component, Prop } from 'vue-property-decorator';

@Component
export default class WysiwygComponent extends Vue {
    @Prop({ default: () => '' })
    public readonly value!: string;

    public mounted() {
        const vm = this;

        $(vm.$el)
            .summernote({
                height: 250,
                toolbar: [
                    ['style', ['bold', 'italic', 'underline', 'clear']],
                    ['font', ['strikethrough', 'superscript', 'subscript']],
                    ['font', ['fontname', 'fontsize']],
                    ['color', ['color']],
                    ['para', ['ul', 'ol', 'paragraph']],
                    ['height', ['height']],
                    ['view', ['fullscreen', 'codeview', 'help']]
                ],
                // fontNames: ['Arial', 'Arial Black', 'Comic Sans MS', 'Courier New'],
            })
            // emit out content
            .on('summernote.change', function (_, contents) {
                vm.$emit('input', contents);
            });
    }

    public destroyed() {
        const vm = this;

        $(vm.$el).summernote('destroy');
    }
}

Vue.component('v-wysiwyg', WysiwygComponent);

// configs any thing same at here
// https://summernote.org/deep-dive/