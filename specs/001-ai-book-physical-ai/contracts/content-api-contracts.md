# Content API Contracts: AI-Native Technical Book

## Overview
This document defines the API contracts for the AI-native technical book on Physical AI & Humanoid Robotics. Since this is a documentation project, the "API" refers to the content structure, interfaces, and data formats used throughout the book.

## Content Structure API

### Module Interface
```
{
  "moduleId": "string (format: 'module-{number}')",
  "title": "string",
  "description": "string",
  "focus": "string",
  "lessons": "array of Lesson objects",
  "moduleNumber": "integer (1-4)",
  "prerequisites": "array of string",
  "learningOutcomes": "array of string"
}
```

### Lesson Interface
```
{
  "lessonId": "string (format: 'module-{number}-lesson-{number}')",
  "title": "string",
  "moduleRef": "string (moduleId)",
  "position": "integer (1-4)",
  "conceptExplanation": "string (markdown)",
  "toolOverview": "string (markdown)",
  "architectureWorkflow": "string (markdown)",
  "learningOutcomes": "array of string",
  "realWorldRelevance": "string",
  "prerequisites": "array of string",
  "duration": "integer (minutes)"
}
```

### Tool Interface
```
{
  "toolId": "string",
  "name": "string",
  "version": "string (optional)",
  "purpose": "string",
  "usedIn": "array of Lesson IDs",
  "documentationLink": "URL (optional)",
  "installationGuide": "string (markdown, optional)"
}
```

### ArchitectureElement Interface
```
{
  "elementId": "string",
  "name": "string",
  "type": "enum (Node|Topic|Service|Component|System)",
  "description": "string",
  "relationships": "array of ArchitectureElement IDs",
  "usedIn": "array of Lesson IDs (optional)"
}
```

## Content Delivery API

### Get Module
- **Endpoint**: `/api/modules/{moduleNumber}`
- **Method**: GET
- **Response**: Module object as defined above
- **Errors**: 404 if module doesn't exist

### Get Lesson
- **Endpoint**: `/api/lessons/{moduleNumber}/{lessonNumber}`
- **Method**: GET
- **Response**: Lesson object as defined above
- **Errors**: 404 if lesson doesn't exist

### Search Content
- **Endpoint**: `/api/search`
- **Method**: GET
- **Query Parameters**: 
  - `q`: search query string
  - `type`: content type filter (module|lesson|tool|concept)
- **Response**: Array of search results with content type and reference

## Content Validation API

### Validate Lesson Structure
- **Endpoint**: `/api/validate/lesson`
- **Method**: POST
- **Request Body**: Lesson object
- **Response**: 
  ```
  {
    "isValid": "boolean",
    "errors": "array of string",
    "warnings": "array of string"
  }
  ```

### Validate Module Structure
- **Endpoint**: `/api/validate/module`
- **Method**: POST
- **Request Body**: Module object
- **Response**: 
  ```
  {
    "isValid": "boolean",
    "errors": "array of string",
    "warnings": "array of string"
  }
  ```

## Content Relations API

### Get Related Content
- **Endpoint**: `/api/related/{contentType}/{contentId}`
- **Method**: GET
- **Response**: Array of related content objects with type and reference

### Get Learning Path
- **Endpoint**: `/api/path/{startModule}/{endModule}`
- **Method**: GET
- **Response**: Array of content IDs representing the recommended learning path

## Content Metadata API

### Get All Modules
- **Endpoint**: `/api/modules`
- **Method**: GET
- **Response**: Array of Module summary objects
  ```
  {
    "moduleId": "string",
    "title": "string",
    "description": "string",
    "lessonCount": "integer",
    "estimatedDuration": "integer (hours)"
  }
  ```

### Get Module Lessons
- **Endpoint**: `/api/modules/{moduleNumber}/lessons`
- **Method**: GET
- **Response**: Array of Lesson summary objects
  ```
  {
    "lessonId": "string",
    "title": "string",
    "position": "integer",
    "estimatedDuration": "integer (minutes)"
  }
  ```

## Content Rendering API

### Render Lesson to HTML
- **Endpoint**: `/api/render/lesson/{moduleNumber}/{lessonNumber}`
- **Method**: GET
- **Query Parameters**:
  - `format`: output format (html|pdf|epub)
- **Response**: Rendered content in requested format

### Render Module to HTML
- **Endpoint**: `/api/render/module/{moduleNumber}`
- **Method**: GET
- **Query Parameters**:
  - `format`: output format (html|pdf|epub)
- **Response**: Rendered content in requested format

## Error Responses

All API endpoints follow the standard error response format:
```
{
  "error": {
    "code": "string",
    "message": "string",
    "details": "object (optional)"
  }
}
```

Common error codes:
- `CONTENT_NOT_FOUND`: Requested content does not exist
- `VALIDATION_ERROR`: Content does not meet structural requirements
- `INVALID_PARAMETER`: Request parameters are invalid
- `INTERNAL_ERROR`: An unexpected error occurred