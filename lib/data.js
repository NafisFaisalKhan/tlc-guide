// TLCGuide data module
import { DollarSign, Clock, Car, Users } from 'lucide-react';

export const languages = [
  { code: 'en', name: 'English' },
  { code: 'es', name: 'Español' },
  { code: 'zh', name: '中文' },
  { code: 'ur', name: 'اردو' },
  { code: 'bn', name: 'বাংলা' }
];

export const quickFacts = [
  {
    icon: 'DollarSign',
    title: 'Total Cost',
    value: '$745-$880',
    description: 'Includes all fees and training'
  },
  {
    icon: 'Clock',
    title: 'Processing Time',
    value: '7-14 days',
    description: 'After completing requirements'
  },
  {
    icon: 'Car',
    title: 'License Duration',
    value: '3 years',
    description: 'Renewable every 3 years'
  },
  {
    icon: 'Users',
    title: 'Age Requirement',
    value: '21+ years',
    description: 'Minimum age to apply'
  }
];

export const costBreakdown = [
  { item: 'TLC License Application Fee', cost: '$252.00' },
  { item: 'Drug Test', cost: '$34.00' },
  { item: 'Fingerprinting & Background Check', cost: '$90.25' },
  { item: '24-Hour Driver Education Course', cost: '$245.00-$250.00' },
  { item: 'Wheelchair Accessibility Training', cost: '$50-$125' },
  { item: 'Defensive Driving Course', cost: '$25.00-$75.00' },
  { item: 'Miscellaneous Fees & Documents', cost: '$53.50' }
];

export const applicationSteps = [
  {
    number: 1,
    title: 'Get Chauffeur License',
    description: "Upgrade your regular driver's license to Class E chauffeur license at DMV. Bring required documents and pay fees."
  },
  {
    number: 2,
    title: 'Apply Online',
    description: "Submit your TLC application through LARS system. Save your application number - you'll need it for all other steps."
  },
  {
    number: 3,
    title: 'Drug Test & Fingerprinting',
    description: 'Schedule drug test at LabCorp and fingerprinting at IdentoGO. Use service code 15425Y for fingerprinting.'
  },
  {
    number: 4,
    title: 'Medical Examination',
    description: 'Get medical exam from licensed physician using TLC medical form. Submit results through TLC Upload Portal.'
  },
  {
    number: 5,
    title: 'Complete Training Courses',
    description: 'Finish defensive driving course, wheelchair accessibility training, and 24-hour driver education course.'
  },
  {
    number: 6,
    title: 'Pass Final Exam',
    description: 'Take and pass the 80-question TLC exam with 70% score (56 correct answers). Receive your license by mail.'
  }
];

export const faqData = [
  {
    question: 'What is a TLC license?',
    answer: 'A TLC license is a permit issued by the New York City Taxi and Limousine Commission that allows drivers to operate for-hire vehicles such as taxis, ride-sharing cars (Uber/Lyft), and livery vehicles within NYC.'
  },
  {
    question: 'How much does a TLC license cost?',
    answer: 'A TLC license typically costs around $500-$700 total, including application fees ($84), fingerprinting ($75), drug test ($25-$50), medical exam ($100-$200), and required training courses ($200-$400).'
  },
  {
    question: 'How do I get a TLC license for Uber?',
    answer: "To get a TLC license for Uber: 1) Be 21+ with valid driver's license, 2) Pass background check, 3) Complete TLC application online, 4) Take drug test and medical exam, 5) Complete 24-hour driver education course, 6) Pass TLC exam, 7) Get fingerprinted, 8) Receive your TLC license."
  },
  {
    question: 'Do I need a TLC license for Uber?',
    answer: 'Yes, to drive for Uber in NYC, you need a TLC license. The process includes being 21+, passing background checks, completing TLC application, taking required courses, passing TLC exam, and meeting vehicle requirements.'
  },
  {
    question: 'What does TLC license stand for?',
    answer: 'TLC stands for Taxi and Limousine Commission, which is the New York City agency that regulates for-hire vehicle services including taxis, ride-sharing, and livery services.'
  },
  {
    question: 'Where can I get a TLC license in NYC?',
    answer: 'You can apply for a TLC license at TLC offices located in Long Island City, Queens, or online through the NYC TLC website. The main office is at 33-01 Queens Boulevard, Long Island City, NY 11101.'
  },
  {
    question: 'How long does it take to get a TLC license?',
    answer: 'Getting a TLC license typically takes 2-4 weeks from application submission to receiving your physical license, assuming all requirements are completed promptly and there are no complications with background checks.'
  },
  {
    question: 'Can you get a TLC license with a felony?',
    answer: 'Getting a TLC license with a felony is possible but depends on the nature, severity, and timing of the conviction. TLC conducts background checks and evaluates each case individually. Recent or serious felonies may disqualify you.'
  },
  {
    question: 'What do I need for a TLC license?',
    answer: "To get a TLC license you need: valid driver's license (1+ years), Social Security number or ITIN, clean background check, medical exam, drug test, completion of 24-hour driver education course, and payment of required fees."
  },
  {
    question: 'How do I renew my TLC license?',
    answer: 'To renew your TLC license: 1) Complete renewal application online or in person, 2) Pay renewal fee, 3) Complete required continuing education course (if applicable), 4) Submit updated medical certificate if required, 5) Ensure no outstanding violations or fees.'
  },
  {
    question: 'When do I need to renew my TLC license?',
    answer: 'TLC licenses must be renewed every 3 years. You should begin the renewal process 60-90 days before your license expires to ensure continuity. Check your license expiration date and set reminders.'
  },
  {
    question: 'Can you drive a TLC car without a TLC license?',
    answer: "No, you cannot legally drive a TLC-licensed vehicle for commercial purposes without a valid TLC driver's license. Doing so is illegal and can result in fines, vehicle impoundment, and other penalties."
  },
  {
    question: 'What is the minimum age for a TLC license?',
    answer: 'Minimum age for a TLC license is 21 years old. You must also have a valid driver\'s license for at least 1 year and meet other eligibility requirements including background checks and medical clearance.'
  },
  {
    question: 'Can I get a TLC license without a Social Security number?',
    answer: 'No, you cannot get a TLC license without a Social Security Number. However, you may be able to use an Individual Taxpayer Identification Number (ITIN) in some cases - contact TLC directly for specific guidance.'
  },
  {
    question: 'What TLC license course do I need to take?',
    answer: 'TLC license requires completion of a 24-hour Driver Education Course covering topics like TLC rules, customer service, geography, and safety. The course can be taken online or in-person at approved schools.'
  },
  {
    question: 'Why is my TLC license suspended?',
    answer: 'TLC licenses can be suspended for various reasons including: unpaid violations or fines, failure to complete required training, medical certification issues, criminal convictions, or regulatory violations. Contact TLC to determine the specific reason and resolution steps.'
  }
]; 