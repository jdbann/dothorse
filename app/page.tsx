import { home } from "contentlayer/generated";

export const metadata = {
  description: home.lead,
};

export default function Home() {
  return (
    <>
      <hgroup>
        <h1>{home.title}</h1>
        <p className="lead">{home.lead}</p>
      </hgroup>

      <div dangerouslySetInnerHTML={{ __html: home.body.html }} />
    </>
  );
}
