const displayFormatter = new Intl.DateTimeFormat("en-GB", {
  dateStyle: "full",
  timeStyle: undefined,
});

const titleFormatter = new Intl.DateTimeFormat("en-GB", {
  dateStyle: "full",
  timeStyle: "full",
});

type TimeProps = { dateTime: Date | string } & Omit<
  JSX.IntrinsicElements["time"],
  "dateTime"
>;

export const Time = ({
  dateTime: rawDateTime,
  children,
  title,
  ...props
}: TimeProps) => {
  const dateTime = new Date(rawDateTime);

  return (
    <time
      dateTime={dateTime.toISOString()}
      title={title ?? titleFormatter.format(dateTime)}
      {...props}
    >
      {children ?? displayFormatter.format(dateTime)}
    </time>
  );
};
