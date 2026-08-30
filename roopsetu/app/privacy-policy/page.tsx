export const metadata = {
  title: 'Privacy Policy | RoopSetu',
  description: 'Privacy Policy for RoopSetu affiliate marketing platform.',
};

export default function PrivacyPolicy() {
  return (
    <main className="max-w-3xl px-4 py-16 mx-auto md:px-6 prose prose-gray">
      <h1 className="font-playfair text-4xl font-bold mb-8">Privacy Policy</h1>
      <p className="text-gray-500 mb-8">Last updated: {new Date().toLocaleDateString()}</p>
      
      <h2>1. Information We Collect</h2>
      <p>We only collect information about you if we have a reason to do so. For example, to provide our Services, to communicate with you, or to make our Services better.</p>
      
      <h2>2. Affiliate Links & Tracking</h2>
      <p>Our website uses affiliate links. This means that if you click on a link to a product and make a purchase, we may earn a small commission at no extra cost to you. We use cookies to track these affiliate referrals.</p>
      
      <h2>3. Analytics</h2>
      <p>We use analytics tools to understand how users interact with our website to improve user experience. This involves collecting non-personally identifiable information such as browser type, pages visited, and time spent on the site.</p>

      <h2>4. Contact Us</h2>
      <p>If you have any questions about this Privacy Policy, please contact us.</p>
    </main>
  );
}
