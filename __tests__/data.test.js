const { TestScheduler } = require("jest");
const data = require("../pages/api/data");

describe("Testing data output", () => {
  test("Should return: A sample about text", () => {
    return data
      .getAboutData()
      .then((data) => expect(data).toMatch("A sample about text"));
  });
});

describe("Testing data output", () => {
  test("Should return: A sample FAQ text", () => {
    return data
      .getFaqData()
      .then((data) => expect(data).toMatch("A sample FAQ text"));
  });
});

describe("Testing data output", () => {
  test("Should return: A sample contact text", () => {
    return data
      .getContactData()
      .then((data) => expect(data).toMatch("A sample contact text"));
  });
});
