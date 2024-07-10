import { getIdFromUrl } from "./getIdFromUrl";

describe("getIdFromUrl", () => {
  it("should return the ID from a URL with a trailing slash", () => {
    const url = "https://example.com/resource/12345/";
    const id = getIdFromUrl(url);
    expect(id).toBe("12345");
  });

  it("should return the ID from a URL without a trailing slash", () => {
    const url = "https://example.com/resource/12345";
    const id = getIdFromUrl(url);
    expect(id).toBe("12345");
  });

  it("should return the ID for a URL with multiple path segments", () => {
    const url = "https://example.com/resource/category/12345/";
    const id = getIdFromUrl(url);
    expect(id).toBe("12345");
  });

  it("should throw an error for an invalid URL", () => {
    const url = "invalid-url";
    expect(() => getIdFromUrl(url)).toThrow(TypeError);
  });
});
