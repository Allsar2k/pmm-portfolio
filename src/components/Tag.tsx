export function Tag({ children }: { children: string }) {
  return (
    <span className="inline-block rounded-full bg-raised px-3 py-1 text-sm font-medium text-ink-2">
      {children}
    </span>
  );
}
