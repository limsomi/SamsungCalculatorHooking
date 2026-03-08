// 결과를 항상 0으로 반환
Java.perform(function () {
  var CalculatorLogic = Java.use(
    "com.sec.android.app.popupcalculator.common.logic.CalculatorLogic",
  );

  console.log("[*] CalculatorLogic Hook Loaded");

  /* calculate() */
  CalculatorLogic.calculate.overload("java.lang.String").implementation =
    function (str) {
      console.log(
        "\n================ CalculaotrLogic.calculate() START ================",
      );
      console.log("[INPUT] " + str);

      var originalResult;

      try {
        originalResult = this.calculate(str);
        console.log("[ORIGINAL RESULT] " + originalResult);
      } catch (e) {
        console.log("[EXCEPTION] " + e);
      }

      console.log("[MODIFIED RESULT] 0");
      console.log(
        "================ CalculaotrLogic.calculate() END ================\n",
      );

      return 0; // 결과를 항상 0으로 반환
    };
});
