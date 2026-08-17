import Image from "next/image";
import type { StaffMember } from "@/content/staff";

type Props = {
  member: StaffMember;
};

export function StaffCard({ member }: Props) {
  const initials = member.name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <div className="flex flex-col items-center gap-4 rounded-xl border border-border bg-surface p-8 text-center transition-colors hover:border-primary/50">
      <div className="flex h-20 w-20 items-center justify-center overflow-hidden rounded-full bg-surface-alt">
        {member.photo ? (
          <Image
            src={member.photo}
            alt={member.name}
            width={80}
            height={80}
            className="h-full w-full object-cover"
          />
        ) : (
          <span className="font-heading text-xl font-semibold text-primary">{initials}</span>
        )}
      </div>
      <div>
        <h3 className="font-heading text-base font-semibold uppercase tracking-wide text-foreground">
          {member.name}
        </h3>
        <p className="mt-1 text-sm text-muted">{member.role}</p>
      </div>
    </div>
  );
}
