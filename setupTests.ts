import "@testing-library/jest-dom/vitest";
import { beforeAll, afterEach, afterAll } from "vitest";
import { server } from "./src/mocks/server";
import { cleanup } from "@testing-library/react";

// 모든 테스트 전에 API 모킹
beforeAll(() => server.listen());

// 테스트 간에 핸들러를 리셋
afterEach(() => [server.resetHandlers(), cleanup()]);

// 테스트 후에 서버를 종료
afterAll(() => server.close());
