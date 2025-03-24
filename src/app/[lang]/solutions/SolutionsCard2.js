const {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
} = require("@/components/ui/card");

export function SolutionsCard2({ title, variant, icon }) {
  return (
    <Card
      className={
        "min-h-[100px] text-center bg-primary text-white hover:bg-primary/80"
      }
    >
      <CardHeader>
        <div className="mb-2 text-center mx-auto">{icon}</div>
        <CardTitle className={"text-lg"}>{title}</CardTitle>
      </CardHeader>
      <CardContent></CardContent>
    </Card>
  );
}
