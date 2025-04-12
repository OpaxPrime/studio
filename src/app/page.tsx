'use client';

import {useState} from 'react';
import {optimizeTitle} from '@/ai/flows/title-optimizer';
import {Button} from '@/components/ui/button';
import {Input} from '@/components/ui/input';
import {Textarea} from '@/components/ui/textarea';
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from '@/components/ui/card';
import {useToast} from "@/hooks/use-toast"
import {Copy, Loader2} from 'lucide-react';

export default function Home() {
  const [originalTitle, setOriginalTitle] = useState('');
  const [optimizedResults, setOptimizedResults] = useState<
    { title: string; description: string; hashtags: string }[] | null
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
                    <div>
                      <p className="text-sm font-medium">Title:</p>
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
                      <p className="text-sm font-medium">Description:</p>
                      <div className="flex items-center">
                        <Input
                          readOnly
                          className="bg-secondary"
                          value={result.description}
                        />
                        <Button
                          variant="secondary"
                          size="icon"
                          onClick={() => handleCopyToClipboard(result.description, "Description")}
                        >
                          <Copy className="h-4 w-4"/>
                          <span className="sr-only">Copy to clipboard</span>
                        </Button>
                      </div>
                    </div>
                    <div>
                      <p className="text-sm font-medium">Hashtags:</p>
                      <div className="flex items-center">
                        <Input
                          readOnly
                          className="bg-secondary"
                          value={result.hashtags}
                        />
                        <Button
                          variant="secondary"
                          size="icon"
                          onClick={() => handleCopyToClipboard(result.hashtags, "Hashtags")}
                        >
                          <Copy className="h-4 w-4"/>
                          <span className="sr-only">Copy to clipboard</span>
                        </Button>
                      </div>
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
