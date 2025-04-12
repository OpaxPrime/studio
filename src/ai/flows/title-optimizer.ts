'use server';
/**
 * @fileOverview This file defines a Genkit flow for optimizing YouTube video titles to improve SEO and engagement.
 *
 * - optimizeTitle - A function that takes an original title and returns an array of improved title suggestions.
 * - OptimizeTitleInput - The input type for the optimizeTitle function.
 * - OptimizeTitleOutput - The output type, which includes an array of optimized results (title, description, hashtags, seoExplanation).
 */

import {ai} from '@/ai/ai-instance';
import {z} from 'genkit';

const OptimizeTitleInputSchema = z.object({
  originalTitle: z.string().describe('The original YouTube video title.'),
});
export type OptimizeTitleInput = z.infer<typeof OptimizeTitleInputSchema>;

const OptimizeTitleOutputSchema = z.object({
  optimizedResults: z.array(z.object({
    title: z.string().describe('The AI-powered suggestion for an improved title.'),
    description: z.string().describe('An SEO-driven description for the video.'),
    hashtags: z.string().describe('SEO-driven hashtags for the video.'),
    seoExplanation: z.string().describe('Explanation of why the suggested title, description, and hashtags are better for SEO.'),
  })).describe('An array of AI-powered suggestions for improved titles, descriptions, and hashtags, along with SEO explanations.'),
});
export type OptimizeTitleOutput = z.infer<typeof OptimizeTitleOutputSchema>;

export async function optimizeTitle(input: OptimizeTitleInput): Promise<OptimizeTitleOutput> {
  return optimizeTitleFlow(input);
}

const optimizeTitlePrompt = ai.definePrompt({
  name: 'optimizeTitlePrompt',
  input: {
    schema: z.object({
      originalTitle: z.string().describe('The original YouTube video title.'),
    }),
  },
  output: {
    schema: z.object({
      optimizedResults: z.array(z.object({
        title: z.string().describe('The AI-powered suggestion for an improved title.'),
        description: z.string().describe('An SEO-driven description for the video.'),
        hashtags: z.string().describe('SEO-driven hashtags for the video.'),
        seoExplanation: z.string().describe('Explanation of why the suggested title, description, and hashtags are better for SEO.'),
      })).describe('An array of AI-powered suggestions for improved titles, descriptions, and hashtags, along with SEO explanations.'),
    }),
  },
  prompt: `You are an expert in YouTube SEO and title optimization. Given the original title, suggest three improved titles that will enhance SEO and engagement.  Each suggestion must include SEO-driven descriptions, a diverse set of hashtags (at least 10 per suggestion), and a detailed explanation of the SEO benefits for each title, description and hashtag selection.

To improve SEO, follow these guidelines:
- Titles should be concise, engaging, and include relevant keywords to improve search visibility.
- Descriptions should provide a clear summary of the video content, incorporating keywords naturally to attract viewers and search engines.
- Hashtags should be a mix of broad, trending, and specific terms related to the video's niche to maximize reach.

Original Title: {{{originalTitle}}}

${[...Array(3)].map((_, i) => `
Improved Title ${i + 1}:
Title:
Description:
Hashtags:
SEO Explanation:`).join('')}
`,
});

const optimizeTitleFlow = ai.defineFlow<
  typeof OptimizeTitleInputSchema,
  typeof OptimizeTitleOutputSchema
>({
  name: 'optimizeTitleFlow',
  inputSchema: OptimizeTitleInputSchema,
  outputSchema: OptimizeTitleOutputSchema,
},
async input => {
  const {output} = await optimizeTitlePrompt(input);
  return output!;
});
