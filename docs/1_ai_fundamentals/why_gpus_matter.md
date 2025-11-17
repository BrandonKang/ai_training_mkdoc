# Why GPUs Matter for AI

Deep learning relies heavily on large matrix and tensor operations.

AI workloads involve massive matrix operations. GPUs excel through:

- Thousands of cores executing simultaneous operations  
- High memory bandwidth feeding data to compute units  
- Tensor cores optimized for mixed-precision math  
- Specialized accelerators like TPUs and NPUs for inference  

Training large language models requires multi-GPU clusters with high-speed interconnects (NVLink, InfiniBand) to synchronize gradients across distributed systems.


## CPU vs GPU at a Glance

| Component | CPU                  | GPU                            |
|:----------|:---------------------|:-------------------------------|
| Cores     | Few, powerful cores  | Thousands of lightweight cores |
| Best for  | Serial workloads     | Highly parallel workloads      |

## Checking GPU Availability (PyTorch Example)

    import torch

    print("CUDA available:", torch.cuda.is_available())
    if torch.cuda.is_available():
        print("Device name:", torch.cuda.get_device_name(0))

![GPU vs CPU](../assets/cpu-vs-gpu.jpg)
