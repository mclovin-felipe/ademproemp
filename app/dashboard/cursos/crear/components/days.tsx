import { Button } from "@/components/ui/button";

const Days = ({ days = [], setDays }: { days: number[]; setDays: any }) => {
  const handleDays = (e: any) => {
    if (days.includes(e)) {
      setDays(days.filter((day) => day !== e));
    } else {
      setDays([...days, e]);
    }
  };
  const Day = ({ day, value }: { day: string; value: number }) => {
    return (
      <Button
        onClick={() => handleDays(value)}
        variant={days.includes(value) ? "dashboard" : "dashboardOutline"}
        type="button"
        className="rounded-md"
      >
        {day}
      </Button>
    );
  };
  return (
    <div className="grid grid-cols-7 gap-x-2">
      <Day day={"L"} value={0} />
      <Day day={"M"} value={1} />
      <Day day={"M"} value={2} />
      <Day day={"J"} value={3} />
      <Day day={"V"} value={4} />
      <Day day={"S"} value={5} />
      <Day day={"D"} value={6} />
    </div>
  );
};
export default Days;
