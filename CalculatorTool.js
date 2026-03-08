const GetResultHooks = {

    CalculatorTooldata: {

        hookGetResult: function () {
            const CalculatorTool = Java.use(
                "com.sec.android.app.popupcalculator.common.logic.CalculatorTool"
            );

            CalculatorTool.getResult.overload('java.lang.String').implementation = function (str) {

                console.log("\n================ getResult() ================");
                console.log("[INPUT] " + str);

                var ret = this.getResult(expr);

                console.log("[RESULT] " + ret);
                console.log("=============================================\n");

                return result;
            };
        },
    }

};