const TextControllerHooks = {
  TextController: {
    /* onEqual() Hook */
    hookOnEqual: function () {
      const TextController = Java.use(
        "com.sec.android.app.popupcalculator.calc.controller.TextController",
      );

      console.log("[*] TextController.onEqual Hook Loaded");

      TextController.onEqual.implementation = function () {
        console.log("\n=========== onEqual() START ===========");

        /* Display text 확인 */
        var displayText = this.getDisplayText();
        console.log("getDisplayText()");
        console.log("INPUT EXPRESSION: " + displayText);

        if (displayText.length == 0) {
          console.log("Empty expression -> return");
          return;
        }

        /* Animation 확인 */
        console.log("Animation check");
        if (this.mAnimation.value) {
          console.log("Animation running -> cancelEnterAnimation()");
          this.cancelEnterAnimation();
        }

        /* ResultFlag 처리 */
        if (this.mResultFlag.value) {
          console.log("ResultFlag true -> recalculation");

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

        /* 실제 계산 호출 */
        console.log("mCalculateTool.getResult()");

        var result = this.mCalculateTool.value.getResult(displayText);

        console.log("----- Calculation Result -----");
        console.log("DisplayedText : " + result.getDisplayedText());
        console.log("ResultDouble  : " + result.getResult());
        console.log("ResultString  : " + result.getResultStr());
        console.log("ErrorCode     : " + result.getErrorCode());
        console.log("------------------------------");

        /* 원래 함수 실행 */
        var ret = this.onEqual();

        console.log("[STEP 5] UI result update");

        console.log("=========== onEqual() END ===========\n");

        return ret;
      };;
    },
  },
};
