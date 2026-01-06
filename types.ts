export interface ExperienceItem {
  id: number;
  role: string;
  company: string;
  period: string;
  description: string[];
}

export interface EducationItem {
  id: number;
  degree: string;
  institution: string;
  year: string;
  details?: string;
}

export interface CertificateItem {
  id: number;
  title: string;
  issuer?: string;
  details?: string;
}

export interface NavItem {
  label: string;
  href: string;
}