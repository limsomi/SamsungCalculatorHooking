// 결과를 원하는 문자열로 변경
Java.perform(function () {
  var CalculatorTool = Java.use(
    "com.sec.android.app.popupcalculator.common.logic.CalculateTool",
  );

  var CalculatorToolData = Java.use(
    "com.sec.android.app.popupcalculator.common.logic.CalculatorToolData",
  );

  console.log("[*] CalculateTool Hook Loaded");

  CalculatorTool.getResult.overload("java.lang.String").implementation =
    function (expr) {
      console.log("\n====== CalculateTool.getResult() START ======");
      console.log("[INPUT STRING] : " + expr);

      var ret = this.getResult(expr);

      console.log("Original ResultStr : " + ret.getResultStr());

      // 기존 값들
      var displayedText = ret.getDisplayedText();
      var result = ret.getResult();
      var errorCode = ret.getErrorCode();
      var isError = ret.isCalculateError();

      // 변경할 문자열
      var newStr = "DFRC_FILESYSTEM_SEMINAR_ANDROID";

      console.log("Modified ResultStr : " + newStr);

      // 새 객체 생성
      var newObj = CalculatorToolData.$new(
        displayedText,
        result,
        newStr,
        isError,
        errorCode,
      );

      console.log("====== CalculateTool.getResult() END ======\n");

      return newObj;
    };
});
