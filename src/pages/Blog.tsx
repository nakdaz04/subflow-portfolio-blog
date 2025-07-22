import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Calendar, Clock, Search, User } from "lucide-react";
import Navigation from "@/components/Navigation";

const Blog = () => {
  const articles = [
    {
      id: 1,
      title: "The Future of Web Development: AI and Machine Learning Integration",
      excerpt: "Exploring how artificial intelligence is revolutionizing the way we build and interact with web applications...",
      author: "Alex Johnson",
      date: "March 15, 2024",
      readTime: "8 min read",
      category: "AI & ML",
      image: "/placeholder.svg",
      featured: true,
    },
    {
      id: 2,
      title: "Building Scalable Microservices with Node.js and Docker",
      excerpt: "A comprehensive guide to architecting and deploying microservices that can handle enterprise-level traffic...",
      author: "Sarah Chen",
      date: "March 12, 2024",
      readTime: "12 min read",
      category: "Backend",
      image: "/placeholder.svg",
      featured: false,
    },
    {
      id: 3,
      title: "React 18 Concurrent Features: A Deep Dive",
      excerpt: "Understanding the new concurrent features in React 18 and how they improve user experience and performance...",
      author: "Mike Rodriguez",
      date: "March 10, 2024",
      readTime: "10 min read",
      category: "Frontend",
      image: "/placeholder.svg",
      featured: false,
    },
    {
      id: 4,
      title: "Cybersecurity Best Practices for Modern Web Applications",
      excerpt: "Essential security measures every developer should implement to protect applications and user data...",
      author: "Emily Davis",
      date: "March 8, 2024",
      readTime: "15 min read",
      category: "Security",
      image: "/placeholder.svg",
      featured: true,
    },
    {
      id: 5,
      title: "The Rise of Edge Computing in Web Development",
      excerpt: "How edge computing is changing the landscape of web performance and user experience optimization...",
      author: "David Wilson",
      date: "March 5, 2024",
      readTime: "7 min read",
      category: "Performance",
      image: "/placeholder.svg",
      featured: false,
    },
    {
      id: 6,
      title: "GraphQL vs REST: Choosing the Right API Strategy",
      excerpt: "A detailed comparison of GraphQL and REST APIs, helping you make the right choice for your next project...",
      author: "Lisa Thompson",
      date: "March 3, 2024",
      readTime: "9 min read",
      category: "API",
      image: "/placeholder.svg",
      featured: false,
    },
  ];

  const categories = ["All", "Frontend", "Backend", "AI & ML", "Security", "Performance", "API"];
  const featuredArticle = articles.find(article => article.featured);
  const regularArticles = articles.filter(article => !article.featured);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Tech <span className="bg-gradient-primary bg-clip-text text-transparent">Blog</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Insights, tutorials, and industry trends from our development experts
          </p>
          
          {/* Search bar */}
          <div className="max-w-md mx-auto relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
            <Input
              placeholder="Search articles..."
              className="pl-10 bg-secondary/50 border-border"
            />
          </div>
        </div>

        {/* Featured article */}
        {featuredArticle && (
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-8">Featured Article</h2>
            <Card className="overflow-hidden border-primary/50 shadow-glow">
              <div className="md:flex">
                <div className="md:w-1/2">
                  <img
                    src={featuredArticle.image}
                    alt={featuredArticle.title}
                    className="w-full h-64 md:h-full object-cover"
                  />
                </div>
                <div className="md:w-1/2 p-8">
                  <Badge className="bg-gradient-primary mb-4">
                    {featuredArticle.category}
                  </Badge>
                  <CardTitle className="text-2xl mb-4 leading-tight">
                    {featuredArticle.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground mb-6 text-base">
                    {featuredArticle.excerpt}
                  </CardDescription>
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-6">
                    <div className="flex items-center">
                      <User className="w-4 h-4 mr-1" />
                      {featuredArticle.author}
                    </div>
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {featuredArticle.date}
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {featuredArticle.readTime}
                    </div>
                  </div>
                  <Button className="bg-gradient-primary">
                    Read Full Article
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        )}

        {/* Category filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={category === "All" ? "default" : "outline"}
              size="sm"
              className={category === "All" ? "bg-gradient-primary" : ""}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Articles grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {regularArticles.map((article) => (
            <Card 
              key={article.id} 
              className="group overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-glow cursor-pointer"
            >
              <div className="relative overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <Badge className="absolute top-4 left-4 bg-background/80 text-foreground">
                  {article.category}
                </Badge>
              </div>

              <CardHeader>
                <CardTitle className="text-lg mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                  {article.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground line-clamp-3">
                  {article.excerpt}
                </CardDescription>
              </CardHeader>

              <CardContent>
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <div className="flex items-center space-x-2">
                    <User className="w-4 h-4" />
                    <span>{article.author}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="w-4 h-4" />
                    <span>{article.readTime}</span>
                  </div>
                </div>
                <div className="flex items-center text-sm text-muted-foreground mt-2">
                  <Calendar className="w-4 h-4 mr-1" />
                  {article.date}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Load more button */}
        <div className="text-center mb-16">
          <Button variant="outline" size="lg">
            Load More Articles
          </Button>
        </div>

        {/* Newsletter subscription */}
        <div className="bg-gradient-secondary rounded-2xl p-12 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Stay Updated with Our <span className="bg-gradient-primary bg-clip-text text-transparent">Newsletter</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Get the latest articles, tutorials, and industry insights delivered directly to your inbox
          </p>
          <div className="max-w-md mx-auto flex gap-4">
            <Input
              placeholder="Enter your email"
              className="flex-1 bg-background/50"
            />
            <Button className="bg-gradient-primary">
              Subscribe
            </Button>
          </div>
          <p className="text-sm text-muted-foreground mt-4">
            No spam, unsubscribe anytime. We respect your privacy.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;