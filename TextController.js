Java.perform(function () {

    var Calculator = Java.use(
        "com.sec.android.app.popupcalculator.calc.controller.TextController"
    );

    console.log("[*] onEqual Hook Loaded");

    Calculator.onEqual.implementation = function () {

        console.log("\n=========== onEqual() START ===========");

        /* STEP 1: Display text 확인 */
        var displayText = this.getDisplayText();
        console.log("[STEP 1] getDisplayText()");
        console.log("INPUT EXPRESSION: " + displayText);

        if (displayText.length == 0) {
            console.log("[STEP 1] Empty expression -> return");
            return;
        }

        /* STEP 2: Animation 확인 */
        console.log("[STEP 2] Animation check");
        if (this.mAnimation.value) {
            console.log("Animation running -> cancelEnterAnimation()");
            this.cancelEnterAnimation();
        }

        /* STEP 3: ResultFlag 처리 */
        if (this.mResultFlag.value) {

            console.log("[STEP 3] ResultFlag true -> recalculation");

            var prevFormula = this.getPrevFormulaBackup();
            console.log("Prev formula: " + prevFormula);

            var recalc = this.getReCalculationText(prevFormula);
            console.log("ReCalculationText: " + recalc);

            if (recalc.length == 0) {
                console.log("ReCalculationText empty -> return");
                return;
            }

            displayText = displayText + recalc;
            console.log("Updated Expression: " + displayText);
        }

        /* STEP 4: 실제 계산 호출 */
        console.log("[STEP 4] mCalculateTool.getResult()");

        var result = this.mCalculateTool.value.getResult(displayText);

        console.log("----- Calculation Result -----");
        console.log("DisplayedText : " + result.getDisplayedText());
        console.log("ResultDouble  : " + result.getResult());
        console.log("ResultString  : " + result.getResultStr());
        console.log("ErrorCode     : " + result.getErrorCode());
        console.log("------------------------------");

        /* 원래 함수 동작 유지 */
        var ret = this.onEqual();

        console.log("[STEP 5] UI result update");

        console.log("=========== onEqual() END ===========\n");

        return ret;
    };

});