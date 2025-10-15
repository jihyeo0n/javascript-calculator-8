import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  async run() {
    const input = await MissionUtils.Console.readLineAsync(
      "덧셈할 문자열을 입력해 주세요. \n"
    );
    let result = "";

    if (input === "") result = 0;
    if (input.includes(",") || input.includes(":")) {
      result = input.split(/,|:/).join("");
    }
    if(input.startsWith("//") && input.includes("\\n")) {
      const [delimiterPart, numbersPart] = input.split("\\n");
      const customDelimiter = delimiterPart.slice(2);
      const numbers = numbersPart.split(customDelimiter).map(Number);
      result = numbers.join("")
    }

    MissionUtils.Console.print(`결과 : ${result}`);
  }
}

export default App;
