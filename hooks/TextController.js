const TextControllerHooks = {
  TextController: {
    /* onEqual() Hook */

    hookOnEqual: function () {
      const TextController = Java.use(
        "com.sec.android.app.popupcalculator.calc.controller.TextController",
      );

      TextController.onEqual.implementation = function () {
        console.log("[*] TextController.onEqual Hook Loaded");
        var ret = this.onEqual();
        return ret;
      }


    },

    hookOnEqualPipeline: function () {
      const TextController = Java.use(
        "com.sec.android.app.popupcalculator.calc.controller.TextController",
      );

      console.log("[*] TextController.onEqual Hook Loaded");

      TextController.onEqual.implementation = function () {
        console.log("\n=========== onEqual() START ===========");

        /* Display text 확인 */
        var displayText = this.getDisplayText();
        console.log("Call getDisplayText() Function");
        console.log("INPUT EXPRESSION: " + displayText);

        if (displayText.length == 0) {
          console.log("Empty expression -> return");
          return;
        }

        /* Animation 확인 */
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
        console.log("Call mCalculateTool.getResult() Function");

        var result = this.mCalculateTool.value.getResult(displayText);

        console.log("----- Calculation Result(CalculateToolData) -----");
        console.log("DisplayedText : " + result.getDisplayedText());
        console.log("ResultDouble  : " + result.getResult());
        console.log("ResultString  : " + result.getResultStr());
        console.log("ErrorCode     : " + result.getErrorCode());
        console.log("------------------------------");

        /* 원래 함수 실행 */
        var ret = this.onEqual();

        console.log("UI result update");

        console.log("=========== onEqual() END ===========\n");

        return ret;
      };
    },


    hookOnInsertText: function(){
      var TextController = Java.use(
        "com.sec.android.app.popupcalculator.calc.controller.TextController"
      );

      
      TextController.onInsertText
      .overload('java.lang.String')
      .implementation = function (text) {
          console.log("[*] onInsertText Hook Loaded");
          var ret = this.onInsertText(text);
          return ret;
        }
    },

    hookSetDisplayText: function(){
      var TextController = Java.use(
        "com.sec.android.app.popupcalculator.calc.controller.TextController"
      );

      
      TextController.setDisplayText
      .overload('java.lang.String')
      .implementation = function (text) {
        console.log("[*] setDisplayText Hook Loaded");
        console.log("\n====== setDisplayText() ======");
        
        try {
            console.log("[OLD DISPLAY TEXT] : " + this.getDisplayText());
        } catch (e) {}

        console.log("[NEW DISPLAY TEXT] : " + text);

        var ret = this.setDisplayText(text);

        try {
            console.log("[APPLIED DISPLAY TEXT] : " + this.getDisplayText());
        } catch (e) {}

        console.log("====== END setDisplayText() ======\n");

        return ret;
      };


    }
  },
};
