// src/file.ts
import { AgentsmithClient } from "@agentsmith-app/sdk";
import { Agency } from "../agentsmith/agentsmith.types";

const agentsmithClient = new AgentsmithClient<Agency>(
    "sdk_e1EtiLj1LSPIb227Qx3lKpP4l58wh6oK",
    "99505f38-e30d-45ec-ad43-8bca8a605687",
);

const helloWorldPrompt = await agentsmithClient.getPrompt("hello-world@0.0.1");

const compiledPrompt = helloWorldPrompt.compile({
    name: "John",
});
