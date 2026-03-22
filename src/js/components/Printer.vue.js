window.Printer = {
    /** TEMPLATE */
    template: '#Printer',


    /** COMPONENTS */
    components: {

    },


    /** PROPS */
    props: {
        pairs: {
            type: Object,
            required: true
        },
        min: {
            type: Number,
            required: true
        },
        max: {
            type: Number,
            required: true
        },
        input1: {
            type: Number,
            required: true
        },
        input2: {
            type: Number,
            required: true
        }
    },


    /** DATA */
    data() {
        return {
            nCols: 3
        }
    },


    /** COMPUTED */
    computed: {
        /**
         * @computed pairCols
         * @description Pair in columns.
         * @returns {Array}
         */
        pairCols() {
            const cols = [];
            const keys = Object.keys(this.pairs);
            const nRows = Math.ceil(keys.length / this.nCols);
            let ctr = -1;
            for (let i = 0; i < this.nCols; i++) {
                const col = [];
                let done = false;
                for (let j = 0; j < nRows; j++) {
                    ctr += 1;
                    if (ctr < keys.length) {
                        const key = keys[ctr];
                        col.push({
                            num : ctr + 1,
                            pair: this.pairs[key]
                        });
                    }
                    else {
                        done = true;
                        break;
                    }
                }
                if (col.length > 0) {
                    cols.push(col);
                }
                if (done) {
                    break;
                }
            }

            return cols;
        },

        /**
         * @computed colClass
         * @description Column size
         * @returns {number}
         */
        colClass() {
            return Math.floor(12 / this.nCols);
        }
    },


    /** WATCHERS */
    watch: {

    },


    /** METHODS */
    methods: {
        /**
         * @method print
         * @description Execute print.
         */
        print() {
            const printContents = document.getElementById('print-pairs').innerHTML;
            const printWindow = window.open('', '', 'width=800, height=600');

            printWindow.document.open();
            printWindow.document.write(`
            <html lang="en">
                <head>
                    <link rel="stylesheet" href="dist/bootstrap-5.3.8/css/bootstrap.min.css"/>
                    <title>Print</title>
                </head>
                <body>
                    ${printContents}
                </body>
            </html>`);
            printWindow.document.close();

            printWindow.focus();
            printWindow.print();
            printWindow.close();
        }
    },


    /** CREATED HOOK */
    created() {

    },


    /** MOUNTED HOOK */
    mounted() {

    },


    /** BEFORE UNMOUNT HOOK*/
    beforeUnmount() {

    }
}