import React from 'react';
import { useIntl } from '../../store';
import { LanguageOptions } from '../../constants';

const HomePage = (): React.ReactElement => {
  const { currentLanguage, setCurrentLanguage, translations } = useIntl();

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navbar */}
      <nav className="bg-white shadow-md p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-xl font-bold text-gray-800">
            {translations.common.welcome}
          </h1>

          {/* Language Switcher Dropdown */}
          <div className="relative">
            <select
              value={currentLanguage}
              onChange={(e) =>
                setCurrentLanguage(e.target.value as LanguageOptions)
              }
              className="p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value={LanguageOptions.EnGb}>🇬🇧 English</option>
              <option value={LanguageOptions.GuIn}>🇮🇳 ગુજરાતી</option>
              <option value={LanguageOptions.HiIn}>🇮🇳 हिंदी</option>
            </select>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="container mx-auto text-center mt-10">
        <h2 className="text-3xl font-semibold text-gray-800">
          {translations.common.hello}
        </h2>
      </div>
    </div>
  );
};

export default HomePage;
