import { ReactNode } from "react";

interface percentageItemProps {
  icon: ReactNode;
  title: string;
  value: number;
}

const percentageItem = ({ icon, title, value }: percentageItemProps) => {
  return (
    <div className="flex items-center justify-between">
      {/* ICONE */}
      <div className="flex items-center gap-2">
        {icon}
        <p className="text-sm text-muted-foreground">{title}</p>
      </div>
      {/* VALUE */}
      <p className="text-sm font-bold">{value}</p>
    </div>
  );
};

export default percentageItem;
