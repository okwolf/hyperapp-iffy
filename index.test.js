import { h, app } from "hyperapp";

test("h can be imported", () => expect(h).toBeInstanceOf(Function));

test("app can be imported", () => expect(app).toBeInstanceOf(Function));
