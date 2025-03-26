import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import PageTemplate from '../components/PageTemplate';

const AboutUsPage = () => {
  const { t } = useTranslation();
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically call your API to handle the subscription
    if (email) {
      setSubscribed(true);
      setEmail('');
      // Reset the subscribed state after 5 seconds
      setTimeout(() => setSubscribed(false), 5000);
    }
  };

  return (
    <PageTemplate
      title="About us | Kebab Super King"
      description="Learn about Kebab Super King's story, values, and commitment to authentic cuisine"
    >
      <div className="bg-gray-50 py-8 sm:py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6 text-center">{t('aboutUsPage.title')}</h1>
          
          {/* Our Story Section */}
          <div className="bg-white p-5 sm:p-6 md:p-8 rounded-lg shadow-sm mb-6 sm:mb-8 md:mb-12">
            <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-gray-900">{t('aboutUsPage.ourStory.title')}</h2>
            <p className="text-gray-700 mb-3 sm:mb-4 text-sm sm:text-base">
              {t('aboutUsPage.ourStory.paragraph1')}
            </p>
            <p className="text-gray-700 mb-3 sm:mb-4 text-sm sm:text-base">
              {t('aboutUsPage.ourStory.paragraph2')}
            </p>
            <p className="text-gray-700 text-sm sm:text-base">
              {t('aboutUsPage.ourStory.paragraph3')}
            </p>
          </div>
          
          {/* Our Values */}
          <div className="bg-white p-5 sm:p-6 md:p-8 rounded-lg shadow-sm mb-6 sm:mb-8 md:mb-12">
            <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-gray-900">{t('aboutUsPage.ourValues.title')}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
              <div className="border-l-4 border-[#1f6737] pl-3 sm:pl-4">
                <h3 className="font-bold text-base sm:text-lg mb-1 sm:mb-2">{t('aboutUsPage.ourValues.authenticity.title')}</h3>
                <p className="text-gray-700 text-sm sm:text-base">{t('aboutUsPage.ourValues.authenticity.description')}</p>
              </div>
              <div className="border-l-4 border-[#1f6737] pl-3 sm:pl-4">
                <h3 className="font-bold text-base sm:text-lg mb-1 sm:mb-2">{t('aboutUsPage.ourValues.quality.title')}</h3>
                <p className="text-gray-700 text-sm sm:text-base">{t('aboutUsPage.ourValues.quality.description')}</p>
              </div>
              <div className="border-l-4 border-[#1f6737] pl-3 sm:pl-4 sm:col-span-2 md:col-span-1">
                <h3 className="font-bold text-base sm:text-lg mb-1 sm:mb-2">{t('aboutUsPage.ourValues.community.title')}</h3>
                <p className="text-gray-700 text-sm sm:text-base">{t('aboutUsPage.ourValues.community.description')}</p>
              </div>
            </div>
          </div>
          
          {/* Quality Commitment */}
          <div className="bg-white p-5 sm:p-6 md:p-8 rounded-lg shadow-sm mb-6 sm:mb-8 md:mb-12">
            <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-gray-900">{t('aboutUsPage.qualityCommitment.title')}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
              <div>
                <h3 className="font-bold text-base sm:text-lg mb-1 sm:mb-2">{t('aboutUsPage.qualityCommitment.freshIngredients.title')}</h3>
                <p className="text-gray-700 mb-3 sm:mb-4 text-sm sm:text-base">
                  {t('aboutUsPage.qualityCommitment.freshIngredients.description')}
                </p>
              </div>
              <div>
                <h3 className="font-bold text-base sm:text-lg mb-1 sm:mb-2">{t('aboutUsPage.qualityCommitment.trainedChefs.title')}</h3>
                <p className="text-gray-700 mb-3 sm:mb-4 text-sm sm:text-base">
                  {t('aboutUsPage.qualityCommitment.trainedChefs.description')}
                </p>
              </div>
              <div>
                <h3 className="font-bold text-base sm:text-lg mb-1 sm:mb-2">{t('aboutUsPage.qualityCommitment.qualityControl.title')}</h3>
                <p className="text-gray-700 mb-3 sm:mb-4 text-sm sm:text-base">
                  {t('aboutUsPage.qualityCommitment.qualityControl.description')}
                </p>
              </div>
              <div>
                <h3 className="font-bold text-base sm:text-lg mb-1 sm:mb-2">{t('aboutUsPage.qualityCommitment.customerSatisfaction.title')}</h3>
                <p className="text-gray-700 mb-3 sm:mb-4 text-sm sm:text-base">
                  {t('aboutUsPage.qualityCommitment.customerSatisfaction.description')}
                </p>
              </div>
            </div>
          </div>
          
          {/* Newsletter Section */}
          <div className="bg-[#1f6737] text-white p-5 sm:p-6 md:p-8 rounded-lg shadow-sm">
            <div className="text-center mb-4 sm:mb-6">
              <h2 className="text-xl sm:text-2xl font-bold mb-2">{t('aboutUsPage.newsletter.title')}</h2>
              <p className="opacity-90 max-w-md mx-auto text-sm sm:text-base">
                {t('aboutUsPage.newsletter.description')}
              </p>
            </div>
            
            {subscribed ? (
              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg text-center max-w-md mx-auto">
                <p className="font-medium text-sm sm:text-base">{t('aboutUsPage.newsletter.thankYou')}</p>
                <p className="text-xs sm:text-sm opacity-90">{t('aboutUsPage.newsletter.confirmation')}</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="max-w-md mx-auto">
                <div className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder={t('aboutUsPage.newsletter.placeholder')}
                    className="px-4 py-3 rounded-lg flex-grow text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#fecc2f] text-sm sm:text-base"
                    required
                  />
                  <button
                    type="submit"
                    className="bg-[#fecc2f] text-gray-900 font-medium px-6 py-3 rounded-lg hover:bg-[#fecc2f]/90 transition-colors text-sm sm:text-base"
                  >
                    {t('aboutUsPage.newsletter.button')}
                  </button>
                </div>
                <p className="text-[10px] sm:text-xs mt-2 sm:mt-3 opacity-80 text-center">
                  {t('aboutUsPage.newsletter.terms')}
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </PageTemplate>
  );
};

export default AboutUsPage;