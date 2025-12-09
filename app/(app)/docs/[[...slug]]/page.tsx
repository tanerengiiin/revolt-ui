import Link from "next/link";
import { notFound } from "next/navigation";
import { mdxComponents } from "@/mdx-components";
import { findNeighbour } from "fumadocs-core/page-tree";
import { source } from "@/lib/source";
import {  ArrowUpRight, ChevronDown, Copy } from "lucide-react";

export const revalidate = false;
export const dynamic = "force-static";
export const dynamicParams = false;

export function generateStaticParams() {
  return source.generateParams();
}

export async function generateMetadata(props: {
  params: Promise<{ slug: string[] }>;
}) {
  const params = await props.params;
  const page = source.getPage(params.slug);

  if (!page) {
    notFound();
  }

  const doc = page.data;

  if (!doc.title || !doc.description) {
    notFound();
  }

  return {
    title: doc.title,
    description: doc.description,
    openGraph: {
      title: doc.title,
      description: doc.description,
      type: "article",
      url: page.url,
      images: [
        {
          url: `/og?title=${encodeURIComponent(
            doc.title
          )}&description=${encodeURIComponent(doc.description)}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: doc.title,
      description: doc.description,
      images: [
        {
          url: `/og?title=${encodeURIComponent(
            doc.title
          )}&description=${encodeURIComponent(doc.description)}`,
        },
      ],
    },
  };
}

export default async function DocPage(props: {
  params: Promise<{ slug: string[] }>;
}) {
  const params = await props.params;
  const page = source.getPage(params.slug);

  if (!page) {
    notFound();
  }

  const doc = page.data;
  const MDX = doc.body;
  const neighbours = findNeighbour(source.pageTree, page.url);
  const links = doc.links;

  return (
    <div className="flex items-stretch w-full gap-x-4">
      <div className="flex min-w-0 flex-1 flex-col max-w-xl mx-auto ">
        <div className="">
          <span className="capitalize text-surface-600/75 dark:text-surface-400/75">
            {doc.info.path.split("/").slice(0, -1).join("/")}
          </span>
          <h1 className="text-3xl font-semibold tracking-tight mt-1">
            {doc.title}
          </h1>
          <p className="text-surface-500 text-lg mt-2">{doc.description}</p>
          <div className="mt-6 flex items-center gap-2">
            <div className="flex rounded-xl bg-surface-100 dark:bg-surface-800 overflow-hidden">
              <button className="cursor-pointer flex items-center gap-2 pl-3 pr-2.5 py-1 hover:bg-surface-200/75 dark:hover:bg-surface-700/75 transition-colors duration-150">
                <Copy className="size-4 text-surface-500 stroke-2" />
                Copy page
              </button>
              <span className="w-px bg-surface-200 dark:bg-surface-700/75" />
              <button className="cursor-pointer pl-1.75 pr-2 hover:bg-surface-200/75 dark:hover:bg-surface-700/75 flex items-center justify-center  transition-colors duration-150">
                <ChevronDown className="size-5 text-surface-500 stroke-2" />
              </button>
            </div>
            <div className="flex-1 flex justify-end gap-2">
              {links?.doc && (
                <Link
                  href={links?.doc}
                  target="_blank"
                  className="cursor-pointer flex items-center gap-1 pl-3 pr-2.5 py-1 bg-surface-100 hover:bg-surface-200/75 dark:hover:bg-surface-700/75 dark:bg-surface-800 rounded-full  transition-colors duration-150"
                >
                  Docs
                  <ArrowUpRight className="size-5 opacity-50" />
                </Link>
              )}
              {links?.api && (
                <Link
                  href={links?.api}
                  target="_blank"
                  className="cursor-pointer flex items-center gap-1 pl-3 pr-2.5 py-1 bg-surface-100 hover:bg-surface-200/75 dark:hover:bg-surface-700/75 dark:bg-surface-800 rounded-full  transition-colors duration-150"
                >
                  API
                  <ArrowUpRight className="size-5 opacity-50" />
                </Link>
              )}
            </div>
          </div>
        </div>
        <div className="mt-14 mb-4 flex w-full items-center justify-center gap-1">
          {Array(6)
            .fill(0)
            .map((_, idx) => (
              <div
                key={idx}
                className="h-0.5 w-4 rounded-full bg-surface-200 dark:bg-surface-800"
              />
            ))}
        </div>
        <div className="w-full flex-1 flex flex-col ">
          <MDX components={mdxComponents} />
        </div>
      </div>
      <div className="sticky top-20 z-30 ml-auto w-(--sidebar-width) "></div>
    </div>
  );
}
