import {Widgets} from "./pages/Widgets";

describe("sum testing", () => {
  let widget = new Widgets();
  beforeEach(async () => {
    await widget.navigate();
  });
  afterAll(async () => {
    await widget.driver.quit();
  });
  test("can get the sum of two numbers", async () => {  
    await widget.setSumInput(6,6);
    await widget.driver.sleep(2500);
    let results = await widget.getSum();
    expect(results).toEqual("Sum: 12");
  });
});