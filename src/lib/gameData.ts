import { Flashcard } from './types';

export interface GameQuestion {
  id: number;
  integration: string;
  question: string;
  options: string[];
  correctAnswer: string;
  explanation: string;
}

export const gameQuestions: GameQuestion[] = [
  {
    id: 1,
    integration: "Forager",
    question: "What is Forager's main function?",
    options: [
      "Find a person's phone numbers from their social profile",
      "Create and manage lead campaigns",
      "Validate email addresses",
      "Enrich company data"
    ],
    correctAnswer: "Find a person's phone numbers from their social profile",
    explanation: "Forager specializes in finding phone numbers from social profiles for contact discovery."
  },
  {
    id: 2,
    integration: "Smartlead.ai",
    question: "What can you do with Smartlead.ai in Clay?",
    options: [
      "Create, manage, update leads and campaigns; add, remove, lookup leads",
      "Find phone numbers from social profiles",
      "Validate email addresses",
      "Pull data from Airtable"
    ],
    correctAnswer: "Create, manage, update leads and campaigns; add, remove, lookup leads",
    explanation: "Smartlead.ai is a comprehensive tool for managing and optimizing lead campaigns in Clay."
  },
  {
    id: 3,
    integration: "Instantly",
    question: "What is Instantly's primary purpose in Clay?",
    options: [
      "Efficiently add leads to campaigns within the app",
      "Find phone numbers",
      "Enrich company data",
      "Validate email addresses"
    ],
    correctAnswer: "Efficiently add leads to campaigns within the app",
    explanation: "Instantly helps automate lead outreach by efficiently adding leads to campaigns."
  },
  {
    id: 4,
    integration: "Hunter.io",
    question: "What does Hunter.io do in Clay?",
    options: [
      "Validate and find email addresses for individuals and companies, with department filtering",
      "Find phone numbers from social profiles",
      "Create lead campaigns",
      "Pull data from Airtable"
    ],
    correctAnswer: "Validate and find email addresses for individuals and companies, with department filtering",
    explanation: "Hunter.io specializes in email validation and discovery with advanced filtering options."
  },
  {
    id: 5,
    integration: "People Data Labs",
    question: "What can you do with People Data Labs in Clay?",
    options: [
      "Enrich person data, find emails, and generate segmented lists using query parameters",
      "Find phone numbers from social profiles",
      "Create lead campaigns",
      "Pull data from Airtable"
    ],
    correctAnswer: "Enrich person data, find emails, and generate segmented lists using query parameters",
    explanation: "People Data Labs provides comprehensive data enrichment and list generation capabilities."
  },
  {
    id: 6,
    integration: "Airtable",
    question: "What can you do with Airtable in Clay?",
    options: [
      "Manage Airtable records effortlessly: create, update, upsert, and pull data from bases and tables",
      "Find phone numbers",
      "Validate email addresses",
      "Create lead campaigns"
    ],
    correctAnswer: "Manage Airtable records effortlessly: create, update, upsert, and pull data from bases and tables",
    explanation: "Airtable integration allows seamless data management between Clay and Airtable bases."
  },
  {
    id: 7,
    integration: "Findymail",
    question: "What is Findymail's specialty in Clay?",
    options: [
      "Automatically scrape, find & clean emails for B2B prospecting with no bounce/invalid emails",
      "Find phone numbers from social profiles",
      "Create lead campaigns",
      "Pull data from Airtable"
    ],
    correctAnswer: "Automatically scrape, find & clean emails for B2B prospecting with no bounce/invalid emails",
    explanation: "Findymail ensures accurate email discovery with built-in validation for B2B outreach."
  },
  {
    id: 8,
    integration: "Datagma",
    question: "What does Datagma provide in Clay?",
    options: [
      "Find contact info and enrich data on individuals and companies",
      "Create lead campaigns",
      "Pull data from Airtable",
      "Find phone numbers from social profiles"
    ],
    correctAnswer: "Find contact info and enrich data on individuals and companies",
    explanation: "Datagma specializes in comprehensive contact discovery and data enrichment."
  },
  {
    id: 9,
    integration: "ContactOut",
    question: "What is ContactOut's main function in Clay?",
    options: [
      "Find mobile numbers and personal emails using LinkedIn URLs",
      "Create lead campaigns",
      "Pull data from Airtable",
      "Enrich company data"
    ],
    correctAnswer: "Find mobile numbers and personal emails using LinkedIn URLs",
    explanation: "ContactOut specializes in finding contact details from LinkedIn profiles."
  },
  {
    id: 10,
    integration: "LeadMagic",
    question: "What can LeadMagic do in Clay?",
    options: [
      "Enrich company, find work email and mobile data, add or update lead using their social URL",
      "Create lead campaigns",
      "Pull data from Airtable",
      "Validate email addresses"
    ],
    correctAnswer: "Enrich company, find work email and mobile data, add or update lead using their social URL",
    explanation: "LeadMagic provides comprehensive lead enrichment using social data."
  }
]; 