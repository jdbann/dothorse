const displayFormatter = new Intl.DateTimeFormat("en-GB", {
  dateStyle: "full",
  timeStyle: undefined,
});

const titleFormatter = new Intl.DateTimeFormat("en-GB", {
  dateStyle: "full",
  timeStyle: "full",
});

type TimeProps = { dateTime: Date } & Omit<
  JSX.IntrinsicElements["time"],
  "dateTime"
>;

export const Time = ({ dateTime, children, title, ...props }: TimeProps) => (
  <time
    dateTime={dateTime.toISOString()}
    title={title ?? titleFormatter.format(dateTime)}
    {...props}
  >
    {children ?? displayFormatter.format(dateTime)}
  </time>
);
