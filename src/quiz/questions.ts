export interface Question {
    key: string;
    title: string;
    subtitle?: string;
    answers: string[];
}

export const questions: Question[] = [
    {
        key: "Q1",
        title: "What equipment do you want to pilot BMAir on first?",
        subtitle: "Select the primary equipment type for your pilot program.",
        answers: ["Excavators", "Wheel Loaders", "Bulldozers", "Other"]
    },
    {
        key: "Q2",
        title: "What's your biggest challenge with current air filtration?",
        subtitle: "Help us understand your specific pain points.",
        answers: [
            "Dust getting into the cab",
            "Filter changes too frequent",
            "Poor air quality for operators",
            "High maintenance costs",
            "New MSHA Regulations"
        ]
    },
    {
        key: "Q3",
        title: "How many machines would you like to pilot BMAir on?",
        subtitle: "We can scale from 1 to 50+ machines.",
        answers: ["1-2 machines", "3-5 machines", "6-10 machines", "10+ machines"]
    },
    {
        key: "Q4",
        title: "What's your timeline for implementing this solution?",
        subtitle: "This helps us plan the pilot program schedule.",
        answers: ["ASAP (within 30 days)", "Next 1-3 months", "Next 3-6 months", "Planning for next year"]
    },
    {
        key: "Q5",
        title: "Who will be the main contact for this pilot program?",
        subtitle: "We'll work directly with this person to coordinate everything.",
        answers: ["Maintenance Manager", "Operations Manager", "Safety Manager", "Plant Manager", "Other"]
    }
];

export function getQuestionByKey(key: string): Question | undefined {
    return questions.find(q => q.key === key);
}

export function getQuestionIndex(key: string): number {
    return questions.findIndex(q => q.key === key);
} 