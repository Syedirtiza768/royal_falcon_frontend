const {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
} = require("@/components/ui/card");

export function SolutionsCard2({ title, variant, icon }) {
  const isFirst = variant === "first";

  return (
    <Card
      className={`min-h-[100px] text-center ${
        isFirst
          ? "bg-primary text-white hover:bg-primary/80"
          : "bg-white text-primary hover:bg-gray-100"
      }`}
    >
      <CardHeader>
        <div className="mb-2 text-center mx-auto">{icon}</div>
        <CardTitle className="text-lg">{title}</CardTitle>
      </CardHeader>
      <CardContent></CardContent>
    </Card>
  );
}
