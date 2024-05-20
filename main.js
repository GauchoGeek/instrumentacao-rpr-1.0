var app = new Vue({
    el: '#app',
    data: {
        instrumentos: [],
        novoInstrumento: {
            descricao: '',
            tag: ''
        }
    },
    methods: {
        adicionarInstrumento() {
            if (this.novoInstrumento.descricao && this.novoInstrumento.tag) {
                this.instrumentos.push(this.novoInstrumento);
                this.novoInstrumento = { descricao: '', tag: '' };
            }
        },
        removerInstrumento(id) {
            this.instrumentos = this.instrumentos.filter(instrumento => instrumento.id !== id);
        }
    },
    created() {
        this.instrumentos.id = 1;
    }
});
