export type ViewLens = 'editorial' | 'telemetry';

export interface ProjectSpecimen {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  organization: string;
  period: string;
  location: string;
  role: string;
  scaleMetric: string;
  scaleLabel: string;
  summary: string;
  tags: string[];
  editorialLens: {
    hookConcept: string;
    narrativeTone: string;
    scriptTechnique: string;
    audiencePsychology: string;
    editorialExcerpt: string;
  };
  telemetryLens: {
    primaryMetric: string;
    reachVector: string;
    audienceCohort: string;
    retentionInsight: string;
    algorithmFactors: string[];
    quantifiableGains: { label: string; value: string }[];
  };
  chapters: {
    problem: string;
    constraints: string[];
    approach: string;
    systemArchitecture: string;
    engineeringDetails: string[];
    outcomes: string[];
    retrospective: string;
  };
}

export interface FieldNote {
  number: string;
  title: string;
  thesis: string;
  body: string[];
  keyPrinciple: string;
  metricCorrelation: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  period: string;
  location?: string;
  highlights: string[];
  skillsUsed: string[];
  verifiedMetric: string;
}
