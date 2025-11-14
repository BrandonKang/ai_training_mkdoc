# NVIDIA Ecosystem

NVIDIA provides a full stack for accelerated AI.

## Key Components

- CUDA and cuDNN for GPU programming
- TensorRT for optimized inference
- Triton Inference Server for model serving
- NIM microservices for packaged AI services

Example Triton server (conceptual):

    docker run --gpus all -p8000:8000 -p8001:8001 -p8002:8002 nvcr.io/nvidia/tritonserver:23.10

![NVIDIA Stack](../assets/nvidia_stack.png)
