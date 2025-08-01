# Xnode App Development Guide

This guide walks you through the process of developing and deploying a Nix app using Xnode, our innovative microservices framework.

## Development Process

### 1. Develop Nix App

Start by developing a nix app using one of our official templates:

- [NextJS Template](https://github.com/Openmesh-Network/xnode-nextjs-template)
- [NodeJS Template](https://github.com/Openmesh-Network/xnode-nodejs-template)
- [Rust Template](https://github.com/Openmesh-Network/xnode-rust-template)

### 2. Create Example Flake

1. Create a folder named "example" and a file named "flake.nix"
2. Write a nix flake to test local app execution. Basic format:

```nix
{
  inputs = {
    xnode-manager.url = "github:Openmesh-Network/xnode-manager";
    # my-app.url = "github:owner/repo/branch";
    nixpkgs.url = "github:NixOS/nixpkgs/nixos-unstable"; # nixpkgs.follows = "my-app/nixpkgs";
  };

  outputs = inputs: {
    nixosConfigurations.container = inputs.nixpkgs.lib.nixosSystem {
      specialArgs = {
        inherit inputs;
      };
      modules = [
        inputs.xnode-manager.nixosModules.container
        {
          services.xnode-container.xnode-config = {
            host-platform = ./xnode-config/host-platform;
            state-version = ./xnode-config/state-version;
            hostname = ./xnode-config/hostname;
          };
        }
        # inputs.my-app.nixosModules.default
        (
          { pkgs, ... }@args:
          {
            # services.my-app.enable = true;
          }
        )
      ];
    };
  };
}
```

**Note:** For local development, use `path:/absolute/path/to/root/of/project` instead of `github:org/repo`. Example:

```nix
xnode-manager.url = "path:/home/user/git/openmesh/xnode-manager"; # Instead of "github:Openmesh-Network/xnode-manager"
```

### 3. Container Management

#### Prerequisites

- NixOS environment (can be run in VM using VirtualBox)
- For Ubuntu 24.04, install XnodeOS using:
  ```bash
  export USER_PASSWD="xnodepassword" && curl https://raw.githubusercontent.com/Openmesh-Network/xnode-manager/main/os/install.sh | bash 2>&1 | tee /tmp/xnodeos.log
  ```
  Login credentials: username="xnode", password="xnodepassword"

#### Creating and Setting Up Container

1. **Choose Container Name**

   - Use alphanumeric characters and hyphens only
   - Keep the name relatively short
   - This guide uses `<container-name>` as a placeholder

2. **Create Test Container**

In the terminal while in the root of your git repo run this command :

```bash
sudo nixos-container create <container-name> --flake ./example
```

This command:

- Creates a container configuration file
- Attempts to build the container flake
- May fail initially if nix configuration is invalid (proceed to next step regardless)

3. **Configure Container Network**
   ```bash
   sudo nano /etc/nixos-containers/<container-name>.conf
   ```
   Replace content with:
   ```
   EXTRA_NSPAWN_FLAGS="--network-zone=containernet"
   ```
   > Note:
   > NixOS containers typically have isolated networking by default.
   > In XnodeOS, containers share a common network zone (unless configured otherwise).
   > This setup helps containers communicate seamlessly without extra networking configs.

#### Managing Container Lifecycle

1. **Start Container**

   ```bash
   sudo nixos-container start <container-name>
   ```

   - Container won't start if initial nix config is invalid
   - Repeat update steps until configuration is valid

2. **Test Container**

   Login to the container as root:

   ```bash
   sudo nixos-container root-login <container-name>
   ```

Once inside, you can test your app in several ways:

  - 🔍 Access Exposed Ports
    - Test web interfaces or APIs through any ports you've exposed.

  - 📄 Check Logs & Use CLI Tools
    - Inspect logs or run command-line tools inside the container to verify it’s working as expected.

  - 📂 Access Container Files
    - From the host system, you can also view container files here: `/var/lib/nixos-containers/<container-name>`

3. **Update Container**

   a. Update flake inputs first:

   ```bash
   sudo nix flake update --flake ./example
   ```

   b. Apply changes to container:

   ```bash
   sudo nixos-container update <container-name> --flake ./example
   ```

   If needed, manually restart:

   ```bash
   sudo nixos-container stop <container-name>
   sudo nixos-container start <container-name>
   ```

4. **Development Cycle**

   - Make changes to app/flake files
   - Update flake inputs
   - Update container
   - Test changes
   - Repeat until app is complete

5. **Destroy Container**
   ```bash
   sudo nixos-container destroy <container-name>
   ```
   > Warning: This action is irreversible. Use when:
   >
   > - Testing fresh installation
   > - Starting over with development
   > - Cleaning up resources

## Examples

Check our reference implementations:

- [Near Validator](https://github.com/Openmesh-Network/xnode-manager-frontend/blob/main/nextjs-app/prebuild/appstore/near-validator.nix)
- [Subdomain Distributor](https://github.com/Openmesh-Network/xnode-manager-frontend/blob/main/nextjs-app/prebuild/appstore/subdomain-distributor.nix)
- [Xnode AI Chat](https://github.com/Openmesh-Network/xnode-manager-frontend/blob/main/nextjs-app/prebuild/appstore/xnode-ai-chat.nix)
