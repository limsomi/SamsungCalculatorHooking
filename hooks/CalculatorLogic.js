const CalculatorHooks = {
  CalculatorLogic: {
    /*CalculatorLogic.calcualte Hook*/
    hookCalculate: function () {
      const CalculatorLogic = Java.use(
        "com.sec.android.app.popupcalculator.common.logic.CalculatorLogic",
      );

      CalculatorLogic.calculate.overload("java.lang.String").implementation =
        function (str) {
          console.log(
            "\n================ CalculatorLogic.calculate() START ================",
          );
          console.log("[INPUT] " + str);

          var result = this.calculate(str);

          console.log("[RESULT] " + result);
          console.log(
            "=========== CalculatorLogic.calculate() END ===========\n",
          );

          return result;
        };
    },

    /* CalculatorLogic.calculate Hook */
    hookCalculatePipeline: function () {
      const CalculatorLogic = Java.use(
        "com.sec.android.app.popupcalculator.common.logic.CalculatorLogic",
      );
      /*입력된 수식 문자열을 Token 단위로 변환*/
      CalculatorLogic.transInfixStringExp2TokenExp.implementation =
        function () {
          console.log(
            "[*] CalculatorLogic.transInfixStringExp2TokenExp() Hook Loaded",
          );
          return this.transInfixStringExp2TokenExp();
        };
      /*입력 토큰의 문법적 유효성 검사*/
      CalculatorLogic.checkInputToken.implementation = function () {
        console.log("[*] CalculatorLogic.checkInputToken() Hook Loaded");
        return this.checkInputToken();
      };
      /*계산 수행 가능 여부 검증*/
      CalculatorLogic.checkCalculateToken.implementation = function () {
        console.log("[*] CalculatorLogic.checkCalculateToken() Hook Loaded");
        return this.checkCalculateToken();
      };
      /*Shunting-yard 알고리즘을 사용하여 중위 표현을 후회 표현으로 반환*/
      CalculatorLogic.infix2postfix.implementation = function () {
        console.log("[*] CalculatorLogic.infix2postfix() Hook Loaded");
        return this.infix2postfix();
      };
      /*후회 표현식을 기반으로 실제 계산 수행*/
      CalculatorLogic.evaluateExp.implementation = function () {
        console.log("[*] CalculatorLogic.evaluateExp() Hook Loaded");
        return this.evaluateExp();
      };
    },
  },
};
