# AI Agent: Platforms and Ecosystem

AI Agents are systems that autonomously plan, reason, and take actions using large language models and external tools.  
They represent the next evolution in how AI interacts with applications, data, and users.

---
## What Is an AI Agent?

AI Agents extend LLMs by giving them the ability to:

- **Perceive** information (inputs, environment, tools, APIs)  
- **Plan** actions through reasoning and task decomposition  
- **Act** by calling tools, APIs, or performing real-world tasks  
- **Reflect & improve** outputs based on feedback  

Unlike a standalone LLM that only responds to prompts, agents operate more like **autonomous workers**.

![AI Agent](/assets/agent_workflow.png){ width="80%" }
---
## Open-Source Agent Builders on Cloud (Self-Hosted Agents)

- Why Self-Hosted Agent Builders?
    - Full control over data, logs, and agent execution environment  
    - Customize agent logic, tool-calling, memory, and orchestration  
    - Avoid vendor lock-in and usage-based API limits  
    - Deploy on Kubernetes, VM clusters, edge nodes, or hybrid setups  
    - Integrate with internal APIs, private RAG stores, and enterprise security

---

## Popular Open-Source Agent Frameworks for Self-Hosting

- LangChain + LangGraph
    - LangGraph adds state machines and multi-agent coordination  
    - Easily deployed on Kubernetes (FastAPI + LangServe)  
    - Common in enterprise RAG + automation pipelines  

- CrewAI
    - Multi-agent collaboration framework with role-based coordination  
    - Agents behave like a "team" (planner, researcher, writer)  
    - Great for internal copilots and document-heavy workflows  

- LlamaIndex Agents
    - RAG-first architecture with tool execution  
    - Can embed into private vector databases (Milvus, Qdrant, Weaviate)  
    - Deployable as a private API or microservice  

<figure style="margin:0;">
  <img src="/assets/ai_agent.png" style="width:90%; margin:0;">
</figure>
<p style="font-size:0.8em; color:#888; margin:2px 0; white-space:nowrap;">
  An example of AI Agent Builder
</p> 

---
## Typical Cloud Deployment Architecture

- LLM inference layer (local GPU models or API-based models)
- Orchestration engine like LangGraph or CrewAI
- Tooling layer that connects to internal APIs, databases, and execution tools
- RAG stack using vector databases with retrieval frameworks like LlamaIndex or LangChain
- Deployment stacks like Kubernetes with GPU nodes

<figure style="margin:0;">
  <img src="/assets/hosted_ai_agent.png" style="width:95%; margin:0;">
</figure>
<p style="font-size:0.8em; color:#888; margin:2px 0; white-space:nowrap;">
  An example of AI Agent - OpenAI's Agent Builder
</p> 

---

## Example Use Cases in Enterprises

- **Internal enterprise copilots** hosted behind VPN  
- **Security-conscious workflows** (no external API data leakage)  
- **AI Ops / Cloud Ops agents** running inside the company’s cluster  
- **Document automation systems** using private RAG and agent workflows  
- **LLM-powered business process automation** integrated with ERP/CRM  