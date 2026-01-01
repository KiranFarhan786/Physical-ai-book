---
title: "Lesson 1.4: Humanoid Robot Modeling with URDF"
sidebar_position: 4
description: "Understanding Unified Robot Description Format for modeling humanoid robots"
---

# Lesson 1.4: Humanoid Robot Modeling with URDF

import LessonStructure from '@site/src/components/lesson/LessonStructure';

<LessonStructure
  concept="URDF (Unified Robot Description Format) is an XML-based format used to describe robot models in ROS. It defines the physical and visual properties of robot links, the joints connecting them, and other properties like inertial parameters, which are essential for simulation and control of humanoid robots."
  tools="URDF (Unified Robot Description Format), xacro (XML macro language that extends URDF), robot_state_publisher package for publishing joint states, and RViz for visualization. We'll also cover the joint_state_publisher for testing purposes."
  workflow="URDF files define the robot's kinematic chain, with links connected by joints. The robot_state_publisher node reads the URDF, subscribes to joint states, and publishes the resulting transforms to the tf2 system, which allows other nodes to understand the robot's pose in space."
  relevance="URDF is fundamental for robot simulation, visualization, and control. Without a proper robot model, it's impossible to simulate robot behavior, plan motions, or control real robots effectively. For humanoid robots, URDF enables accurate modeling of complex kinematic structures."
  outcomes={[
    "Create URDF models for humanoid robots",
    "Understand robot kinematics and joint constraints",
    "Use xacro to simplify complex URDF definitions",
    "Visualize robot models in RViz"
  ]}
/>

## Concept Explanation

URDF (Unified Robot Description Format) is an XML-based format used in ROS to describe robot models. It defines the physical and visual properties of robot links, the joints connecting them, and other properties like inertial parameters. For humanoid robots, URDF is essential for representing the complex kinematic structure with multiple degrees of freedom.

A URDF model consists of two main elements:
- **Links**: Represent rigid bodies of the robot, defining their visual, collision, and inertial properties
- **Joints**: Define how links are connected, specifying the type of movement allowed (revolute, prismatic, fixed, etc.)

For humanoid robots, the URDF typically represents the body structure with a torso, head, two arms, and two legs, each with appropriate joints that mimic human movement capabilities. The kinematic chain starts from a base link (usually the torso or pelvis) and branches out to form the limbs.

URDF is fundamental for robot simulation, visualization, and control. Without a proper robot model, it's impossible to simulate robot behavior, plan motions, or control real robots effectively. The robot model is also crucial for tasks like inverse kinematics, motion planning, and collision detection.

## Tools & Technologies Overview

The primary tools for working with URDF include:

- **URDF (Unified Robot Description Format)**: The XML-based format itself
- **xacro**: An XML macro language that extends URDF, allowing for reusable, parameterized robot descriptions
- **robot_state_publisher**: A ROS package that reads the URDF and joint positions to publish the resulting transforms to the tf2 system
- **joint_state_publisher**: A ROS package that publishes joint states for visualization purposes
- **RViz**: The 3D visualization tool for ROS, which can display robot models defined in URDF
- **Gazebo**: Physics simulator that can load URDF models for dynamic simulation

Additional tools for working with URDF:
- **check_urdf**: Command-line tool to verify URDF syntax and structure
- **urdf_to_graphiz**: Tool to visualize the kinematic tree of a URDF
- **mesh tools**: For working with 3D mesh files (STL, DAE, OBJ) that define the visual and collision geometry of robot links

## Architecture & Workflow

The architecture for URDF-based robot modeling in ROS 2 can be visualized as follows:

```
┌─────────────────────────────────────────────────────────────────┐
│                URDF Robot Modeling Architecture               │
├─────────────────┬─────────────────┬───────────────────────────┤
│   URDF Model    │   ROS 2         │      Visualization &    │
│   Definition    │   System        │      Simulation         │
│                 │                 │                           │
│  ┌──────────┐   │  ┌──────────┐   │  ┌──────────────────┐   │
│  │Links &   │───┼─▶│robot_state│───┼─▶│RViz (Visualize)  │   │
│  │Joints    │   │  │_publisher│   │  │Gazebo (Simulate) │   │
│  │(XML)     │   │  │          │   │  └──────────────────┘   │
│  └──────────┘   │  └──────────┘   │                         │
│                 │       │          │                         │
│  ┌──────────┐   │       ▼          │                         │
│  │xacro     │◀──┼───Joint States  │                         │
│  │(macros)  │   │   (from sensors │                         │
│  └──────────┘   │   or controllers│                         │
└─────────────────┴─────────────────┴───────────────────────────┘
         │                │                      │
         ▼                ▼                      ▼
   Define Robot    Publish TF Tree         Visualize & Simulate
   Structure       (Transforms)            Robot Behavior
```

In this architecture:

1. **URDF Model** defines the robot's structure with links and joints

2. **robot_state_publisher** reads the URDF and joint states to publish transforms

3. **Visualization/Simulation** tools use the transforms to display or simulate the robot

The workflow involves:
1. Defining the robot structure in URDF (or xacro) format
2. Loading the URDF into ROS 2 nodes
3. Publishing joint states from controllers or sensor data
4. Using robot_state_publisher to calculate and publish transforms
5. Using visualization or simulation tools to display or simulate the robot

## Real-World Relevance

URDF is fundamental to robotics development as it provides the essential representation of robot geometry, kinematics, and dynamics. For humanoid robots specifically, URDF enables accurate modeling of complex kinematic structures with multiple degrees of freedom that mimic human movement.

In real-world applications, URDF models are used for:
- Robot simulation before deploying on real hardware
- Motion planning and trajectory generation
- Collision detection and avoidance
- Robot visualization for debugging and monitoring
- Integration with perception systems for understanding robot state

The humanoid robot industry relies heavily on accurate URDF models to develop and test complex behaviors in simulation before deploying on expensive hardware. URDF models also enable the sharing of robot designs within the robotics community, accelerating development and research.

## Learning Outcomes

After completing this lesson, you should be able to:

1. Create URDF models for humanoid robots with appropriate links and joints
2. Understand robot kinematics and joint constraints for humanoid structures
3. Use xacro to simplify complex URDF definitions and create parameterized models
4. Visualize robot models in RViz and prepare them for simulation

## Summary

In this lesson, we explored URDF (Unified Robot Description Format), the XML-based format used to describe robot models in ROS. We learned how URDF defines the physical and visual properties of robot links and the joints connecting them, which is essential for simulating and controlling humanoid robots.

We also covered xacro, which extends URDF with macro capabilities, making it easier to create complex and reusable robot models. The robot_state_publisher package was introduced as the tool that takes URDF and joint states to publish the transforms needed for visualization and other ROS components.

URDF forms the foundation for robot simulation, visualization, and control in ROS-based systems.

## Next Steps

With Module 1 complete, you now understand the foundational concepts of ROS 2 middleware, communication patterns, Python integration, and robot modeling. In Module 2, we'll explore simulation environments using Gazebo and Unity, building on these foundations to create digital twins of robots for safe testing and development.