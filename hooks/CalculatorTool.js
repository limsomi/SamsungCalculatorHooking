const GetResultHooks = {
  CalculateTool: {
    hookGetResult: function () {
      const CalculateTool = Java.use(
        "com.sec.android.app.popupcalculator.common.logic.CalculateTool",
      );

      CalculateTool.getResult.overload("java.lang.String").implementation =
        function (str) {
          console.log("[*] CaculateTool.getResult() Hook Loaded");
          var ret = this.onEqual();
          return ret;
        };
    },

    hookGetResultOfonInsertTextPipeLine: function(){
      const CalculateTool = Java.use(
        "com.sec.android.app.popupcalculator.common.logic.CalculateTool",
      );
      /* onInsertText() 용도*/
      const getResultOfonInsertText = CalculateTool.getResult.overload(
        "java.lang.String",
        "int",
        "int",
        "java.lang.String",
        "boolean",
        "boolean",
      );

      getResultOfonInsertText.implementation = function (
        expr,
        iMin,
        iMax,
        input,
        resultFlag,
        lockScreen,
      ) {
        console.log("[*] CalculateTool.getResult() Hook Loaded");
        console.log("\n====== CalculateTool.getResult() START(Calling by onInsertText) ======");
        console.log("[CURRENT EXPRESSION] : " + expr);
        console.log("[INPUT TEXT] : " + input);
        console.log("[CURSOR START] : " + iMin);
        console.log("[CURSOR END] : " + iMax);

        var ret = getResultOfonInsertText.call(
          this,
          expr,
          iMin,
          iMax,
          input,
          resultFlag,
          lockScreen,
        );

        console.log("ResultStr : " + ret.getResultStr());
        console.log("====== CalculateTool.getResult() END(Calling by onInsertText) ======");

        return ret;
      };
    },

    hookGetResultPipeLine: function () {
      const CalculateTool = Java.use(
        "com.sec.android.app.popupcalculator.common.logic.CalculateTool",
      );

       const getResult = CalculateTool.getResult.overload("java.lang.String");

        getResult.implementation = function (expr) {
          console.log("[*] CalculateTool.getResult() Hook Loaded");
          console.log("\n====== CalcualteTool.getResult() START ======");
          console.log("[INPUT EXPRESSION] : " + expr);

          var ret = getResult.call(this, expr);

          console.log("ResultStr : " + ret.getResultStr());
          console.log("====== CalcualteTool.getResult() END ======");

          return ret;
        };
    },
  },
};
