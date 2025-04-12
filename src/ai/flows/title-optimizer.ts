// 'use server'
'use server';
/**
 * @fileOverview This file defines a Genkit flow for optimizing YouTube video titles to improve SEO and engagement.
 *
 * - optimizeTitle - A function that takes an original title and returns an improved title suggestion.
 * - OptimizeTitleInput - The input type for the optimizeTitle function.
 * - OptimizeTitleOutput - The return type for the optimizeTitle function.
 */

import {ai} from '@/ai/ai-instance';
import {z} from 'genkit';

const OptimizeTitleInputSchema = z.object({
  originalTitle: z.string().describe('The original YouTube video title.'),
});
export type OptimizeTitleInput = z.infer<typeof OptimizeTitleInputSchema>;

const OptimizeTitleOutputSchema = z.object({
  optimizedTitle: z.string().describe('The AI-powered suggestion for an improved title.'),
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
      optimizedTitle: z.string().describe('The AI-powered suggestion for an improved title.'),
    }),
  },
  prompt: `You are an expert in YouTube SEO and title optimization. Given the original title, suggest an improved title that will enhance SEO and engagement.

Original Title: {{{originalTitle}}}

Improved Title:`,
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