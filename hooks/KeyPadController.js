const KeypadControllerHooks = {
  KeypadController: {
    /* 버튼 ID → 이름 매핑 */
    BUTTON_MAP: {
      0x7f09006e: "calc_keypad_btn_abs",
      0x7f09006f: "calc_keypad_btn_add",
      0x7f090070: "calc_keypad_btn_clear",
      0x7f090071: "calc_keypad_btn_cos",
      0x7f090072: "calc_keypad_btn_deg_rad",
      0x7f090073: "calc_keypad_btn_div",
      0x7f090074: "calc_keypad_btn_dot",
      0x7f090075: "calc_keypad_btn_e",
      0x7f090076: "calc_keypad_btn_e_x",
      0x7f090077: "calc_keypad_btn_equal",
      0x7f090078: "calc_keypad_btn_ln",
      0x7f090079: "calc_keypad_btn_log",
      0x7f09007a: "calc_keypad_btn_mul",
      0x7f09007b: "calc_keypad_btn_parenthesis",
      0x7f09007c: "calc_keypad_btn_percentage",
      0x7f09007d: "calc_keypad_btn_pie",
      0x7f09007e: "calc_keypad_btn_plusminus",
      0x7f09007f: "calc_keypad_btn_root",
      0x7f090080: "calc_keypad_btn_root_another_font_default",
      0x7f090081: "calc_keypad_btn_sin",
      0x7f090082: "calc_keypad_btn_sub",
      0x7f090083: "calc_keypad_btn_tan",
      0x7f090084: "calc_keypad_btn_x_2",
      0x7f090085: "calc_keypad_btn_x_y",
    },

    /* onClick Hook */
    hookOnClick: function () {
      const KeypadController = Java.use(
        "com.sec.android.app.popupcalculator.calc.controller.KeypadController",
      );

      console.log("[*] KeypadController.onClick Hook Loaded");

      const BUTTON_MAP = this.BUTTON_MAP;

      KeypadController.onClick.overload("int").implementation = function (id) {
        console.log("\n=========== onClick() START ===========");

        var buttonName = BUTTON_MAP[id] || "UNKNOWN_BUTTON";

        console.log("[BUTTON ID]   : " + id);
        console.log("[BUTTON NAME] : " + buttonName);

        /* 버튼 분기 확인 */
        if (buttonName === "calc_keypad_btn_equal") {
          console.log("[BRANCH] Equal Button");
          console.log("→ onEqual() will be called");
        } else if (buttonName === "calc_keypad_btn_clear") {
          console.log("[BRANCH] Clear Button");
          console.log("→ onClearText() will be called");
        } else if (buttonName === "calc_keypad_btn_deg_rad") {
          console.log("[BRANCH] DEG/RAD Toggle");
        } else {
          console.log("[BRANCH] Normal Input Button");
        }

        /* 원래 함수 실행 */
        var ret = this.onClick(id);

        console.log("=========== onClick() END ===========\n");

        return ret;
      };
    },
  },
};
