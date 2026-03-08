Java.perform(function () {

    var CalculatorTool = Java.use(
        "com.sec.android.app.popupcalculator.common.logic.CalculateTool"
    );

    console.log("[*] CalculateTool Hook Loaded");

    CalculatorTool.getResult
        .overload('java.lang.String')
        .implementation = function (expr) {

        console.log("\n====== CalculateTool.getResult() ======");
        console.log("[INPUT STRING] : " + expr);

        // 원래 함수 실행
        var ret = this.getResult(expr);

        console.log("[RETURN OBJECT] : " + ret);

        try {

            console.log("----- CalculatorToolData Fields -----");

            console.log("DisplayedText  : " + ret.getDisplayedText());
            console.log("Result         : " + ret.getResult());
            console.log("ResultStr      : " + ret.getResultStr());
            console.log("ErrorCode      : " + ret.getErrorCode());
            console.log("IsCalcError    : " + ret.isCalculateError());

            console.log("-------------------------------------");

        } catch(e) {
            console.log("[ERROR reading fields] " + e);
        }

        console.log("======================================\n");
        
        return ret;
    };

});