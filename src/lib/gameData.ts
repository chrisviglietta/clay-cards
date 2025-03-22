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
  },
  {
    id: 11,
    integration: "Google Sheets",
    question: "What can you do with Google Sheets in Clay?",
    options: [
      "Seamlessly read, write, and update spreadsheet data in real-time",
      "Find phone numbers from social profiles",
      "Create lead campaigns",
      "Validate email addresses"
    ],
    correctAnswer: "Seamlessly read, write, and update spreadsheet data in real-time",
    explanation: "Google Sheets integration allows real-time data synchronization between Clay and spreadsheets."
  },
  {
    id: 12,
    integration: "Frame.io",
    question: "What is Frame.io's main functionality in Clay?",
    options: [
      "Integrate video review and collaboration workflows",
      "Manage spreadsheets",
      "Send emails",
      "Create presentations"
    ],
    correctAnswer: "Integrate video review and collaboration workflows",
    explanation: "Frame.io enables video content management and feedback workflows in Clay."
  },
  {
    id: 13,
    integration: "Dropcontact",
    question: "What is the main purpose of Dropcontact in Clay?",
    options: [
      "To find work emails and company names from domains",
      "To verify phone numbers",
      "To generate sales leads",
      "To schedule meetings"
    ],
    correctAnswer: "To find work emails and company names from domains",
    explanation: "Dropcontact is used to find work emails and company names from domains, making contact research more efficient."
  },
  {
    id: 14,
    integration: "Enrow",
    question: "What is Enrow's primary function in Clay?",
    options: [
      "To find and verify email addresses",
      "To analyze website traffic",
      "To manage social media accounts",
      "To track customer engagement"
    ],
    correctAnswer: "To find and verify email addresses",
    explanation: "Enrow is specifically designed to find and verify email addresses, ensuring accurate contact information."
  },
  {
    id: 15,
    integration: "Icypeas",
    question: "What information does Icypeas require to find work email addresses?",
    options: [
      "Name and company domain",
      "Phone number only",
      "Social media profiles",
      "Physical address"
    ],
    correctAnswer: "Name and company domain",
    explanation: "Icypeas finds work email addresses using a person's name and their company domain."
  },
  {
    id: 16,
    integration: "Prospeo",
    question: "What type of data enrichment does Prospeo provide?",
    options: [
      "Person details using name, domain, or LinkedIn",
      "Company financial records only",
      "Social media engagement metrics",
      "Website analytics data"
    ],
    correctAnswer: "Person details using name, domain, or LinkedIn",
    explanation: "Prospeo enriches person details using various inputs including name, domain, or LinkedIn information."
  },
  {
    id: 17,
    integration: "Harmonic.ai",
    question: "What type of data does Harmonic.ai provide in Clay?",
    options: [
      "Fundraising data and company info",
      "Weather data",
      "Stock market analysis",
      "Social media trends"
    ],
    correctAnswer: "Fundraising data and company info",
    explanation: "Harmonic.ai provides fundraising data and enriches company information using domain or LinkedIn URL."
  },
  {
    id: 18,
    integration: "Google Gemini",
    question: "What is Google Gemini used for in Clay?",
    options: [
      "Advanced natural language processing tasks",
      "Image editing",
      "Video streaming",
      "File storage"
    ],
    correctAnswer: "Advanced natural language processing tasks",
    explanation: "Google Gemini is used for advanced natural language processing tasks using Gemini 1.0 Pro."
  },
  {
    id: 19,
    integration: "Dealroom.co",
    question: "What specific type of data does Dealroom.co provide?",
    options: [
      "Company fundraising data",
      "Employee satisfaction scores",
      "Customer reviews",
      "Product inventory"
    ],
    correctAnswer: "Company fundraising data",
    explanation: "Dealroom.co specializes in providing fundraising data for companies."
  },
  {
    id: 20,
    integration: "TitanX",
    question: "What is the current status of TitanX integration?",
    options: [
      "Coming Soon",
      "Fully operational",
      "In beta testing",
      "Discontinued"
    ],
    correctAnswer: "Coming Soon",
    explanation: "TitanX integration is currently listed as 'Coming Soon' in Clay."
  },
  {
    id: 21,
    integration: "Firmable",
    question: "What region-specific data does Firmable provide?",
    options: [
      "Australian leads' contact information",
      "European market data",
      "North American business contacts",
      "Asian company profiles"
    ],
    correctAnswer: "Australian leads' contact information",
    explanation: "Firmable specializes in providing contact information for Australian leads."
  },
  {
    id: 22,
    integration: "Google Sheets",
    question: "What operations can you perform with Google Sheets in Clay?",
    options: [
      "Lookup, add, update, and upload data",
      "Create charts only",
      "Format cells",
      "Share spreadsheets"
    ],
    correctAnswer: "Lookup, add, update, and upload data",
    explanation: "Google Sheets integration allows you to lookup, add, update, and upload data using column and value."
  },
  {
    id: 23,
    integration: "Customer.io",
    question: "What can you do with the Customer.io integration?",
    options: [
      "Add or update customer data",
      "Process payments",
      "Create marketing emails",
      "Schedule meetings"
    ],
    correctAnswer: "Add or update customer data",
    explanation: "Customer.io integration allows you to effortlessly add or update customer data in your Customer.io account."
  },
  {
    id: 24,
    integration: "The Swarm",
    question: "What type of data does The Swarm provide?",
    options: [
      "Company Data",
      "Personal Data",
      "Market Research",
      "Social Media Analytics"
    ],
    correctAnswer: "Company Data",
    explanation: "The Swarm provides company data integration in Clay."
  },
  {
    id: 25,
    integration: "Mistral",
    question: "What is Mistral's main function in Clay?",
    options: [
      "Generate text using LLM Models",
      "Process images",
      "Analyze data",
      "Create presentations"
    ],
    correctAnswer: "Generate text using LLM Models",
    explanation: "Mistral uses LLM Models to generate text in Clay."
  },
  {
    id: 26,
    integration: "BetterContact",
    question: "What information can BetterContact find in Clay?",
    options: [
      "Work emails and mobile phone numbers",
      "Social media posts",
      "Company revenue data",
      "Website traffic"
    ],
    correctAnswer: "Work emails and mobile phone numbers",
    explanation: "BetterContact helps find work emails and mobile phone numbers for prospects."
  },
  {
    id: 27,
    integration: "FullEnrich",
    question: "What data sources does FullEnrich use to find contact information?",
    options: [
      "Social profiles and company details",
      "Public records only",
      "Email databases only",
      "Phone directories only"
    ],
    correctAnswer: "Social profiles and company details",
    explanation: "FullEnrich finds contact information using social profiles and company details."
  },
  {
    id: 28,
    integration: "Modash",
    question: "What type of data does Modash enrich in Clay?",
    options: [
      "Social media influencer data",
      "Company financial data",
      "Website analytics",
      "Email marketing metrics"
    ],
    correctAnswer: "Social media influencer data",
    explanation: "Modash enriches social media influencer data in Clay."
  },
  {
    id: 29,
    integration: "La Growth Machine",
    question: "What methods can you use to search leads in La Growth Machine?",
    options: [
      "Email, LinkedIn URL, and ID",
      "Phone numbers only",
      "Company names only",
      "Physical addresses only"
    ],
    correctAnswer: "Email, LinkedIn URL, and ID",
    explanation: "La Growth Machine allows searching leads by email, LinkedIn URL, and ID."
  },
  {
    id: 30,
    integration: "Mixrank",
    question: "What can Mixrank do with social media profiles?",
    options: [
      "Find emails from LinkedIn/Twitter profiles",
      "Create social media posts",
      "Schedule content",
      "Analyze engagement"
    ],
    correctAnswer: "Find emails from LinkedIn/Twitter profiles",
    explanation: "Mixrank can find emails from LinkedIn/Twitter profiles and enrich profiles using email."
  },
  {
    id: 31,
    integration: "PhantomBuster",
    question: "What operations can you perform with PhantomBuster in Clay?",
    options: [
      "Pull and push data with PhantomBuster agents",
      "Create new automation scripts",
      "Edit existing automations",
      "Schedule agent runs"
    ],
    correctAnswer: "Pull and push data with PhantomBuster agents",
    explanation: "PhantomBuster integration allows pulling extracted data and pushing data into agent executions."
  },
  {
    id: 32,
    integration: "RB2B",
    question: "What does RB2B do with website visitor data?",
    options: [
      "Sends profiles to Clay for enrichment",
      "Analyzes traffic patterns",
      "Creates marketing campaigns",
      "Generates reports"
    ],
    correctAnswer: "Sends profiles to Clay for enrichment",
    explanation: "RB2B sends website visitor profiles to Clay for data enrichment."
  },
  {
    id: 33,
    integration: "Loom",
    question: "What can you do with Loom videos in Clay?",
    options: [
      "Transcribe videos",
      "Edit video content",
      "Create animations",
      "Share recordings"
    ],
    correctAnswer: "Transcribe videos",
    explanation: "The Loom integration enables users to transcribe their Loom videos."
  },
  {
    id: 34,
    integration: "Store Leads",
    question: "What criteria can you use to find company data in Store Leads?",
    options: [
      "Domain, keywords, technology, or ecommerce platform",
      "Location only",
      "Company size only",
      "Industry only"
    ],
    correctAnswer: "Domain, keywords, technology, or ecommerce platform",
    explanation: "Store Leads finds company data using domain, keywords, technology, or ecommerce platform."
  },
  {
    id: 35,
    integration: "CrustData",
    question: "What types of entities can you enrich with CrustData?",
    options: [
      "Companies and individuals",
      "Products only",
      "Locations only",
      "Events only"
    ],
    correctAnswer: "Companies and individuals",
    explanation: "CrustData enables enrichment of both target companies and individuals."
  },
  {
    id: 36,
    integration: "ZenRows",
    question: "How does ZenRows simplify web scraping in Clay?",
    options: [
      "Retrieves results with a single action",
      "Requires complex configuration",
      "Needs manual data cleaning",
      "Uses multiple API calls"
    ],
    correctAnswer: "Retrieves results with a single action",
    explanation: "ZenRows simplifies web scraping by retrieving results with a single action."
  },
  {
    id: 37,
    integration: "Postgres",
    question: "What can you do with Postgres in Clay?",
    options: [
      "Check for specific rows using Lookup Row action",
      "Create new databases",
      "Modify table structures",
      "Manage user permissions"
    ],
    correctAnswer: "Check for specific rows using Lookup Row action",
    explanation: "Postgres integration allows checking for specific rows using the Lookup Row action."
  },
  {
    id: 38,
    integration: "Debounce",
    question: "What are the benefits of using Debounce in Clay?",
    options: [
      "Validate emails and minimize server requests",
      "Create email templates",
      "Send bulk emails",
      "Track email opens"
    ],
    correctAnswer: "Validate emails and minimize server requests",
    explanation: "Debounce helps validate emails efficiently and minimize server requests."
  },
  {
    id: 39,
    integration: "Google",
    question: "What types of searches can you perform with Google in Clay?",
    options: [
      "Jobs, businesses, reviews, and web searches",
      "Images only",
      "Videos only",
      "Documents only"
    ],
    correctAnswer: "Jobs, businesses, reviews, and web searches",
    explanation: "Google integration enables searching for jobs, businesses, reviews, and web content."
  },
  {
    id: 40,
    integration: "Mapbox",
    question: "What geographical calculations can Mapbox perform in Clay?",
    options: [
      "Distances, durations, and data normalization",
      "Weather patterns",
      "Population density",
      "Terrain analysis"
    ],
    correctAnswer: "Distances, durations, and data normalization",
    explanation: "Mapbox calculates distances, durations, and normalizes geographical data between locations."
  },
  {
    id: 41,
    integration: "Google Shopping",
    question: "What can you find using Google Shopping in Clay?",
    options: [
      "Shopping results for any query",
      "Store locations only",
      "Price comparisons only",
      "Product reviews only"
    ],
    correctAnswer: "Shopping results for any query",
    explanation: "Google Shopping finds shopping results for any query using Google's powerful search."
  },
  {
    id: 42,
    integration: "ZeroBounce",
    question: "What information does ZeroBounce require to find work emails?",
    options: [
      "Name and company domain",
      "Phone number only",
      "Physical address only",
      "Social media profiles only"
    ],
    correctAnswer: "Name and company domain",
    explanation: "ZeroBounce finds and validates work emails using name and company domain."
  },
  {
    id: 43,
    integration: "BuiltWith",
    question: "What information does BuiltWith provide about websites?",
    options: [
      "Tech stack information",
      "Traffic statistics",
      "Content analysis",
      "User demographics"
    ],
    correctAnswer: "Tech stack information",
    explanation: "BuiltWith quickly uncovers the technology stack used by websites or companies."
  },
  {
    id: 44,
    integration: "Coda",
    question: "What operations can you perform on Coda table rows?",
    options: [
      "Check, create, and update rows",
      "Delete tables only",
      "Format cells only",
      "Share documents only"
    ],
    correctAnswer: "Check, create, and update rows",
    explanation: "Coda integration allows checking, creating, and updating table rows efficiently."
  },
  {
    id: 45,
    integration: "Captions",
    question: "What type of content can you generate with Captions?",
    options: [
      "AI-generated talking videos",
      "Text documents",
      "Image galleries",
      "Audio files"
    ],
    correctAnswer: "AI-generated talking videos",
    explanation: "Captions generates talking videos using AI technology."
  },
  {
    id: 46,
    integration: "Slack",
    question: "What can you do with messages in the Slack integration?",
    options: [
      "Retrieve and send messages and notifications",
      "Edit message history",
      "Delete channels",
      "Manage user roles"
    ],
    correctAnswer: "Retrieve and send messages and notifications",
    explanation: "Slack integration allows retrieving and sending messages, notifications, and member lists."
  },
  {
    id: 47,
    integration: "Google PageSpeed",
    question: "What data can you retrieve with Google PageSpeed?",
    options: [
      "Performance data for URLs",
      "User behavior analytics",
      "Server logs",
      "Error reports"
    ],
    correctAnswer: "Performance data for URLs",
    explanation: "Google PageSpeed retrieves performance data for URLs using PageSpeed Insights API."
  },
  {
    id: 48,
    integration: "Glassdoor",
    question: "How do you retrieve company data from Glassdoor?",
    options: [
      "Using a domain name",
      "Using employee emails",
      "Using company size",
      "Using location"
    ],
    correctAnswer: "Using a domain name",
    explanation: "Glassdoor retrieves company data using a domain name."
  },
  {
    id: 49,
    integration: "Sendspark",
    question: "What can you do with video content in Sendspark?",
    options: [
      "Create and manage videos",
      "Only view videos",
      "Only share videos",
      "Only delete videos"
    ],
    correctAnswer: "Create and manage videos",
    explanation: "Sendspark allows creating and managing video content in Clay."
  },
  {
    id: 50,
    integration: "SignalHire",
    question: "What methods can you use to find candidates in SignalHire?",
    options: [
      "LinkedIn URL, Email, or Phone Number",
      "Resume only",
      "Job title only",
      "Company name only"
    ],
    correctAnswer: "LinkedIn URL, Email, or Phone Number",
    explanation: "SignalHire finds candidates using their LinkedIn URL, Email, or Phone Number."
  },
  {
    id: 51,
    integration: "Bright Data",
    question: "What type of data can you gather with Bright Data?",
    options: [
      "Realtime web data",
      "Historical data only",
      "Internal data only",
      "Offline data only"
    ],
    correctAnswer: "Realtime web data",
    explanation: "Bright Data's Data Collector gathers realtime data in Clay."
  },
  {
    id: 52,
    integration: "Close",
    question: "What CRM operations can you perform with Close?",
    options: [
      "Manage leads, contacts, and sequences",
      "Process payments only",
      "Generate reports only",
      "Schedule meetings only"
    ],
    correctAnswer: "Manage leads, contacts, and sequences",
    explanation: "Close integration manages CRM leads, contacts, and sequences through various operations."
  },
  {
    id: 53,
    integration: "Swordfish",
    question: "How does Swordfish enhance user profiles?",
    options: [
      "Using AI-powered data enrichment",
      "Manual data entry",
      "User surveys",
      "Social media scraping"
    ],
    correctAnswer: "Using AI-powered data enrichment",
    explanation: "Swordfish enhances user profiles using AI-powered data enrichment."
  },
  {
    id: 54,
    integration: "Enrichley",
    question: "What types of data can Enrichley verify?",
    options: [
      "Professional email addresses and company data",
      "Personal social media accounts",
      "Credit information",
      "Educational records"
    ],
    correctAnswer: "Professional email addresses and company data",
    explanation: "Enrichley verifies professional email addresses and company data."
  },
  {
    id: 55,
    integration: "DappRadar",
    question: "What blockchain data can you retrieve with DappRadar?",
    options: [
      "Dapp and NFT data across blockchains",
      "Cryptocurrency prices only",
      "Wallet addresses only",
      "Transaction history only"
    ],
    correctAnswer: "Dapp and NFT data across blockchains",
    explanation: "DappRadar retrieves dapp and NFT data, discovering top performers across blockchains."
  },
  {
    id: 56,
    integration: "Instagram",
    question: "What data can you scrape from Instagram?",
    options: [
      "Personal and company data using URL, name, or domain",
      "Private messages only",
      "Story views only",
      "Account settings only"
    ],
    correctAnswer: "Personal and company data using URL, name, or domain",
    explanation: "Instagram integration allows scraping personal and company data using URL, name, or domain."
  },
  {
    id: 57,
    integration: "Tavus",
    question: "What can you do with Tavus in Clay?",
    options: [
      "Generate unique outreach videos and store results",
      "Edit existing videos",
      "Schedule video calls",
      "Stream live content"
    ],
    correctAnswer: "Generate unique outreach videos and store results",
    explanation: "Tavus generates unique outreach videos and stores results via Webhook URL."
  },
  {
    id: 58,
    integration: "Apify",
    question: "How does Apify handle data retrieval in Clay?",
    options: [
      "Executes Apify actors effortlessly",
      "Requires manual configuration",
      "Uses complex workflows",
      "Needs constant monitoring"
    ],
    correctAnswer: "Executes Apify actors effortlessly",
    explanation: "Apify simplifies data retrieval by executing Apify actors effortlessly."
  },
  {
    id: 59,
    integration: "Google News",
    question: "What is the query limit for Google News searches?",
    options: [
      "14 words or less",
      "No limit",
      "50 words",
      "100 characters"
    ],
    correctAnswer: "14 words or less",
    explanation: "Google News finds news results for user queries that are 14 words or less."
  },
  {
    id: 60,
    integration: "ClearoutPhone",
    question: "What information can ClearoutPhone verify about phone numbers?",
    options: [
      "Activity status and phone type",
      "Owner name only",
      "Location only",
      "Service provider only"
    ],
    correctAnswer: "Activity status and phone type",
    explanation: "ClearoutPhone checks if a phone number is active and identifies its type (mobile or landline)."
  }
]; 