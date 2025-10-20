import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  async run() {
    try {
      let input = await MissionUtils.Console.readLineAsync(
        "덧셈할 문자열을 입력해 주세요. \n"
      );

      input = input.replace("\\n", "\n");
      let result = "";

      if (input === "") result = 0;
      else if (input.includes(",") || input.includes(":")) {
        const numbers = input.split(/,|:/).map(Number);

        this.validateNumbers(numbers);
        result = numbers.reduce((acc, cur) => acc + cur, 0);
      } else if (input.startsWith("//") && input.includes("\n")) {
        const [delimiterPart, numbersPart] = input.split("\n");
        const customDelimiter = delimiterPart.slice(2);
        const numbers = numbersPart.split(customDelimiter).map(Number);

        this.validateNumbers(numbers);
        result = numbers.reduce((acc, cur) => acc + cur, 0);
      } else {
        const num = Number(input);
        this.validateNumbers([num]);
        result = num;
      }

      MissionUtils.Console.print(`결과 : ${result}`);
    } catch (error) {
      MissionUtils.Console.print(`[ERROR] ${error.message}`);
    }
  }

  validateNumbers(numbers) {
    numbers.forEach((num) => {
      if (isNaN(num) || !Number.isInteger(num) || num <= 0) {
        throw new Error("잘못된 입력입니다. 양수만 입력해 주세요.");
      }
    });
  }
}

export default App;