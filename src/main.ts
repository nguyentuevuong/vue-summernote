import 'popper.js';
import 'bootstrap';
import 'summernote';

import Vue from 'vue';
import App from '@/App.vue';

// import control (register on global)
import '@/wysiwyg/index.vue';

Vue.config.productionTip = false;

new Vue({ render: h => h(App) }).$mount('#app');