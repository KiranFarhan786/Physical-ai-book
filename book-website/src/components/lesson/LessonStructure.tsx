import React from 'react';
import clsx from 'clsx';
import styles from './LessonStructure.module.css';

// Define TypeScript interface for our props
interface LessonStructureProps {
  concept: string;
  tools: string;
  workflow: string;
  relevance: string;
  outcomes: string[];
}

// Create the LessonStructure component
const LessonStructure: React.FC<LessonStructureProps> = ({ 
  concept, 
  tools, 
  workflow, 
  relevance, 
  outcomes 
}) => {
  return (
    <div className={styles.lessonContainer}>
      <section className={styles.lessonSection}>
        <h2>Concept Explanation</h2>
        <div className={styles.lessonIntro}>
          {concept}
        </div>
      </section>

      <section className={styles.lessonSection}>
        <h2>Tools & Technologies</h2>
        <div className={styles.toolsSection}>
          {tools}
        </div>
      </section>

      <section className={styles.lessonSection}>
        <h2>Architecture & Workflow</h2>
        <div className={styles.architectureDiagram}>
          {workflow}
        </div>
      </section>

      <section className={styles.lessonSection}>
        <h2>Real-World Relevance</h2>
        <div className={styles.relevanceSection}>
          {relevance}
        </div>
      </section>

      <section className={styles.lessonSection}>
        <h2>Learning Outcomes</h2>
        <div className={styles.learningOutcomes}>
          <ul className={styles.outcomeList}>
            {outcomes.map((outcome, index) => (
              <li key={index} className={styles.outcomeItem}>
                <span className={styles.outcomeIcon}>🎯</span>
                {outcome}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
};

export default LessonStructure;