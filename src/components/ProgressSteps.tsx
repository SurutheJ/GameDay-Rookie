import { cn } from "@/lib/utils";

interface ProgressStepsProps {
  current: 1 | 2 | 3;
}

const steps = ["Learn", "Watch", "Play"] as const;

export const ProgressSteps = ({ current }: ProgressStepsProps) => {
  return (
    <nav aria-label="Progress" className="w-full flex items-center justify-center gap-3 text-sm">
      {steps.map((label, idx) => {
        const step = (idx + 1) as 1 | 2 | 3;
        const isActive = step === current;
        return (
          <div key={label} className="flex items-center">
            <span
              className={cn(
                "inline-flex items-center justify-center w-7 h-7 rounded-full border transition-colors",
                isActive ? "bg-primary text-primary-foreground border-transparent" : "bg-secondary text-secondary-foreground border-border"
              )}
              aria-current={isActive ? "step" : undefined}
            >
              {step}
            </span>
            <span className={cn("ml-2 font-medium", isActive ? "text-foreground" : "text-muted-foreground")}>{label}</span>
            {idx < steps.length - 1 && <span className="mx-3 text-muted-foreground">→</span>}
          </div>
        );
      })}
    </nav>
  );
};

export default ProgressSteps;
