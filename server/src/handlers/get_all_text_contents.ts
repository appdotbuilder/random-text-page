import { type TextContent } from '../schema';

export async function getAllTextContents(): Promise<TextContent[]> {
    // This is a placeholder declaration! Real code should be implemented here.
    // The goal of this handler is fetching all text contents from the database.
    // This would be useful for admin purposes or listing all available content.
    
    return Promise.resolve([
        {
            id: 1,
            title: "Sample Text 1",
            content: "This is the first sample text content stored in our system.",
            created_at: new Date()
        },
        {
            id: 2,
            title: "Sample Text 2", 
            content: "This is the second sample text content with different information.",
            created_at: new Date()
        }
    ] as TextContent[]);
}