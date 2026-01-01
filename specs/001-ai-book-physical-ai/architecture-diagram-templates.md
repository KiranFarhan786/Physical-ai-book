# Architecture Diagram Templates

## 1. Basic System Architecture Template

```
┌─────────────────────────────────────────────────────────┐
│                    System Name                          │
├─────────────────┬─────────────────┬─────────────────────┤
│   Component A   │   Component B   │    Component C      │
│                 │                 │                     │
│  - Feature 1    │  - Feature 1    │  - Feature 1        │
│  - Feature 2    │  - Feature 2    │  - Feature 2        │
└─────────────────┴─────────────────┴─────────────────────┘
                           │
                           ▼
            ┌─────────────────────────────────┐
            │        Data Flow/Process        │
            └─────────────────────────────────┘
```

## 2. ROS 2 Architecture Template

```
┌─────────────────────────────────────────────────────────┐
│                    ROS 2 System                         │
├─────────────────┬─────────────────┬─────────────────────┤
│   ROS Node 1    │   ROS Node 2    │   ROS Node 3        │
│   (Publisher)   │ (Subscriber)    │   (Service)         │
│                 │                 │                     │
│  ┌──────────┐   │  ┌──────────┐   │  ┌──────────┐       │
│  │ Publisher│───┼─▶│Subscriber│───┼─▶│ Service  │       │
│  │ Topic: X │   │  │ Topic: X │   │  │ Server   │       │
│  └──────────┘   │  └──────────┘   │  └──────────┘       │
└─────────────────┴─────────────────┴─────────────────────┘
                           │
                    DDS Middleware (RMW)
                           │
            ┌─────────────────────────────────┐
            │         Communication           │
            └─────────────────────────────────┘
```

## 3. Simulation Architecture Template

```
┌─────────────────────────────────────────────────────────┐
│                 Simulation System                       │
├─────────────────┬─────────────────┬─────────────────────┤
│   Robot Model   │  Environment    │   Physics Engine    │
│                 │                 │                     │
│  ┌──────────┐   │  ┌──────────┐   │  ┌──────────┐       │
│  │ URDF/SDF │───┼─▶│  World   │───┼─▶│  Gazebo  │       │
│  │  Model   │   │  │  Model   │   │  │  Core    │       │
│  └──────────┘   │  └──────────┘   │  └──────────┘       │
└─────────────────┴─────────────────┴─────────────────────┘
                           │
                    Sensor Simulation
                           │
            ┌─────────────────────────────────┐
            │         Data Pipeline           │
            └─────────────────────────────────┘
```

## 4. Perception Pipeline Template

```
┌─────────────────────────────────────────────────────────┐
│              Perception Pipeline                        │
├─────────────────┬─────────────────┬─────────────────────┤
│   Sensor Data   │  Preprocessing  │    Processing       │
│                 │                 │                     │
│  ┌──────────┐   │  ┌──────────┐   │  ┌──────────┐       │
│  │  Camera  │───┼─▶│  Filter  │───┼─▶│  Neural  │       │
│  │  LiDAR   │   │  │  Data    │   │  │ Network  │       │
│  │  IMU     │   │  └──────────┘   │  │  Model   │       │
│  └──────────┘   │                 │  └──────────┘       │
└─────────────────┴─────────────────┴─────────────────────┘
                           │
                    ┌──────────┐
                    │ Decision │
                    │ Making   │
                    └──────────┘
```

## 5. Navigation Stack Template

```
┌─────────────────────────────────────────────────────────┐
│              Navigation System                          │
├─────────────────┬─────────────────┬─────────────────────┤
│  Global Planner │  Local Planner  │    Controller       │
│                 │                 │                     │
│  ┌──────────┐   │  ┌──────────┐   │  ┌──────────┐       │
│  │  Path    │───┼─▶│  Trajectory│─┼─▶│ Velocity │       │
│  │  Planner │   │  │  Planner   │ │  │ Controller│      │
│  └──────────┘   │  └──────────┘   │  └──────────┘       │
└─────────────────┴─────────────────┴─────────────────────┘
                           │
                    ┌─────────────────┐
                    │   Robot Base    │
                    │   Controller    │
                    └─────────────────┘
```

## 6. VLA (Vision-Language-Action) Template

```
┌─────────────────────────────────────────────────────────┐
│              VLA System Architecture                   │
├─────────────────┬─────────────────┬─────────────────────┤
│   Vision        │  Language       │     Action          │
│   Processing    │   Model         │    Planning         │
│                 │                 │                     │
│  ┌──────────┐   │  ┌──────────┐   │  ┌──────────┐       │
│  │  Camera  │───┼─▶│ Large    │───┼─▶│ Task     │       │
│  │  Input   │   │  │ Language │   │  │ Planner  │       │
│  │          │   │  │   Model  │   │  │          │       │
│  └──────────┘   │  │ (LLM)    │   │  └──────────┘       │
│                 │  └──────────┘   │         │           │
└─────────────────┴─────────────────┴─────────────────────┘
                           │
                    ┌─────────────────┐
                    │   Robot         │
                    │   Execution     │
                    └─────────────────┘
```

## 7. Text-Based Diagram Guidelines

When creating text-based diagrams:

1. Use consistent box drawing characters (┌, ┬, ┐, ├, ┼, ┤, └, ┴, ┘, │, ─)
2. Align components vertically when they interact in sequence
3. Use arrows (─▶) to show data flow or process direction
4. Include labels for components and connections
5. Keep diagrams proportional and readable
6. Use indentation to show hierarchy when appropriate