window.Inputs = {
    /** TEMPLATE */
    template: '#Inputs',


    /** COMPONENTS */
    components: {

    },


    /** PROPS */
    props: {

    },


    /** DATA */
    data() {
        return {
            min   : 1,
            max   : 40,
            input1: null,
            input2: null
        }
    },


    /** COMPUTED */
    computed: {
        /**
         * @computed isEmptyInput1
         * @description Checks if input1 is empty.
         * @returns {boolean}
         */
        isEmptyInput1() {
            return this.input1 === null || this.input1 === '';
        },

        /**
         * @computed isEmptyInput2
         * @description Checks if input2 is empty.
         * @returns {boolean}
         */
        isEmptyInput2() {
            return this.input2 === null || this.input2 === '';
        },

        /**
         * @computed isValidInput1
         * @description Checks if input1 is valid.
         * @returns {boolean}
         */
        isValidInput1() {
            return !this.isEmptyInput1 && this.isNumberValid(this.input1);
        },

        /**
         * @computed isValidInput2
         * @description Checks if input2 is valid.
         * @returns {boolean}
         */
        isValidInput2() {
            return !this.isEmptyInput2 && this.isNumberValid(this.input2);
        }
    },


    /** WATCHERS */
    watch: {

    },


    /** METHODS */
    methods: {
        /**
         * @method go
         * @description Process inputs
         */
        go() {
            // validate inputs
            if (!this.isEmptyInput1 && !this.isEmptyInput2) {
                if (!this.isValidInput1) {
                    alert(`Numero #1 (${this.input1}) is invalid.\n\nAllowed inputs: ${this.min} - ${this.max}`);
                }
                else if (!this.isValidInput2) {
                    alert(`Numero #2 (${this.input2}) is invalid.\n\nAllowed inputs: ${this.min} - ${this.max}`);
                }
                // emit inputs
                else {
                    this.$emit('submitInputs', this.min, this.max, this.input1, this.input2);
                }
            }
        },

        /**
         * @method isNumberValid
         * @description Checks if a given number is valid.
         * @param {number|string|null} number
         */
        isNumberValid(number) {
            let result = false;
            if (number !== null) {
                number = parseInt(number);
                if (number === number) { // NaN check
                    result = number >= this.min && number <= this.max;
                }
            }

            return result;
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