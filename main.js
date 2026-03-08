

Java.perform(function () {

    console.log("\n======================================");
    console.log("Samsung Calculator Tracing Started");
    console.log("======================================\n");

    try {
      /* KeypadController Class Hook */
      KeypadControllerHooks.KeypadController.hookOnClick();
      console.log("[HOOK] KeypadController.onClick");

      /* TextController Class Hook */
      TextControllerHooks.TextController.hookOnEqualPipeline();
      console.log("[HOOK] TextController.onEqual");

      TextControllerHooks.TextController.hookOnInsertText();
      console.log("[HOOK] TextController.onInsertText");

      /* CalculatorLogic Class Hook */
      CalculatorHooks.CalculatorLogic.hookCalculate();
      console.log("[HOOK] CalculatorLogic.calculate");

      /* CalculatorTool Class Hook */
      GetResultHooks.CalculateTool.hookGetResultOfonInsertTextPipeLine();
      console.log("[HOOK] GetResult(Calling by onInsertText)");

      GetResultHooks.CalculateTool.hookGetResultPipeLine();
      console.log("[HOOK] GetResult");

      console.log("\n======================================");
      console.log("All Hooks Installed Successfully");
      console.log("======================================\n");
    } catch (err) {

        console.log("[ERROR] Hook initialization failed");
        console.log(err);

    }

});