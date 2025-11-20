# Why GPUs Matter for AI

- Deep learning = massive matrix/tensor operations  
- Requires highly parallel compute  
- GPUs provide thousands of cores, high memory bandwidth, and AI accelerators  
- Backbone of modern AI training and inference

<img src="/assets/why-gpu-matters.png" width="70%">

---

## CPUs Are Not Enough

- Optimized for sequential, general-purpose workloads  
- 4–64 powerful cores but limited parallelism  
- Inefficient for large-scale matrix multiplications  

---

## How GPUs Accelerate Matrix Operations

- Thousands of lightweight cores for massive parallelism  
- High arithmetic throughput for linear algebra  
- Significantly faster training and inference  
- Reduces time-to-result for deep learning workloads

--- 

## GPU Bandwidth Enables Fast Inference

- High-bandwidth HBM (e.g., 3 TB/s on H100)  
- Rapid weight/activation access for low-latency inference  
- High throughput per watt and per dollar  
- Efficient batching for real-time and large-scale deployments  

---

## GPUs vs TPUs vs NPUs

![GPUs vs TPUs vs NPUs](/assets/gpu_tpu_npu.png ){ width="60%" }

<iframe width="800" height="450" 
        src="https://www.youtube.com/embed/d3SqH0UBLEY" 
        frameborder="0" 
        allowfullscreen>
</iframe>