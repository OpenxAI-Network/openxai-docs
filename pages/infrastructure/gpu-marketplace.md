# GPU Marketplace

OpenXAI offers a **global, decentralized GPU marketplace** that allows developers to **search, compare, and deploy GPU resources efficiently**. Follow these steps to leverage GPU resources in OpenXAI Studio.


### Access GPU Marketplace

1. Go to [OpenXAI Studio](https://studio.openxai.org/) and log in using your **Web3 wallet** (e.g., MetaMask).  
2. Navigate to  

   **App Store → Select Model → Select Version or Host → Explore GPUs → Available Machines**  

   to access the GPU marketplace, where you can browse listed GPU machines or search for additional compute resources using **SkyScanner for Compute & GPUs**.


 ![GPU MarketPlace](/images/openxai-studio-gpumarketplace.jpg)


> **Tip:** You can search GPUs, select one based on requirements, and compare pricing.


### Search & Filter GPUs

The left sidebar lets you refine your search:

- **Search Providers & Servers:** Filter results by provider name or server type.  
- **Price Range:** Adjust the slider (from $1 to $10,000).  
- **Region:** Select a region to minimize latency.  
- **Only Available:** Display only currently available GPUs.

### Selecting a GPU

1. Browse available GPU machines. Example options:

| Provider / Server | Specs | Location | Price |
|------------------|-------|----------|-------|
| Xnode DVM | 8-Core, 16GB RAM, 320 GB Storage, 1 Gbps Networking | - | Free |
| vc2-1c-0.5gb-v6 | 1-Core, 0.5GB RAM, 10 GB Storage | New Jersey, US | ~$2.5/mo |
| vc2-1c-0.5gb | 1-Core, 0.5GB RAM, 10 GB Storage | New Jersey, US | ~$3.5/mo |
| vc2-1c-1gb | 1-Core, 1GB RAM, 25 GB Storage | New Jersey, US | ~$5/mo |
| vhf-1c-1gb | 1-Core, 1GB RAM, 32 GB Storage | New Jersey, US | ~$6/mo |

2. Click **Select** to choose a GPU.  
3. Free servers like **Xnode DVM** are ideal for testing deployments.

### Deploying Your Model

1. After selecting a GPU, go to the **Deployments** section on the dashboard.  
2. Click **Deploy Model** and choose the AI model.  
3. OpenXAI Studio handles automatically:

   - **Dependency Installation**: Installs required libraries and drivers.  
   - **Containerization**: Creates isolated Docker containers.  
   - **Storage & Networking**: Attaches persistent storage and high-speed networking.  

4. Your model is deployed with a **dedicated API endpoint** ready for inference within minutes.


### Testing & Monitoring

- Test deployments using free GPU servers.  
- Deployment progress is logged for **dependency installation**, **container setup**, and **storage configuration**.  
- Access your **API endpoint** to run inference directly.  

