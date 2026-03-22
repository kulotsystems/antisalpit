window.AntiSalpit = {
    /** TEMPLATE */
    template: '#AntiSalpit',


    /** COMPONENTS */
    components: {
        Inputs
    },


    /** PROPS */
    props: {

    },


    /** DATA */
    data() {
        return {
            min   : 0,
            max   : 0,
            input1: 0,
            input2: 0,
            pairs : {}
        }
    },


    /** COMPUTED */
    computed: {
        /**
         * @computed activePairs
         * @description The active pairs.
         * @returns {Object}
         */
        activePairs() {
            const pairs  = {};
            const pairs1 = this.fetchPairs(this.input1);
            for (const key in pairs1) {
                pairs[key] = pairs1[key];
            }
            const pairs2 = this.fetchPairs(this.input2);
            for (const key in pairs2) {
                pairs[key] = pairs2[key];
            }

            return pairs;
        }
    },


    /** WATCHERS */
    watch: {

    },


    /** METHODS */
    methods: {
        /**
         * @method processInputs
         * @description Process the submitted inputs.
         * @param {number} min
         * @param {number} max
         * @param {number} input1
         * @param {number} input2
         */
        processInputs(min, max, input1, input2) {
            this.min    = min;
            this.max    = max;
            this.input1 = input1;
            this.input2 = input2;
            this.registerPairs(min, max, input1);
            this.registerPairs(min, max, input2);
        },

        /**
         * @method registerPairs
         * @description Register number pairs for the given input.
         * @param {number} min
         * @param {number} max
         * @param {number} input
         */
        registerPairs(min, max, input) {
            for (let i = min; i <= max; i++) {
                const key1 = `${input}-${i}`;
                const key2 = `${i}-${input}`;
                let   key  = key1;
                let   n1 = input;
                let   n2 = i;
                let   on = true;
                if (key1 in this.pairs) {
                    key = key1;
                    const pair = this.pairs[key];
                    n1  = pair.n1;
                    n2  = pair.n2;
                    on  = pair.on;
                }
                else if (key2 in this.pairs) {
                    key = key2;
                    const pair = this.pairs[key];
                    n1  = pair.n1;
                    n2  = pair.n2;
                    on  = pair.on;
                }
                this.pairs[key] = { n1, n2, on };
            }
        },

        /**
         * @method fetchPairs
         * @description Fetch pairs of the given input.
         * @param {number} input
         * @returns {Object}
         */
        fetchPairs(input) {
            const pairs = {};
            for (let i = this.min; i <= this.max; i++) {
                const key1 = `${input}-${i}`;
                const key2 = `${i}-${input}`;
                if (key1 in this.pairs) {
                    pairs[key1] = this.pairs[key1];
                }
                else if (key2 in this.pairs) {
                    pairs[key2] = this.pairs[key2];
                }
            }

            return pairs;
        },

        /**
         * @method togglePair
         * @description Toggle given pair.
         * @param {Object} pair
         */
        togglePair(pair) {
            pair.on = !pair.on;
            const btnPair = document.querySelector(`#pair-${pair.n1}-${pair.n2}`);
            if (btnPair) {
                btnPair.blur();
            }
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