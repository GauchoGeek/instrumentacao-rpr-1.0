var app = new Vue({
    el: '#app',
    data: {
        instrumentos: [],
        novoInstrumento: {
            descricao: '',
            tag: '',
            id: 0
        }
    },
    methods: {
        adicionarInstrumento() {
            if (this.novoInstrumento.descricao && this.novoInstrumento.tag) {
                this.novoInstrumento.id = Date.now(); // Gerar um ID único
                this.instrumentos.push(this.novoInstrumento);
                this.novoInstrumento = { descricao: '', tag: '', id: 0 };
            }
        },
        removerInstrumento(id) {
            this.instrumentos = this.instrumentos.filter(instrumento => instrumento.id !== id);
        }
    }
});
