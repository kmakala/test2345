import React from "react";
import { notFound } from "next/navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen } from "lucide-react";

// Updated VALID_CATEGORIES array with normalized values (all lowercase with hyphens)
const VALID_CATEGORIES = [
  "programming",
  "web-development",
  "mobile-development",
  "data-science",
  "machine-learning",
  "photography-and-video",
  "personal-development",
  "academic",
  "languages",
  "business",
  // Add any other valid categories here
];

interface CategoryPageProps {
  params: {
    category: string;
  };
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { category } = params;
  
  // Normalize the category from the URL
  const normalizedCategory = category
    .toLowerCase()
    .trim()
    .replace(/[\s-]+/g, '-')
    .replace(/[^a-z0-9-]/g, '');

  // Log the normalized category and valid categories for debugging
  console.log('Normalized Category:', normalizedCategory);
  console.log('Valid Categories:', VALID_CATEGORIES);
  
  // Check if the normalized category exists in our valid categories
  if (!VALID_CATEGORIES.includes(normalizedCategory)) {
    console.log('Category not found, redirecting to 404');
    return notFound();
  }

  // Format the category name for display (convert hyphens to spaces and capitalize words)
  const formattedCategory = normalizedCategory
    .split("-")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  return (
    <div className="container mx-auto py-10">
      <Card className="mb-8">
        <CardHeader>
          <div className="flex items-center gap-2">
            <BookOpen className="h-6 w-6 text-primary" />
            <CardTitle>{formattedCategory} Courses</CardTitle>
          </div>
          <CardDescription>
            Explore our comprehensive collection of {formattedCategory.toLowerCase()} courses
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            Content for {formattedCategory} category will be displayed here. This could include
            a list of courses, instructors, and other relevant information.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}