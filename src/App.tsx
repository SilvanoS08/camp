/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ApartmentTypes } from './components/ApartmentTypes';
import { Amenities } from './components/Amenities';
import { LocationSection } from './components/LocationSection';
import { Differentials } from './components/Differentials';
import { MortgageSimulator } from './components/MortgageSimulator';
import { FaqSection } from './components/FaqSection';
import { CtaBanner } from './components/CtaBanner';
import { Footer } from './components/Footer';
import { FloatingMobileBar } from './components/FloatingMobileBar';
import { PhotoModal } from './components/PhotoModal';

export default function App() {
  const [modalState, setModalState] = useState<{
    isOpen: boolean;
    imageSrc: string;
    title: string;
  }>({
    isOpen: false,
    imageSrc: '',
    title: '',
  });

  const handleOpenPhoto = (src: string, title: string) => {
    setModalState({
      isOpen: true,
      imageSrc: src,
      title,
    });
  };

  const handleClosePhoto = () => {
    setModalState((prev) => ({ ...prev, isOpen: false }));
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF9F6] text-[#1E2522] selection:bg-[#C29B38] selection:text-white">
      {/* Navigation Header */}
      <Header />

      {/* Main Content */}
      <main className="flex-grow">
        <Hero onOpenPhoto={handleOpenPhoto} />
        <ApartmentTypes onOpenPhoto={handleOpenPhoto} />
        <Amenities onOpenPhoto={handleOpenPhoto} />
        <LocationSection />
        <Differentials />
        <MortgageSimulator />
        <FaqSection />
        <CtaBanner />
      </main>

      {/* Footer */}
      <Footer />

      {/* Sticky Mobile Conversion Bar */}
      <FloatingMobileBar />

      {/* Interactive Lightbox Modal */}
      <PhotoModal
        isOpen={modalState.isOpen}
        onClose={handleClosePhoto}
        imageSrc={modalState.imageSrc}
        title={modalState.title}
      />
    </div>
  );
}
