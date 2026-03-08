const GetResultHooks = {
  CalculateTool: {
    hookGetResult: function () {
      const CalculateTool = Java.use(
        "com.sec.android.app.popupcalculator.common.logic.CalculateTool",
      );

      CalculateTool.getResult.overload("java.lang.String").implementation =
        function (str) {
          console.log("[*] CaculateTool.getResult Hook Loaded");
          var ret = this.onEqual();
          return ret;
        };
    },

    hookGetResultPipeLine: function () {
      const CalculateTool = Java.use(
        "com.sec.android.app.popupcalculator.common.logic.CalculateTool",
      );

      CalculateTool.getResult.overload("java.lang.String").implementation =
        function (str) {
          console.log("\n================ getResult() ================");
          console.log("[INPUT] " + str);

          var ret = this.getResult(str);

          try {
            console.log("----- CalculatorToolData Fields -----");

            console.log("DisplayedText  : " + ret.getDisplayedText());
            console.log("Result         : " + ret.getResult());
            console.log("ResultStr      : " + ret.getResultStr());
            console.log("ErrorCode      : " + ret.getErrorCode());
            console.log("IsCalcError    : " + ret.isCalculateError());

            console.log("-------------------------------------");
          } catch (e) {
            console.log("[ERROR reading fields] " + e);
          }
          console.log("=============================================\n");

          return ret;
        };
    },
  },
};
