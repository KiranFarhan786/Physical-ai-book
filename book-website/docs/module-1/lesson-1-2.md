---
title: "Lesson 1.2: ROS 2 Nodes, Topics, and Services"
sidebar_position: 2
description: "Understanding communication patterns in ROS 2: nodes, topics, and services"
---

# Lesson 1.2: ROS 2 Nodes, Topics, and Services

import LessonStructure from '@site/src/components/lesson/LessonStructure';

<LessonStructure
  concept="ROS 2 uses three primary communication patterns: nodes (processes that perform computation), topics (for publish-subscribe communication), and services (for request-response communication). These patterns enable different parts of a robot system to interact effectively."
  tools="ROS 2 Humble Hawksbill with rclpy (Python client library) and rclcpp (C++ client library). We'll also use command-line tools like ros2 node, ros2 topic, and ros2 service for introspection."
  workflow="Nodes communicate via topics using a publish-subscribe model where publishers send messages to topics and subscribers receive them. Services use a request-response model where clients send requests to services and receive responses. Actions provide a more complex pattern for long-running tasks with feedback."
  relevance="Understanding these communication patterns is essential for designing and implementing robot systems. They form the basis for how different robot components interact and coordinate their behavior."
  outcomes={[
    "Describe the three primary communication patterns in ROS 2",
    "Implement basic publisher-subscriber pattern",
    "Create and use ROS 2 services",
    "Explain when to use topics vs services for different scenarios"
  ]}
/>

## Concept Explanation

In ROS 2, communication between different parts of a robot system happens through three primary patterns: nodes, topics, and services. Understanding these patterns is crucial for designing effective robot systems.

**Nodes** are the fundamental building blocks of a ROS 2 system. Each node is a process that performs computation. In a typical robot, you might have nodes for sensor processing, motor control, path planning, and user interfaces. Nodes are designed to be modular and reusable, allowing developers to create complex systems by combining simple components.

**Topics** enable publish-subscribe communication. In this pattern, nodes called "publishers" send messages to topics, and nodes called "subscribers" receive messages from those topics. This creates a one-to-many relationship where a single publisher can send messages to multiple subscribers. Topics are ideal for streaming data like sensor readings, robot states, or sensor data that multiple components need to access.

**Services** enable request-response communication. In this pattern, a node called a "client" sends a request to a "service," which processes the request and sends back a response. This creates a one-to-one relationship where each request gets a specific response. Services are ideal for tasks that have a clear beginning and end, like requesting robot calibration, saving a map, or triggering a specific action.

The publish-subscribe model (topics) is asynchronous - publishers don't wait for responses from subscribers, and subscribers receive messages as they become available. This makes topics perfect for continuous data streams. The request-response model (services) is synchronous - the client waits for a response from the service. This makes services perfect for discrete tasks that require a specific outcome.

## Tools & Technologies Overview

The primary tools for working with nodes, topics, and services in ROS 2 are:

- **rclpy**: The Python client library for ROS 2, which provides APIs for creating nodes, publishers, subscribers, and services
- **rclcpp**: The C++ client library for ROS 2, providing the same functionality as rclpy but for C++ applications
- **ros2 node**: Command-line tool for introspecting and managing nodes
- **ros2 topic**: Command-line tool for inspecting topic data and information
- **ros2 service**: Command-line tool for calling services and inspecting service information

ROS 2 also provides various message types for communication, defined in `.msg` files for topics and `.srv` files for services. These messages define the structure of data that can be exchanged between nodes.

Common message packages include:
- `std_msgs`: Standard primitive message types (Int32, String, Float64, etc.)
- `sensor_msgs`: Messages for sensors (LaserScan, Image, Imu, etc.)
- `geometry_msgs`: Messages for geometry (Point, Pose, Twist, etc.)
- `nav_msgs`: Messages for navigation (Odometry, Path, OccupancyGrid, etc.)

## Architecture & Workflow

The architecture of ROS 2 communication patterns can be visualized as follows:

```
┌─────────────────────────────────────────────────────────────────┐
│                ROS 2 Communication Patterns                   │
├─────────────────┬─────────────────┬───────────────────────────┤
│   Publisher     │   Subscriber    │      Service Client     │
│   Node          │   Node          │         Node            │
│                 │                 │                           │
│  ┌──────────┐   │  ┌──────────┐   │  ┌──────────────────┐   │
│  │Publish to│───┼─▶│Subscribe │───┼─▶│Send Request to   │   │
│  │Topic: /sensors│ │to Topic: │   │  │Service: /calibrate│   │
│  │          │   │  │/sensors  │   │  └──────────────────┘   │
│  └──────────┘   │  └──────────┘   │           │              │
└─────────────────┴─────────────────┴───────────────────────────┘
         │                │                      │
         ▼                ▼                      ▼
    Sensor Data      Sensor Data         ┌──────────────────┐
    Processing     Display/Analysis      │Service Server    │
                                        │Node              │
                                        │                  │
                                        │Process Request   │
                                        │and Send Response │
                                        └──────────────────┘
```

In this architecture:

1. **Publishers** send messages to topics. These messages are distributed to all subscribers of that topic.

2. **Subscribers** receive messages from topics. They register their interest in a specific topic and receive all messages published to that topic.

3. **Clients** send requests to services and wait for responses.

4. **Services** receive requests from clients, process them, and send back responses.

The communication happens through the DDS middleware, which handles the actual message passing. Quality of service settings can be configured to control how messages are delivered, including settings for reliability, durability, and deadline.

## Real-World Relevance

Understanding nodes, topics, and services is essential for robotics development as these patterns form the basis for how robot components communicate. In real-world robots, these patterns are used extensively:

- **Topics** are used for streaming sensor data like camera images, LiDAR scans, IMU readings, and odometry. Multiple nodes can subscribe to these data streams simultaneously for different purposes (e.g., obstacle detection, mapping, localization).

- **Services** are used for discrete tasks like calibrating sensors, saving maps, changing robot modes, or executing specific actions that have a clear start and end.

- **Nodes** encapsulate specific robot functions like motor control, sensor processing, path planning, and user interfaces, making systems modular and maintainable.

These patterns enable the development of complex robotic systems by breaking them down into manageable, reusable components. This modularity allows different teams to work on different components simultaneously and makes it easier to test and debug robot systems.

## Learning Outcomes

After completing this lesson, you should be able to:

1. Describe the three primary communication patterns in ROS 2 (nodes, topics, services)
2. Implement a basic publisher-subscriber pattern using rclpy or rclcpp
3. Create and use ROS 2 services for request-response communication
4. Explain when to use topics vs services for different communication scenarios

## Summary

In this lesson, we explored the three primary communication patterns in ROS 2: nodes, topics, and services. We learned how nodes are the fundamental building blocks that perform computation, how topics enable publish-subscribe communication for streaming data, and how services enable request-response communication for discrete tasks.

These patterns form the foundation of ROS 2 communication and are essential for designing effective robot systems. Understanding when to use each pattern is key to creating well-architected robotic applications.

## Next Steps

In the next lesson, we'll explore how to bridge Python-based AI agents with ROS 2, building on the communication patterns we've learned to connect artificial intelligence algorithms with robot control systems.