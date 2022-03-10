import { createIframe } from "../src/iframe";

describe("createIframe", () => {
  it("should create a valid iframe element", () => {
    expect.assertions(3);
    const iframeElement = createIframe({
      publishId: "typebot-id",
    });
    expect(iframeElement.tagName).toBe("IFRAME");
    expect(iframeElement.getAttribute("data-id")).toBe("typebot-id");
    expect(iframeElement.getAttribute("src")).toBe(
      "https://typebot-viewer.vercel.app/typebot-id?hn=localhost"
    );
  });

  it("should parse the right src prop if custom domain and starterVariables", () => {
    expect.assertions(1);
    const iframes = [
      createIframe({
        publishId: "typebot-id",
        hiddenVariables: { var1: "value1", var2: "value2", var3: undefined },
      }),
    ];
    expect(iframes[0].getAttribute("src")).toBe(
      "https://typebot-viewer.vercel.app/typebot-id?hn=localhost&var1=value1&var2=value2"
    );
  });

  it("should have a custom background color if defined", () => {
    expect.assertions(1);
    const iframeElement = createIframe({
      publishId: "typebot-id",
      backgroundColor: "green",
    });
    expect(iframeElement.style.backgroundColor).toBe("green");
  });

  it("should have a lazy loading behavior if defined", () => {
    expect.assertions(2);
    const iframeElement = createIframe({
      publishId: "typebot-id",
      loadWhenVisible: true,
    });
    expect(iframeElement.getAttribute("data-src")).toBe(
      "https://typebot-viewer.vercel.app/typebot-id?hn=localhost"
    );
    expect(iframeElement.getAttribute("src")).toBeFalsy();
  });

  it("should redirect on event", async () => {
    expect.assertions(1);
    createIframe({
      publishId: "typebot-id",
    });
    window.open = jest.fn();
    window.postMessage(
      {
        from: "typebot",
        redirectUrl: "https://google.fr",
      },
      "*"
    );
    await new Promise((r) => setTimeout(r, 1));
    expect(window.open).toHaveBeenCalledWith("https://google.fr");
  });

  it("should trigger var callback on var event", async () => {
    expect.assertions(2);
    let n, v;
    createIframe({
      publishId: "typebot-id",
      onNewVariableValue: ({ name, value }) => {
        v = value;
        n = name;
      },
    });
    window.postMessage(
      {
        from: "typebot",
        newVariableValue: { name: "varName", value: "varValue" },
      },
      "*"
    );
    await new Promise((r) => setTimeout(r, 1));
    expect(n).toBe("varName");
    expect(v).toBe("varValue");
  });

  it("should notify when video played", async () => {
    expect.assertions(1);
    let hit = false;
    createIframe({
      publishId: "typebot-id",
      onVideoPlayed: () => {
        hit = true;
      },
    });
    window.postMessage(
      {
        from: "typebot",
        videoPlayed: true,
      },
      "*"
    );
    await new Promise((r) => setTimeout(r, 1));
    expect(hit).toBe(true);
  });

  it("shouldn't execute callbacks if event from other than typebot", async () => {
    expect.assertions(3);
    let n, v;
    createIframe({
      publishId: "typebot-id",
      onNewVariableValue: ({ name, value }) => {
        v = value;
        n = name;
      },
    });
    window.open = jest.fn();
    window.postMessage(
      {
        redirectUrl: "https://google.fr",
        newVariableValue: { name: "varName", value: "varValue" },
      },
      "*"
    );
    await new Promise((r) => setTimeout(r, 1));
    expect(window.open).not.toHaveBeenCalled();
    expect(n).toBeUndefined();
    expect(v).toBeUndefined();
  });
});
