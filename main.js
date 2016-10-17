import Vue from 'vue';
import Checkbox from './src/Checkbox.vue';

new Vue({
    el: '#app',
    components: {
        [Checkbox.tagName]: Checkbox
    },
    data: {
        phones: [
            {id: 1, text: '小米'},
            {id: 2, text: '苹果'},
            {id: 3, text: '三星'}
        ],
        selected: []
    }
});