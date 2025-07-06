---
title: Kubernetes Log Viewer
description: The Kubernetes Log Viewer is an internal tool that simplifies log access from containers running in Kubernetes clusters. Replacing the need for SSH and CLI commands, this web-based interface, developed using Solid.js, Go, and Fiber, offers an intuitive and efficient way for team members to monitor and debug applications. The tool securely integrates with Kubernetes APIs, providing real-time log streaming and navigation through namespaces, pods, and containers
poster: /projects/kubernetes-log-viewer.webp
techstack:
  - Go
---

The Kubernetes Log Viewer was developed to address the challenges faced by our team in accessing and managing logs from Kubernetes clusters. Traditionally, accessing these logs required SSH access to servers and executing complex Kubernetes CLI commands, which could be time-consuming and error-prone, especially for team members unfamiliar with the command-line interface.

## Background

As our team scaled and the number of services running in Kubernetes increased, we needed a more efficient and user-friendly solution. The Kubernetes Log Viewer was created to provide a web-based interface that simplifies log access, making it more accessible to all team members regardless of their technical expertise. This tool enhances productivity by reducing the time spent on log retrieval and allowing team members to focus on monitoring and debugging applications effectively. The entire application, including both backend and frontend, is compiled into a single binary file, facilitating easy distribution and deployment across different environments.

### Features

- **Web-Based Log Access**: Offers a straightforward interface to view container logs, making it easier for team members to access critical information without needing command-line expertise.
- **Dynamic Navigation**: Navigate through namespaces, pods, and containers easily to locate specific logs quickly and efficiently.
- **Real-time Log Streaming**: Provides real-time log streaming to ensure access to the most current information for effective issue resolution.
- **Secure Internal Deployment**: Designed specifically for internal use, ensuring that sensitive log data is protected within our network environment.
- **Single Binary Distribution**: Both backend and frontend are compiled into a single, portable binary file, simplifying deployment across multiple environments.

### Stack

- [Solid.js](https://www.solidjs.com/) - A declarative JavaScript library for creating user interfaces, known for its simplicity and reactivity.
- [Go](https://go.dev/) - A statically typed, compiled programming language designed for simplicity and reliability, used for building the backend.
- [Fiber](https://gofiber.io/) - An Express-inspired web framework for Go, designed to ease the development of web applications with performance in mind.
