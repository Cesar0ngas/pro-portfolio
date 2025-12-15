import { ai } from '../genkit';
import { flow } from 'genkit/flow';
import { z } from 'zod';

export const reviewPortfolio = flow(
  {
    name: 'reviewPortfolio',
    inputSchema: z.string(),
    outputSchema: z.object({
      strengths: z.array(z.string()),
      areasForImprovement: z.array(z.string()),
      suggestions: z.array(z.string()),
    }),
  },
  async (portfolioContent) => {
    if (process.env.NODE_ENV === 'development') {
      // In dev, return mock data to avoid calling the AI API.
      await new Promise((resolve) => setTimeout(resolve, 1000));
      return {
        strengths: [
          'Clear and concise project descriptions.',
          'Good use of modern technologies like React and Next.js.',
          'The skills section provides a quick overview of your capabilities.',
        ],
        areasForImprovement: [
          'Consider adding more details about your specific role and contributions in team projects.',
          'The "About Me" section could be expanded to share more about your passion and career goals.',
          'Quantify achievements where possible (e.g., "improved performance by 20%").',
        ],
        suggestions: [
          'Add links to live demos for your projects.',
          'Include a downloadable PDF version of your resume.',
          'Consider adding a blog section to share your expertise and thoughts on industry trends.',
        ],
      };
    }

    const prompt = `Review the following portfolio content and provide feedback.
    Analyze the content and identify its strengths, areas for improvement, and provide concrete suggestions for enhancement.
    The tone should be professional, encouraging, and constructive.
    Format the output as a JSON object with three keys: "strengths", "areasForImprovement", and "suggestions".
    Each key should have a value of an array of strings.

    Portfolio Content:
    ---
    ${portfolioContent}
    ---
    `;

    const result = await ai.generate({
      prompt,
      output: {
        format: 'json',
        schema: z.object({
            strengths: z.array(z.string()),
            areasForImprovement: z.array(z.string()),
            suggestions: z.array(z.string()),
        })
      },
    });
    
    return result.output() || { strengths: [], areasForImprovement: [], suggestions: [] };
  }
);
