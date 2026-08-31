import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { getArticleBySlug, getArticleSlugs } from '@/lib/mdx';
import LinkButton from '@/components/affiliate/LinkButton';
import ProductCarousel from '@/components/affiliate/ProductCarousel';
import ProsCons from '@/components/affiliate/ProsCons';
import NoticeBox from '@/components/affiliate/NoticeBox';
import Image from 'next/image';
import Link from 'next/link';
import EditorialListicle from '@/components/editorial/EditorialListicle';
import EditorialHero from '@/components/editorial/EditorialHero';
import HairstyleHero from '@/components/editorial/HairstyleHero';
import HairstyleListicle from '@/components/editorial/HairstyleListicle';

const components = {
  LinkButton,
  ProductCarousel,
  ProsCons,
  NoticeBox,
  EditorialListicle,
  EditorialHero,
  HairstyleHero,
  HairstyleListicle,
};

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    return {
      title: 'Article Not Found',
    };
  }

  return {
    title: `${article.meta.title} | RoopSetu`,
    description: article.meta.description || `Read about ${article.meta.title} on RoopSetu.`,
    openGraph: {
      title: article.meta.title,
      description: article.meta.description,
      images: [
        {
          url: article.meta.image || '/default-og.jpg',
        },
      ],
    },
  };
}

export async function generateStaticParams() {
  const slugs = getArticleSlugs();
  return slugs.map((slug) => ({
    slug: slug.replace(/\.mdx$/, ''),
  }));
}

export default async function ArticlePage({ params }: { params: { slug: string } }) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  const { meta, content } = article;

  return (
    <>
      <article className="px-4 pt-0 pb-8 mx-auto md:px-6 w-full max-w-7xl">
        <div className="prose prose-lg prose-gray max-w-none prose-headings:font-playfair prose-a:text-primary hover:prose-a:text-[#a85a66]">
          <MDXRemote source={content} components={components} />
        </div>
        
        {/* Bottom Author Bio */}
        <div className="mt-20 p-10 bg-[#fcf9f6] rounded-[2rem] border border-[#eadfdb] flex flex-col items-center text-center max-w-3xl mx-auto">
          <h4 className="text-2xl font-medium font-playfair text-[#111111] mb-4 tracking-tight">About RoopSetu</h4>
          <p className="text-[#444444] text-[15px] leading-[1.8] mb-8 max-w-lg">
            We curate the best beauty, makeup, and hairstyle inspiration to help you discover your next favorite look. Follow us on Pinterest for daily updates!
          </p>
          <a href="https://in.pinterest.com/RoopSetu_26/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-6 py-3 border border-[#d8cac6] rounded-full text-sm font-medium text-[#403a3a] transition hover:border-[#c9828d] hover:text-[#c9828d]">
            Follow on Pinterest <span className="ml-2">&rarr;</span>
          </a>
        </div>
      </article>
    </>
  );
}
