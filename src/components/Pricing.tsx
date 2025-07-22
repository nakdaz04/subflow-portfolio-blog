import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Star } from "lucide-react";

const Pricing = () => {
  const plans = [
    {
      name: "Starter",
      price: "$29",
      period: "/month",
      description: "Perfect for small projects and individual developers",
      features: [
        "Up to 3 projects",
        "Basic support",
        "Standard templates",
        "Email notifications",
        "Basic analytics",
      ],
      popular: false,
    },
    {
      name: "Professional",
      price: "$99",
      period: "/month",
      description: "Ideal for growing businesses and development teams",
      features: [
        "Unlimited projects",
        "Priority support",
        "Premium templates",
        "Advanced analytics",
        "Custom integrations",
        "Team collaboration",
        "API access",
      ],
      popular: true,
    },
    {
      name: "Enterprise",
      price: "$299",
      period: "/month",
      description: "For large organizations with advanced requirements",
      features: [
        "Everything in Professional",
        "Dedicated account manager",
        "Custom development",
        "SLA guarantee",
        "Advanced security",
        "White-label solutions",
        "Training & onboarding",
      ],
      popular: false,
    },
  ];

  const paymentMethods = [
    { name: "MasterCard", logo: "💳" },
    { name: "Korapay", logo: "🏛️" },
    { name: "Paystack", logo: "⚡" },
  ];

  return (
    <section id="pricing" className="py-24 bg-gradient-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Choose Your <span className="bg-gradient-primary bg-clip-text text-transparent">Perfect Plan</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Flexible subscription plans designed to grow with your business
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, index) => (
            <Card 
              key={plan.name} 
              className={`relative overflow-hidden transition-all duration-300 hover:scale-105 ${
                plan.popular 
                  ? "border-primary shadow-glow bg-card/50 backdrop-blur-sm" 
                  : "hover:border-primary/50"
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 bg-gradient-primary text-primary-foreground px-3 py-1 text-sm font-medium">
                  <Star className="w-4 h-4 inline mr-1" />
                  Most Popular
                </div>
              )}
              
              <CardHeader className="text-center pb-6">
                <CardTitle className="text-2xl font-bold mb-2">{plan.name}</CardTitle>
                <CardDescription className="text-muted-foreground mb-4">
                  {plan.description}
                </CardDescription>
                <div className="flex items-baseline justify-center">
                  <span className="text-4xl font-bold text-primary">{plan.price}</span>
                  <span className="text-muted-foreground ml-1">{plan.period}</span>
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <Check className="w-5 h-5 text-primary mr-3 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  className={`w-full ${
                    plan.popular 
                      ? "bg-gradient-primary hover:opacity-90 shadow-lg" 
                      : ""
                  }`}
                  variant={plan.popular ? "default" : "outline"}
                >
                  Get Started
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Payment methods */}
        <div className="text-center">
          <p className="text-muted-foreground mb-6">Secure payments powered by</p>
          <div className="flex justify-center items-center space-x-8">
            {paymentMethods.map((method) => (
              <div key={method.name} className="flex items-center space-x-2 text-muted-foreground">
                <span className="text-2xl">{method.logo}</span>
                <span className="font-medium">{method.name}</span>
              </div>
            ))}
          </div>
          <p className="text-sm text-muted-foreground mt-4">
            All plans include 14-day free trial. Cancel anytime.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;