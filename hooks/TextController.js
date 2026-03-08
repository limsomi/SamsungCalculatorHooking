const TextControllerHooks = {
  TextController: {
    /* TextController.onEqual Hook */
    hookOnEqual: function () {
      const TextController = Java.use(
        "com.sec.android.app.popupcalculator.calc.controller.TextController",
      );

      TextController.onEqual.implementation = function () {
        console.log("[*] TextController.onEqual() Hook Loaded");
        var ret = this.onEqual();
        return ret;
      };
    },

    /* TextController.onEqual 전체 흐름 파악용 -> '=' 버튼 누를 때 호출*/
    hookOnEqualPipeline: function () {
      const TextController = Java.use(
        "com.sec.android.app.popupcalculator.calc.controller.TextController",
      );

      TextController.onEqual.implementation = function () {
        console.log("[*] TextController.onEqual() Hook Loaded");
        console.log("\n=========== TextController.onEqual() START ===========");

        /* 원래 함수 실행 */
        var ret = this.onEqual();

        console.log("=========== TextController.onEqual() END ===========\n");

        return ret;
      };
    },

    /*실시간 계산 함수*/
    hookOnInsertText: function () {
      var TextController = Java.use(
        "com.sec.android.app.popupcalculator.calc.controller.TextController",
      );

      TextController.onInsertText.overload("java.lang.String").implementation =
        function (text) {
          console.log("[*] TextController.onInsertText() Hook Loaded");
          var ret = this.onInsertText(text);
          return ret;
        };
    },

    hookOnInsertTextPipeline: function () {
      var TextController = Java.use(
        "com.sec.android.app.popupcalculator.calc.controller.TextController",
      );

      TextController.onInsertText.overload("java.lang.String").implementation =
        function (text) {
          console.log("[*] TextController.onInsertText() Hook Loaded");
          console.log(
            "\n=========== TextController.onInsertText() START ===========",
          );

          /* 원래 함수 실행 */
          var ret = this.onInsertText(text);

          console.log(
            "=========== TextController.onInsertText() END ===========\n",
          );
          return ret;
        };
    },

    // hookSetDisplayText: function () {
    //   var TextController = Java.use(
    //     "com.sec.android.app.popupcalculator.calc.controller.TextController",
    //   );

    //   TextController.setDisplayText.overload(
    //     "java.lang.String",
    //   ).implementation = function (text) {
    //     console.log("[*] setDisplayText Hook Loaded");
    //     console.log("\n====== setDisplayText() ======");

    //     try {
    //       console.log("[OLD DISPLAY TEXT] : " + this.getDisplayText());
    //     } catch (e) {}

    //     console.log("[NEW DISPLAY TEXT] : " + text);

    //     var ret = this.setDisplayText(text);

    //     try {
    //       console.log("[APPLIED DISPLAY TEXT] : " + this.getDisplayText());
    //     } catch (e) {}

    //     console.log("====== END setDisplayText() ======\n");

    //     return ret;
    //   };
    // },
  },
};
