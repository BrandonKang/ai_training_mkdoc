# Foundations of Modern AI

- Modern AI is driven by deep learning and large-scale neural networks  
- Progression: early neural nets → specialized architectures → Transformers powering today's LLMs  
- Core principle: learn hierarchical patterns from raw data (images, text, audio, logs, etc.)

---

# Evolution of Neural Network Architectures

## Neural Networks (NN)
- Basic fully connected layers  
- Learn simple to moderately complex patterns  
- Strengths: easy to train, general-purpose  
- Limitations: cannot capture spatial or sequential structure  
- Use cases: classification, regression, tabular data
---
## Convolutional Neural Networks (CNN)
- Convolution filters detect local spatial features  
- Hierarchical representation: edges → shapes → objects  
- High performance in computer vision tasks  
- Use cases: image classification, detection, segmentation, medical imaging
---
## Recurrent Neural Networks (RNN / LSTM / GRU)
- Designed for sequential/time-series data  
- Capture order, temporal context, and dependencies  
- LSTM/GRU introduce gating to reduce vanishing gradients  
- Use cases: speech recognition, time-series forecasting, early NLP systems
---
## Transformer
- Replaces recurrence with attention mechanism  
- Enables parallel sequence processing (GPU-efficient)  
- Learns long-range relationships with high accuracy  
- Foundation of modern LLMs (GPT, Llama, Mistral, etc.)  
- Use cases: LLMs, translation, RAG pipelines, multimodal AI

---

# Why Transformers Won

- Attention mechanism identifies important parts of the input dynamically  
- Parallel computation → massive acceleration on GPUs  
- Scales extremely well with model/data size  
- Works across modalities: text, image, audio, code  
- Supports modern ecosystems: RAG, fine-tuning, agents, multimodal processing

---

# Architecture Summary Table

| Model | Key Idea | Strengths | Typical Use Cases |
|:------|:---------|:----------|:------------------|
| Neural Network | Fully connected layers | Simple, general-purpose | Classification, regression |
| CNN | Convolution filters | Vision accuracy; spatial hierarchy | Image tasks, detection, segmentation |
| RNN / LSTM | Recurrent & gated memory | Sequence modeling | Speech, time-series, sequential NLP |
| Transformer | Attention mechanism | Parallelism, scalability, long-context | LLMs, translation, RAG, multimodal |

---

# Transformer Diagram (talking points)

- Encoder or decoder stacks depending on the model  
- Multi-Head Attention: multiple relational perspectives  
- Feed-forward networks inside each block  
- Positional encoding preserves sequence order  
- Depth & width scale to billions of parameters (e.g., GPT-3, Llama-3)

![Transformer Diagram](../assets/transformer_diagram.png)

---

# Optional Video for Learners

<iframe width="560" height="315"
    src="https://www.youtube.com/embed/4Bdc55j80l8"
    title="YouTube video player"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen>
</iframe>

- Helpful visual explanation of attention and Transformer concepts  
- Complements the text and diagram used in this lesson
