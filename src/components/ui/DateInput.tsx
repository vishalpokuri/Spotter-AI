import { type ReactNode, useState } from "react";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

interface DateInputProps {
  label: string;
  icon: ReactNode;
  placeholder?: string;
  value?: Date;
  onChange?: (date: Date | undefined) => void;
}

export default function DateInput({
  label,
  icon,
  placeholder,
  value,
  onChange,
}: DateInputProps) {
  const [isOpen, setIsOpen] = useState(false);

  const formatDate = (date: Date | undefined) => {
    if (!date) return "";
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  return (
    <div className="border border-gray-300 rounded-lg p-3 sm:p-2 sm:px-3 bg-white">
      <div className="flex items-center gap-2 mb-1">
        {icon}
        <label
          className="text-gray-700 text-xs"
          style={{ fontFamily: "var(--font-light)" }}
        >
          {label}
        </label>
      </div>
      <div className="relative py-2 w-full">
        <Popover open={isOpen} onOpenChange={setIsOpen}>
          <PopoverTrigger asChild>
            <Button
              variant="ghost"
              className="w-full justify-start p-0 h-auto font-normal hover:bg-transparent cursor-pointer"
            >
              <div
                className="text-sm text-gray-900"
                style={{ fontFamily: "var(--font-reg)" }}
              >
                {value ? (
                  formatDate(value)
                ) : (
                  <span className="text-gray-500">{placeholder}</span>
                )}
              </div>
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0" align="start">
            <Calendar
              mode="single"
              selected={value}
              onSelect={(date) => {
                onChange?.(date);
                setIsOpen(false);
              }}
            />
          </PopoverContent>
        </Popover>
      </div>
    </div>
  );
}
