import { type RandomTextResponse } from '../schema';

export async function getRandomText(): Promise<RandomTextResponse> {
    // This is a placeholder declaration! Real code should be implemented here.
    // The goal of this handler is fetching a random text content from the database.
    // For now, returns some sample random text content.
    
    const sampleTexts = [
        {
            id: 1,
            title: "Lorem Ipsum Classic",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            created_at: new Date()
        },
        {
            id: 2,
            title: "Random Thoughts",
            content: "The quick brown fox jumps over the lazy dog. This pangram contains every letter of the alphabet at least once, making it perfect for testing fonts and keyboards.",
            created_at: new Date()
        },
        {
            id: 3,
            title: "Philosophy Corner",
            content: "To be or not to be, that is the question. Whether 'tis nobler in the mind to suffer the slings and arrows of outrageous fortune, or to take arms against a sea of troubles.",
            created_at: new Date()
        },
        {
            id: 4,
            title: null,
            content: "Sometimes the best content comes without a title. This text represents the beauty of simplicity and the power of words standing alone without additional context.",
            created_at: new Date()
        }
    ];
    
    const randomIndex = Math.floor(Math.random() * sampleTexts.length);
    return Promise.resolve(sampleTexts[randomIndex] as RandomTextResponse);
}