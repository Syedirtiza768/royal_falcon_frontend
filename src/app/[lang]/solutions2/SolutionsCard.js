const {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
} = require("@/components/ui/card");

export function SolutionsCard({ icon, title, description, variant }) {
  return (
    <Card
      className={`h-full ${
        variant === "first" ? "bg-primary text-white" : "bg-white text-black"
      }`}
    >
      <CardHeader>
        <div className="mb-2">{icon}</div>
        <CardTitle className={"text-xl"}>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription
          className={` ${
            variant === "first" ? "text-white" : "text-slate-500"
          } `}
        >
          {description}
        </CardDescription>
      </CardContent>
    </Card>
  );
}
