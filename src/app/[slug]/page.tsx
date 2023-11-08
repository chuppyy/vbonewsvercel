
import { Suspense } from "react";

import { Metadata } from "next";
import { notFound } from "next/navigation";
import Script from "next/script";

type Props = {
  params: { slug: string };
};
export const runtime = "edge";
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const slug = params.slug;
  const id = slug.slice(slug.lastIndexOf("-") + 1);
  const { data: article } = await fetch(
    "https://api.vbonews.com/News/news-detail?id=" + id
  ).then((res) => res.json());

  return {
    title: article.name,
    metadataBase: new URL(`https://${process.env.VERCEL_URL}`),
    openGraph: {
      images: [article.avatarLink],
    },
  };
}

async function getData(slug: string) {
  try {
    const idHash = slug.slice(slug.lastIndexOf("-") + 1);
    const { data: article } = await fetch(
      "https://api.vbonews.com/News/news-detail?id=" + idHash
    ).then((res) => res.json());
    return article;
  } catch (error) {
    console.log(error);
  }
}

const formatDate = (str: string) => {
  const date = new Date(str);
  return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
};

export default async function Page({ params }: Props) {
  const article: any = await getData(params.slug);

  if (!article) {
    notFound();
  }

  return (
    <main>
      <Script src="/qcscript.js" />
      <div className="min-h-screen mx-auto max-w-2xl p-4">
      {/* @ QC push @
    @ <!-- Composite Start --> @ */}
    <div id="M918883ScriptRootC1537797"></div>
    <script src="https://jsc.mgid.com/v/b/vbonews.com.1537797.js" async></script>
    {/* <!-- Composite End --> */}
    <amp-embed width="600" height="600" layout="responsive" type="mgid" data-publisher="vbonews.com" data-widget="1537797"
               data-container="M918883ScriptRootC1537797" data-block-on-consent="_till_responded">
    </amp-embed>

    {/* @ QC đầu trang @
    <!-- Composite Start --> */}
    <div id="M918883ScriptRootC1537328"></div>
    <script src="https://jsc.mgid.com/v/b/vbonews.com.1537328.js" async></script>
    {/* <!-- Composite End --> */}
    <amp-embed width="600" height="600" layout="responsive" type="mgid" data-publisher="vbonews.com" data-widget="1537328"
               data-container="M918883ScriptRootC1537328" data-block-on-consent="_till_responded">
    </amp-embed>
        <h1 className="mx-auto text-3xl md:text-6xl lg:text-6xl font-bold tracking-tighter leading-normal mb-4">
          {article.name}
        </h1>
        <p className="mb-4 text-lg">
          Posted: {formatDate(article.dateTimeStart)}
        </p>
        <Suspense fallback={<p>Loading ...</p>}>
          <article
            className="mx-auto content"
            dangerouslySetInnerHTML={{ __html: article.content }}
          />
        </Suspense>
      </div>
    </main>
    // <!-- Composite Start -->
    <div id="M918883ScriptRootC1537325"></div>
    <script src="https://jsc.mgid.com/v/b/vbonews.com.1537325.js" async></script>
    // <!-- Composite End -->
    <amp-embed width="600" height="600" layout="responsive" type="mgid" data-publisher="vbonews.com" data-widget="1537325"
               data-container="M918883ScriptRootC1537325" data-block-on-consent="_till_responded">
    </amp-embed>
  );
}
