# Vector Databases and Retrieval-Augmented Generation (RAG)

RAG combines LLMs with external knowledge stored in vector databases.

## RAG Workflow

1. Convert documents into embeddings (vectors) and store them in a VectorDB.
2. Convert the user query into an embedding.
3. Retrieve top-k similar documents by vector similarity.
4. Inject retrieved documents into the LLM prompt.
5. Generate a grounded, context-aware answer.

Pseudo-code example:

    query = "How does Kubernetes handle pod scheduling?"
    query_vec = embed(query)
    docs = vectordb.search(query_vec, top_k=5)

    prompt = "Answer based on these docs:\n" + str(docs) + "\n\nQuestion: " + query
    answer = llm.generate(prompt)
    print(answer)

![RAG Architecture](../assets/rag_architecture.png)
