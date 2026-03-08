Java.perform(function () {

    var CalculatorLogic = Java.use(
        "com.sec.android.app.popupcalculator.common.logic.CalculatorLogic"
    );

    console.log("[*] CalculatorLogic Hook Loaded");

    /* calculate() */
    CalculatorLogic.calculate.overload('java.lang.String').implementation = function (str) {

        console.log("\n================ calculate() ================");
        console.log("[INPUT] " + str);

        var result;

        try {
            result = this.calculate(str);
            console.log("[RESULT] " + result);
        } catch (e) {
            console.log("[EXCEPTION] " + e);
            throw e;
        }

        console.log("=============================================\n");

        return result;
    };


    /* Tokenization */
    CalculatorLogic.transInfixStringExp2TokenExp.implementation = function () {

        console.log("[STEP] transInfixStringExp2TokenExp()");
        return this.transInfixStringExp2TokenExp();
    };


    /* Input validation */
    CalculatorLogic.checkInputToken.implementation = function () {

        console.log("[STEP] checkInputToken()");
        return this.checkInputToken();
    };


    /* Calculation validation */
    CalculatorLogic.checkCalculateToken.implementation = function () {

        console.log("[STEP] checkCalculateToken()");
        return this.checkCalculateToken();
    };


    /* Infix → Postfix */
    CalculatorLogic.infix2postfix.implementation = function () {

        console.log("[STEP] infix2postfix()");
        return this.infix2postfix();
    };


    /* Actual evaluation */
    CalculatorLogic.evaluateExp.implementation = function () {

        console.log("[STEP] evaluateExp()");
        return this.evaluateExp();
    };

});