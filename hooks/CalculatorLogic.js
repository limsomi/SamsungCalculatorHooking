const CalculatorHooks = {

    CalculatorLogic: {

        hookCalculate: function () {
            const CalculatorLogic = Java.use(
                "com.sec.android.app.popupcalculator.common.logic.CalculatorLogic"
            );

            CalculatorLogic.calculate.overload('java.lang.String').implementation = function (str) {

                console.log("\n================ calculate() ================");
                console.log("[INPUT] " + str);

                var result = this.calculate(str);

                console.log("[RESULT] " + result);
                console.log("=============================================\n");

                return result;
            };
        },

        hookCalculatePipeline: function () {

            const CalculatorLogic = Java.use(
                "com.sec.android.app.popupcalculator.common.logic.CalculatorLogic"
            );

            CalculatorLogic.transInfixStringExp2TokenExp.implementation = function () {
                console.log("transInfixStringExp2TokenExp()");
                return this.transInfixStringExp2TokenExp();
            };

            CalculatorLogic.checkInputToken.implementation = function () {
                console.log("checkInputToken()");
                return this.checkInputToken();
            };

            CalculatorLogic.checkCalculateToken.implementation = function () {
                console.log("checkCalculateToken()");
                return this.checkCalculateToken();
            };

            CalculatorLogic.infix2postfix.implementation = function () {
                console.log("infix2postfix()");
                return this.infix2postfix();
            };

            CalculatorLogic.evaluateExp.implementation = function () {
                console.log("evaluateExp()");
                return this.evaluateExp();
            };
        }
    }

};