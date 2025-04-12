'use client';

import {useState} from 'react';
import {optimizeTitle} from '@/ai/flows/title-optimizer';
import {Button} from '@/components/ui/button';
import {Input} from '@/components/ui/input';
import {Textarea} from '@/components/ui/textarea';
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from '@/components/ui/card';
import {useToast} from "@/hooks/use-toast"
import {Copy, Loader2} from 'lucide-react';
import {Popover, PopoverContent, PopoverTrigger} from "@/components/ui/popover";

export default function Home() {
  const [originalTitle, setOriginalTitle] = useState('');
  const [optimizedResults, setOptimizedResults] = useState<
    { title: string; description: string; hashtags: string, seoExplanation: string }[] | null
  >(null);
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const handleOptimizeTitle = async () => {
    setLoading(true);
    try {
      const result = await optimizeTitle({originalTitle});
      setOptimizedResults(result.optimizedResults);
    } catch (error) {
      console.error('Error optimizing title:', error);
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to optimize title. Please try again.",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleCopyToClipboard = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    toast({
      title: "Copied!",
      description: `${field} copied to clipboard.`,
    });
  };

  return (
    <div className="flex flex-col items-center justify-start min-h-screen p-8">
      <h1 className="text-3xl font-semibold mb-6">TitleForge</h1>
      <Card className="w-full max-w-2xl">
        <CardHeader>
          <CardTitle>Optimize Your YouTube Title</CardTitle>
          <CardDescription>
            Enter your original title and let AI suggest improved versions for better SEO.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <div>
            <Textarea
              placeholder="Original YouTube Video Title"
              value={originalTitle}
              onChange={(e) => setOriginalTitle(e.target.value)}
            />
          </div>
          <Button disabled={loading} onClick={handleOptimizeTitle}>
            {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin"/>}
            Optimize Title
          </Button>
          {optimizedResults && (
            <div className="mt-4 grid gap-4">
              {optimizedResults.map((result, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle>Suggestion {index + 1}</CardTitle>
                  </CardHeader>
                  <CardContent className="grid gap-4">
                    <div className="flex flex-col">
                      <div className="flex items-center space-x-2 mb-2">
                        <Popover>
                          <PopoverTrigger asChild>
                            <Button variant="secondary" size="sm">View Description</Button>
                          </PopoverTrigger>
                          <PopoverContent className="w-80">
                            {result.description}
                          </PopoverContent>
                        </Popover>
                        <Popover>
                          <PopoverTrigger asChild>
                            <Button variant="secondary" size="sm">View Hashtags</Button>
                          </PopoverTrigger>
                          <PopoverContent className="w-80">
                            {result.hashtags}
                          </PopoverContent>
                        </Popover>
                      </div>
                      <div className="flex items-center">
                        <Input
                          readOnly
                          className="bg-secondary"
                          value={result.title}
                        />
                        <Button
                          variant="secondary"
                          size="icon"
                          onClick={() => handleCopyToClipboard(result.title, "Title")}
                        >
                          <Copy className="h-4 w-4"/>
                          <span className="sr-only">Copy to clipboard</span>
                        </Button>
                      </div>
                    </div>
                    <div>
                      <p className="text-sm font-medium">SEO Explanation:</p>
                      {result.seoExplanation}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
