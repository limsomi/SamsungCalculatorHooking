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

    hookGetResult2PipeLine: function(){
        const CalculateTool = Java.use(
          "com.sec.android.app.popupcalculator.common.logic.CalculateTool",
        );
        /* onInsertText() */
        const getResult2 = CalculateTool.getResult.overload(
            "java.lang.String",
            "int",
            "int",
            "java.lang.String",
            "boolean",
            "boolean"
        );

        getResult2.implementation = function (
            expr, iMin, iMax, input, resultFlag, lockScreen
        ) {

          console.log("\n====== getResult(Calling by onInsertText) ======");
          console.log("[CALL PATH] onInsertText()");
          console.log("[CURRENT EXPRESSION] : " + expr);
          console.log("[INPUT TEXT] : " + input);
          console.log("[CURSOR START] : " + iMin);
          console.log("[CURSOR END] : " + iMax);

          var ret = getResult2.call(
              this,
              expr, iMin, iMax, input, resultFlag, lockScreen
          );

          console.log("ResultStr : " + ret.getResultStr());
          console.log("======================================");

          return ret;
        };
    },

    hookGetResultPipeLine: function () {
      const CalculateTool = Java.use(
        "com.sec.android.app.popupcalculator.common.logic.CalculateTool",
      );

       const getResult1 = CalculateTool.getResult.overload("java.lang.String");

        getResult1.implementation = function (expr) {

          console.log("\n====== getResult ======");
          console.log("[CALL PATH] onEqual()");
          console.log("[INPUT EXPRESSION] : " + expr);

          var ret = getResult1.call(this, expr);

          console.log("ResultStr : " + ret.getResultStr());
          console.log("================================");

          return ret;
        };
    },
  },
};
