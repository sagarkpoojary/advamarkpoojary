
import React from 'react';
import { ExperienceItem, EducationItem, CertificateItem, NavItem } from './types';
import { Shield, Gavel, Scale, FileText, Lock, Globe, Search, BookOpen } from 'lucide-react';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Dossier', href: '#home' },
  { label: 'Mandate', href: '#about' },
  { label: 'Practice', href: '#practice' },
  { label: 'Experience', href: '#experience' },
  { label: 'Consult', href: '#contact' },
];

export const PRACTICE_AREAS = [
  {
    title: "Criminal Litigation",
    desc: "Aggressive defense strategies and constitutional protection.",
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=2070&auto=format&fit=crop&grayscale=1",
    icon: <Gavel size={20} />
  },
  {
    title: "Corporate Governance",
    desc: "Compliance, risk mitigation, and IRDAI regulatory advisory.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop&grayscale=1",
    icon: <Shield size={20} />
  },
  {
    title: "Motor Claims (MACT)",
    desc: "Specialized tribunal representation and liability analysis.",
    image: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?q=80&w=2070&auto=format&fit=crop&grayscale=1",
    icon: <Scale size={20} />
  },
  {
    title: "Real Estate Law",
    desc: "Property documentation, due diligence, and title disputes.",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop&grayscale=1",
    icon: <FileText size={20} />
  },
  {
    title: "Arbitration",
    desc: "Strategic dispute resolution outside formal court settings.",
    image: "https://images.unsplash.com/photo-1505664194779-8beaceb93744?q=80&w=2070&auto=format&fit=crop&grayscale=1",
    icon: <Lock size={20} />
  },
  {
    title: "Civil Litigation",
    desc: "Complex recovery suits and contractual enforcement.",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2070&auto=format&fit=crop&grayscale=1",
    icon: <Globe size={20} />
  }
];

export const EXPERIENCE_DATA: ExperienceItem[] = [
  {
    id: 1,
    role: "Legal Executive",
    company: "IFFCO Tokio General Insurance",
    period: "2023 – PRESENT",
    description: [
      "Principal representation in MACT cases across state tribunals.",
      "Drafting of complex legal instruments and internal risk assessments.",
      "Regulatory oversight for IRDAI compliance protocols."
    ]
  },
  {
    id: 2,
    role: "Litigation Intern",
    company: "Kadri Associates",
    period: "2023",
    description: [
      "Trial preparation for high-value civil litigation matters.",
      "Advanced legal research into procedural criminal law."
    ]
  }
];

export const CONTACT_INFO = {
  email: "amarkpoojary@gmail.com",
  phone: "+91 8075938913",
  location: "Mangalore, IN",
  linkedin: "https://www.linkedin.com/in/advocate-amar-k-17774618b",
  jurisdiction: "High Court / MACT / Civil Courts",
  status: "ACTIVE_PRACTICE"
};

export const SKILLS_GRID = [
  "MACT SPECIALIST", "LEGAL DRAFTING", "IRDAI COMPLIANCE", "CRIMINAL DEFENSE", 
  "DUE DILIGENCE", "ARBITRATION", "TORT LAW", "PROCEDURAL LAW"
];

// Added missing Education Data
export const EDUCATION_DATA: EducationItem[] = [
  {
    id: 1,
    degree: "Bachelor of Laws (LL.B.)",
    institution: "SDM Law College, Mangalore",
    year: "2018 – 2023",
  }
];

// Added missing Skills Data for Competencies Section
export const SKILLS_DATA = [
  { label: "Litigation", icon: <Scale /> },
  { label: "Compliance", icon: <Shield /> },
  { label: "Drafting", icon: <FileText /> },
  { label: "Legal Research", icon: <Search /> },
  { label: "Procedural Law", icon: <BookOpen /> },
];

// Added missing Languages
export const LANGUAGES = ["English", "Hindi", "Kannada", "Tulu", "Konkani"];

// Added missing Certificates Data
export const CERTIFICATES_DATA: CertificateItem[] = [
  {
    id: 1,
    title: "Advocate Enrollment",
    issuer: "Bar Council of India",
    details: "Authorized legal practitioner in High Courts and Subordinate Courts."
  },
  {
    id: 2,
    title: "Insurance Law Certificate",
    issuer: "IRDAI Compliance Division",
    details: "Certified in regulatory frameworks for general insurance litigation."
  }
];

// Added missing Inspiration Data
export const INSPIRATION_DATA = [
  {
    id: 1,
    quote: "Justice is the first virtue of social institutions.",
    source: "John Rawls",
    context: "Legal Philosophy"
  },
  {
    id: 2,
    quote: "The path of the law has not been logic: it has been experience.",
    source: "Oliver Wendell Holmes Jr.",
    context: "The Common Law"
  },
  {
    id: 3,
    quote: "Law is order, and good law is good order.",
    source: "Aristotle",
    context: "Philosophy"
  }
];
