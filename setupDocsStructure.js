// setupDocsStructure.js
// This script will recursively check/create the folder & file structure under "pages".
// Markdown pages get a header and a lorem ipsum paragraph, and every folder gets a _meta.ts file.

const fs = require('fs');
const path = require('path');

// Define the structure. For each folder under "pages", list its child files and folders.
// For files, the value is a string (contents). For folders, a nested object is used.
// Use the provided _meta.ts content for "getting-started", "core-features", and its "deployment" folder.
// For remaining folders, a basic auto-generated _meta.ts is used.
const structure = {
  pages: {
    "index.md": `---
icon: hand-wave
---

# Open XAI Documentation

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
    "getting-started": {
      "_meta.ts": `// pages/getting-started/_meta.ts
export default {
    "quick-start-guide": "Quick Start Guide",
    "platform-overview": "Platform Overview",
    "architecture": "Architecture",
    "key-concepts": "Key Concepts",
    "installation-setup": "Installation & Setup"
} as const;`,
      "quick-start-guide.md": `# Quick Start Guide

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent at felis et nunc viverra dignissim.`,
      "platform-overview.md": `# Platform Overview

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet dui at ipsum faucibus pretium.`,
      "architecture.md": `# Architecture

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi.`,
      "key-concepts.md": `# Key Concepts

Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
      "installation-setup.md": `# Installation & Setup

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam non mauris a lectus vehicula consectetur.`
    },
    "core-features": {
      "_meta.ts": `// pages/core-features/_meta.ts
export default {
  "model-management": "Model Management",
  "supported-models-formats": "Supported Models & Formats",
  "ollama": "Ollama",
  "llama-3": "Llama 3",
  "deepseek-r1": "DeepSeek R1",
  "hugging-face": "Hugging Face",
  "model-fine-tuning": "Model Fine-tuning",
  "version-control": "Version Control",
  "performance-metrics": "Performance Metrics",
  "deployment": {
    title: "Deployment",
    type: "folder"
  }
} as const;`,
      "model-management.md": `# Model Management

Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
      "supported-models-formats.md": `# Supported Models & Formats

Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
      "ollama.md": `# Ollama

Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
      "llama-3.md": `# Llama 3

Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
      "deepseek-r1.md": `# DeepSeek R1

Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
      "hugging-face.md": `# Hugging Face

Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
      "model-fine-tuning.md": `# Model Fine-tuning

Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
      "version-control.md": `# Version Control

Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
      "performance-metrics.md": `# Performance Metrics

Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
      "deployment": {
        "_meta.ts": `// pages/core-features/deployment/_meta.ts
export default {
  "bare-metal-deployment": "Bare Metal Deployment",
  "configuration": "Configuration",
  "performance-optimization": "Performance Optimization",
  "scaling": "Scaling",
  "cost-management": "Cost Management",
  "monitoring-logging": "Monitoring & Logging"
} as const;`,
        "bare-metal-deployment.md": `# Bare Metal Deployment

Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
        "configuration.md": `# Configuration

Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
        "performance-optimization.md": `# Performance Optimization

Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
        "scaling.md": `# Scaling

Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
        "cost-management.md": `# Cost Management

Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
        "monitoring-logging.md": `# Monitoring & Logging

Lorem ipsum dolor sit amet, consectetur adipiscing elit.`
      }
    },
    "infrastructure": {
      "_meta.ts": `// auto-generated _meta.ts for infrastructure
export default {} as const;`,
      "xnode.md": `# Xnode

Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
      "setup-guide.md": `# Setup Guide

Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
      "hardware-requirements.md": `# Hardware Requirements

Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
      "network-configuration.md": `# Network Configuration

Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
      "security.md": `# Security

Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
      "troubleshooting.md": `# Troubleshooting

Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
      "gpu-marketplace.md": `# GPU Marketplace

Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
      "resource-management.md": `# Resource Management

Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
      "discovery-pricing.md": `# Discovery & Pricing

Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
      "sla-guidelines.md": `# SLA Guidelines

Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
      "analytics.md": `# Analytics

Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
      "payment-systems.md": `# Payment Systems

Lorem ipsum dolor sit amet, consectetur adipiscing elit.`
    },
    "development-tools": {
      "_meta.ts": `// auto-generated _meta.ts for development-tools
export default {} as const;`,
      "apis-sdks": {
        "_meta.ts": `// auto-generated _meta.ts for apis-sdks
export default {} as const;`,
        "rest-api.md": `# REST API

Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
        "python-sdk.md": `# Python SDK

Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
        "javascript-sdk.md": `# JavaScript SDK

Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
        "websocket-api.md": `# WebSocket API

Lorem ipsum dolor sit amet, consectetur adipiscing elit.`
      },
      "authentication.md": `# Authentication

Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
      "rate-limits.md": `# Rate Limits

Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
      "templates.md": `# Templates

Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
      "web3-integration.md": `# Web3 Integration

Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
      "chatbots.md": `# Chatbots

Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
      "training-pipelines.md": `# Training Pipelines

Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
      "model-serving.md": `# Model Serving

Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
      "high-availability-setups.md": `# High Availability Setups

Lorem ipsum dolor sit amet, consectetur adipiscing elit.`
    },
    "web3-features": {
      "_meta.ts": `// auto-generated _meta.ts for web3-features
export default {} as const;`,
      "openxai-token.md": `# OPENXAI Token

Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
      "utility-economics.md": `# Utility & Economics

Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
      "staking-system.md": `# Staking System

Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
      "rewards.md": `# Rewards

Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
      "smart-contracts.md": `# Smart Contracts

Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
      "governance.md": `# Governance

Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
      "proposal-system.md": `# Proposal System

Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
      "voting.md": `# Voting

Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
      "treasury.md": `# Treasury

Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
      "community-guidelines.md": `# Community Guidelines

Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
      "grants-program.md": `# Grants Program

Lorem ipsum dolor sit amet, consectetur adipiscing elit.`
    },
    "resources": {
      "_meta.ts": `// auto-generated _meta.ts for resources
export default {} as const;`,
      "community.md": `# Community

Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
      "contribution-guide.md": `# Contribution Guide

Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
      "code-standards.md": `# Code Standards

Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
      "bug-reports.md": `# Bug Reports

Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
      "feature-requests.md": `# Feature Requests

Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
      "forums-discord.md": `# Forums & Discord

Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
      "documentation.md": `# Documentation

Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
      "use-cases.md": `# Use Cases

Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
      "edge-computing.md": `# Edge Computing

Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
      "distributed-training.md": `# Distributed Training

Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
      "privacy-solutions.md": `# Privacy Solutions

Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
      "enterprise-usage.md": `# Enterprise Usage

Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
      "technical-specs.md": `# Technical Specs

Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
      "security-guide.md": `# Security Guide

Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
      "cli-reference.md": `# CLI Reference

Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
      "environment-setup.md": `# Environment Setup

Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
      "error-handling.md": `# Error Handling

Lorem ipsum dolor sit amet, consectetur adipiscing elit.`
    },
    "updates": {
      "_meta.ts": `// auto-generated _meta.ts for updates
export default {} as const;`,
      "release-notes.md": `# Release Notes

Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
      "migration-guides.md": `# Migration Guides

Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
      "roadmap.md": `# Roadmap

Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
      "beta-features.md": `# Beta Features

Lorem ipsum dolor sit amet, consectetur adipiscing elit.`
    },
    "reference": {
      "_meta.ts": `// auto-generated _meta.ts for reference
export default {} as const;`,
      "api-reference.md": `# API Reference

Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
      "configuration.md": `# Configuration

Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
      "environment-variables.md": `# Environment Variables

Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
      "error-codes.md": `# Error Codes

Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
      "glossary.md": `# Glossary

Lorem ipsum dolor sit amet, consectetur adipiscing elit.`
    }
  }
};

// Recursive function to create directories and files
async function createStructure(basePath, struct) {
  for (const name in struct) {
    const fullPath = path.join(basePath, name);
    const value = struct[name];
    if (typeof value === 'string') {
      // It's a file. Check if it exists; if not, create it.
      try {
        await fs.promises.access(fullPath);
        console.log(`File exists: ${fullPath}`);
      } catch {
        await fs.promises.writeFile(fullPath, value, 'utf8');
        console.log(`Created file: ${fullPath}`);
      }
    } else if (typeof value === 'object') {
      // It's a directory. Create it (including parent folders if needed) and recurse.
      try {
        await fs.promises.mkdir(fullPath, { recursive: true });
        console.log(`Created directory: ${fullPath}`);
      } catch (err) {
        console.error(`Failed to create directory: ${fullPath}`, err);
      }
      await createStructure(fullPath, value);
    }
  }
}

// Run the script starting from the project root
createStructure(process.cwd(), structure)
  .then(() => console.log('Structure setup complete.'))
  .catch(err => console.error('Error during setup:', err));