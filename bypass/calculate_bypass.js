Java.perform(function () {

    var CalculatorLogic = Java.use(
        "com.sec.android.app.popupcalculator.common.logic.CalculatorLogic"
    );

    console.log("[*] CalculatorLogic Hook Loaded");

    /* calculate() */
    CalculatorLogic.calculate.overload('java.lang.String').implementation = function (str) {

        console.log("\n================ calculate() ================");
        console.log("[INPUT] " + str);

        var originalResult;

        try {
            originalResult = this.calculate(str);
            console.log("[ORIGINAL RESULT] " + originalResult);
        } catch (e) {
            console.log("[EXCEPTION] " + e);
        }

        console.log("[MODIFIED RESULT] 0");
        console.log("=============================================\n");

        return 0;   // 결과를 항상 0으로 반환
    };


    /* Tokenization */
    CalculatorLogic.transInfixStringExp2TokenExp.implementation = function () {
        console.log("transInfixStringExp2TokenExp()");
        return this.transInfixStringExp2TokenExp();
    };

    /* Input validation */
    CalculatorLogic.checkInputToken.implementation = function () {
        console.log("checkInputToken()");
        return this.checkInputToken();
    };

    /* Calculation validation */
    CalculatorLogic.checkCalculateToken.implementation = function () {
        console.log("checkCalculateToken()");
        return this.checkCalculateToken();
    };

    /* Infix → Postfix */
    CalculatorLogic.infix2postfix.implementation = function () {
      console.log("infix2postfix()");
      return this.infix2postfix();
    };

    /* Actual evaluation */
    CalculatorLogic.evaluateExp.implementation = function () {
      console.log("evaluateExp()");
      return this.evaluateExp();
    };

});