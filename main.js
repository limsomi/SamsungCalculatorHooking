

Java.perform(function () {

    console.log("\n======================================");
    console.log("Samsung Calculator Tracing Started");
    console.log("======================================\n");

    try {
      /*
       * Keypad 입력 추적
       * 버튼 클릭 시 어떤 버튼이 눌렸는지 확인
       */
        KeypadControllerHooks.KeypadController.hookOnClick();
        console.log("[HOOK] KeypadController.onClick");

      /*
       * UI 계산 실행
       * "=" 버튼 클릭 시 onEqual 호출
       */
        // TextControllerHooks.TextController.hookOnEqualPipeline();
        // console.log("[HOOK] TextController.onEqual");

        // AnalystUtilsHooks.AnalystUtils.hookInsertLog();
        // console.log("[HOOK] AnalystUtils.InsertLog");

        // TextControllerHooks.TextController.hookSetDisplayText();
        // console.log("[HOOK] TextController.setDisplayText");

        // TextControllerHooks.TextController.hookOnInsertText();
        // console.log("[HOOK] TextController.onInsertText");
      /*
       * 계산 엔진 시작
       */
        // CalculatorHooks.CalculatorLogic.hookCalculate();
        // console.log("[HOOK] CalculatorLogic.calculate");

      /*
       * 계산 파이프라인 추적
       */
    //   CalculatorHooks.CalculatorLogic.hookCalculatePipeline();
    //   console.log("[HOOK] CalculatorLogic Pipeline");

        // GetResultHooks.CalculateTool.hookGetResultPipeLine();
        // console.log("[HOOK] GetResult1");
        // GetResultHooks.CalculateTool.hookGetResult2PipeLine();
        // console.log("[HOOK] GetResult2");

      console.log("\n======================================");
      console.log("All Hooks Installed Successfully");
      console.log("======================================\n");
    } catch (err) {

        console.log("[ERROR] Hook initialization failed");
        console.log(err);

    }

});