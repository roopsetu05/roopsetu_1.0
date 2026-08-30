export const metadata = {
  title: 'Terms of Service | RoopSetu',
  description: 'Terms of Service for RoopSetu.',
};

export default function TermsOfService() {
  return (
    <main className="max-w-3xl px-4 py-16 mx-auto md:px-6 prose prose-gray">
      <h1 className="font-playfair text-4xl font-bold mb-8">Terms of Service</h1>
      <p className="text-gray-500 mb-8">Last updated: {new Date().toLocaleDateString()}</p>
      
      <h2>1. Terms</h2>
      <p>By accessing this Website, you are agreeing to be bound by these Website Terms and Conditions of Use and agree that you are responsible for the agreement with any applicable local laws.</p>
      
      <h2>2. Disclaimer</h2>
      <p>All the materials on RoopSetu's Website are provided "as is". RoopSetu makes no warranties, may it be expressed or implied, therefore negates all other warranties. Furthermore, RoopSetu does not make any representations concerning the accuracy or reliability of the use of the materials on its Website.</p>
      
      <h2>3. Limitations</h2>
      <p>RoopSetu or its suppliers will not be hold accountable for any damages that will arise with the use or inability to use the materials on RoopSetu's Website.</p>

      <h2>4. Revisions</h2>
      <p>The materials appearing on RoopSetu's Website may include technical, typographical, or photographic errors. RoopSetu will not promise that any of the materials in this Website are accurate, complete, or current.</p>
    </main>
  );
}
