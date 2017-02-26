// ./src/simpleMath.js
'use strict';

module.exports = (() => {

	class SimpleMath {

		constructor() {
		}

		add(input1, input2) {
			return {
				input: {
					input1: input1,
					input2: input2
				},
				result: input1 + input2
			}
		}

		subtract(input1, input2) {
			return {
				input: {
					input1: input1,
					input2: input2
				},
				result: input1 - input2
			}
		}

		square(input) {
			return {
				input: input,
				result: input * input
			};
		}

	}

	return SimpleMath;

})();
