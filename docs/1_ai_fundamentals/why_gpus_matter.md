# Why GPUs Matter for AI

Deep learning relies heavily on large matrix and tensor operations.

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

![GPU vs CPU](../assets/gpu_vs_cpu.png)
