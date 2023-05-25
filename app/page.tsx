export const metadata = {
  description:
    "Sometimes one does things simply because the domain name was available.",
};

export default function Home() {
  return (
    <>
      <hgroup>
        <h1>
          email
          <wbr />
          address
          <wbr />
          .horse
        </h1>
        <p className="lead">
          Sometimes one does things simply because the domain name was
          available.
        </p>
      </hgroup>

      <p>
        Hi, I&#8217;m <strong>John</strong>.
      </p>

      <p>
        Some people call me a &#8216;web developer&#8217;. Others call me a
        &#8216;software engineer&#8217;. I simply think of myself as someone who
        made websites as a way to procrastinate during his theatre degree.
      </p>

      <p>
        <em>Professionally</em>, I help{" "}
        <a href="https://bookshop.org/">Bookshop.org</a> continue to exist at{" "}
        <a href="https://bookshop.org/">https://bookshop.org/</a> (with the
        occasional new feature or improvement).
      </p>

      <p>
        <em>Personally</em>, I build whatever idea sticks around in my head long
        after the party has finished and the rest of my brain just wants to go
        to sleep.
      </p>

      <p>This here website is where some of that ends up.</p>
    </>
  );
}
