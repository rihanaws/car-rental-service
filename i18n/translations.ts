// Central bilingual dictionary. Every user-visible string in the app must
// live here. `Translations` is the shared shape both `en` and `bn` are
// statically checked against, so a missing key in either language is a
// TypeScript error.

export interface Translations {
  nav: {
    home: string;
    fleet: string;
    services: string;
    pricing: string;
    about: string;
    contact: string;
    bookNow: string;
    menu: string;
    closeMenu: string;
    primaryNavLabel: string;
    languageSelectorLabel: string;
    languageNameBangla: string;
    languageNameEnglish: string;
  };
  footer: {
    tagline: string;
    quickLinks: string;
    contactUs: string;
    address: string;
    phone: string;
    whatsapp: string;
    email: string;
    hours: string;
    hoursValue: string;
    rightsReserved: string;
  };
  common: {
    bookYourCar: string;
    viewDetails: string;
    getQuote: string;
    bookNow: string;
    learnMore: string;
    requestThisCar: string;
    from: string;
    perDay: string;
    perHour: string;
    perTrip: string;
    currency: string;
    loading: string;
    submitting: string;
    error: string;
    success: string;
    tryAgain: string;
    required: string;
    seats: string;
    transmission: string;
    automatic: string;
    manual: string;
    acAvailable: string;
    noAc: string;
    acLabel: string;
    phoneExamplePlaceholder: string;
    next: string;
    back: string;
    continue: string;
    submit: string;
    edit: string;
    close: string;
    yes: string;
    no: string;
    optional: string;
    networkError: string;
    validationError: string;
    tripTypeHourly: string;
    tripTypeDaily: string;
    tripTypeOneWay: string;
    tripTypeRoundTrip: string;
    categorySedan: string;
    categorySuv: string;
    categoryMicrobus: string;
    categoryLuxury: string;
  };
  home: {
    metaTitle: string;
    metaDescription: string;
    heroTitle: string;
    heroSubtitle: string;
    heroCta: string;
    heroImageAlt: string;
    quickBookingTitle: string;
    pickupArea: string;
    pickupAreaPlaceholder: string;
    dropoffArea: string;
    dropoffAreaPlaceholder: string;
    pickupDate: string;
    pickupTime: string;
    returnDate: string;
    returnTime: string;
    tripType: string;
    findVehicles: string;
    servicesTitle: string;
    servicesSubtitle: string;
    trustTitle: string;
    trustSafety: string;
    trustSafetyDesc: string;
    trustDrivers: string;
    trustDriversDesc: string;
    trustPricing: string;
    trustPricingDesc: string;
    trustSupport: string;
    trustSupportDesc: string;
  };
  fleet: {
    metaTitle: string;
    metaDescription: string;
    pageTitle: string;
    pageSubtitle: string;
    filterCategory: string;
    filterTripType: string;
    filterPriceBand: string;
    allCategories: string;
    allTripTypes: string;
    allPriceBands: string;
    priceBandLow: string;
    priceBandMid: string;
    priceBandHigh: string;
    noResults: string;
    resultsCount: string;
  };
  services: {
    metaTitle: string;
    metaDescription: string;
    pageTitle: string;
    pageSubtitle: string;
    startingAt: string;
    inclusionsTitle: string;
    exclusionsTitle: string;
    airportTransferName: string;
    airportTransferDesc: string;
    cityRideName: string;
    cityRideDesc: string;
    outstationTripName: string;
    outstationTripDesc: string;
    weddingCarName: string;
    weddingCarDesc: string;
    corporatePackageName: string;
    corporatePackageDesc: string;
  };
  pricing: {
    metaTitle: string;
    metaDescription: string;
    pageTitle: string;
    pageSubtitle: string;
    tableCategory: string;
    tableSeats: string;
    tableStartingRate: string;
    tableUnit: string;
    policiesTitle: string;
    fuelPolicyTitle: string;
    fuelPolicyDesc: string;
    overtimeTitle: string;
    overtimeDesc: string;
    driverAllowanceTitle: string;
    driverAllowanceDesc: string;
    cancellationTitle: string;
    cancellationDesc: string;
  };
  booking: {
    metaTitle: string;
    metaDescription: string;
    pageTitle: string;
    pageSubtitle: string;
    stepTripDetails: string;
    stepVehicle: string;
    stepCustomer: string;
    stepConfirmation: string;
    tripDetailsTitle: string;
    vehicleSelectTitle: string;
    vehicleSelectSubtitle: string;
    noVehiclesMatch: string;
    customerDetailsTitle: string;
    reviewTitle: string;
    fullName: string;
    phoneNumber: string;
    emailAddress: string;
    companyName: string;
    notes: string;
    notesPlaceholder: string;
    reviewTrip: string;
    reviewVehicle: string;
    reviewCustomer: string;
    confirmAndBook: string;
    confirmationTitle: string;
    confirmationMessage: string;
    bookingIdLabel: string;
    bookingStatusLabel: string;
    bookAnother: string;
    selectedVehicle: string;
    changeVehicle: string;
    validation: {
      pickupAreaRequired: string;
      dropoffAreaRequired: string;
      pickupDateRequired: string;
      pickupTimeRequired: string;
      returnDateRequired: string;
      returnTimeRequired: string;
      returnBeforePickup: string;
      tripTypeRequired: string;
      vehicleRequired: string;
      nameRequired: string;
      phoneRequired: string;
      phoneInvalid: string;
      emailRequired: string;
      emailInvalid: string;
    };
  };
  about: {
    metaTitle: string;
    metaDescription: string;
    pageTitle: string;
    pageSubtitle: string;
    storyTitle: string;
    storyBody: string;
    yearsOperatingLabel: string;
    yearsOperatingValue: string;
    fleetSizeLabel: string;
    fleetSizeValue: string;
    serviceAreasLabel: string;
    serviceAreasValue: string;
    differentiatorsTitle: string;
    diffPunctuality: string;
    diffPunctualityDesc: string;
    diffSafety: string;
    diffSafetyDesc: string;
    diffCorporate: string;
    diffCorporateDesc: string;
  };
  contact: {
    metaTitle: string;
    metaDescription: string;
    pageTitle: string;
    pageSubtitle: string;
    formTitle: string;
    name: string;
    phone: string;
    email: string;
    message: string;
    messagePlaceholder: string;
    sendMessage: string;
    sending: string;
    sendSuccess: string;
    sendError: string;
    officeTitle: string;
    officeAddress: string;
    openingHoursTitle: string;
    openingHoursValue: string;
    callUs: string;
    whatsappUs: string;
    emailUs: string;
  };
}

export const translations: Record<"en" | "bn", Translations> = {
  en: {
    nav: {
      home: "Home",
      fleet: "Fleet",
      services: "Services",
      pricing: "Pricing",
      about: "About",
      contact: "Contact",
      bookNow: "Book Now",
      menu: "Menu",
      closeMenu: "Close menu",
      primaryNavLabel: "Primary",
      languageSelectorLabel: "Language selector",
      languageNameBangla: "বাংলা",
      languageNameEnglish: "EN",
    },
    footer: {
      tagline: "Safe, reliable, on-time car rentals across Dhaka.",
      quickLinks: "Quick Links",
      contactUs: "Contact Us",
      address: "House 14, Road 11, Banani, Dhaka 1213, Bangladesh",
      phone: "+880 1711-234567",
      whatsapp: "WhatsApp Us",
      email: "hello@dhakacarrental.example",
      hours: "Opening Hours",
      hoursValue: "Every day, 24 hours",
      rightsReserved: "All rights reserved.",
    },
    common: {
      bookYourCar: "Book Your Car",
      viewDetails: "View details",
      getQuote: "Get a quote",
      bookNow: "Book now",
      learnMore: "Learn more",
      requestThisCar: "Request this car",
      from: "from",
      perDay: "/day",
      perHour: "/hour",
      perTrip: "/trip",
      currency: "৳",
      loading: "Loading...",
      submitting: "Submitting...",
      error: "Error",
      success: "Success",
      tryAgain: "Try again",
      required: "Required",
      seats: "Seats",
      transmission: "Transmission",
      automatic: "Automatic",
      manual: "Manual",
      acAvailable: "AC available",
      noAc: "No AC",
      acLabel: "AC",
      phoneExamplePlaceholder: "01711234567",
      next: "Next",
      back: "Back",
      continue: "Continue",
      submit: "Submit",
      edit: "Edit",
      close: "Close",
      yes: "Yes",
      no: "No",
      optional: "Optional",
      networkError: "Something went wrong. Please check your connection and try again.",
      validationError: "Please fix the highlighted fields.",
      tripTypeHourly: "Hourly",
      tripTypeDaily: "Daily",
      tripTypeOneWay: "One-Way",
      tripTypeRoundTrip: "Round Trip",
      categorySedan: "Sedan",
      categorySuv: "SUV",
      categoryMicrobus: "Microbus",
      categoryLuxury: "Luxury",
    },
    home: {
      metaTitle: "Dhaka Car Rental — Safe, Reliable Car Hire in Dhaka",
      metaDescription:
        "Book verified drivers and well-maintained cars for airport transfers, city rides, outstation trips, weddings, and corporate travel across Dhaka, Bangladesh.",
      heroTitle: "Safe, reliable car rental across Dhaka — on time, every time",
      heroSubtitle:
        "Verified drivers, transparent pricing, and a well-maintained fleet for airport transfers, city rides, outstation trips, and corporate travel.",
      heroCta: "Book Your Car",
      heroImageAlt: "Illustration of a car on a Dhaka city road at dusk",
      quickBookingTitle: "Quick Booking",
      pickupArea: "Pickup area",
      pickupAreaPlaceholder: "e.g. Gulshan 2",
      dropoffArea: "Drop-off area",
      dropoffAreaPlaceholder: "e.g. Hazrat Shahjalal Airport",
      pickupDate: "Pickup date",
      pickupTime: "Pickup time",
      returnDate: "Return date",
      returnTime: "Return time",
      tripType: "Trip type",
      findVehicles: "Find vehicles",
      servicesTitle: "Our Services",
      servicesSubtitle: "Choose the ride that fits your trip",
      trustTitle: "Why ride with us",
      trustSafety: "Safety first",
      trustSafetyDesc: "Regularly inspected vehicles and defensive-driving trained chauffeurs.",
      trustDrivers: "Verified drivers",
      trustDriversDesc: "Every driver is background-checked and licensed.",
      trustPricing: "Transparent pricing",
      trustPricingDesc: "No hidden fees — see rates upfront before you book.",
      trustSupport: "24/7 support",
      trustSupportDesc: "Our team is reachable around the clock by phone and WhatsApp.",
    },
    fleet: {
      metaTitle: "Our Fleet — Sedans, SUVs, Microbuses & Luxury Cars in Dhaka",
      metaDescription:
        "Browse our full fleet of sedans, SUVs, microbuses, and luxury cars available for rent in Dhaka with transparent daily pricing.",
      pageTitle: "Our Fleet",
      pageSubtitle: "Pick the right vehicle for your trip",
      filterCategory: "Category",
      filterTripType: "Trip type",
      filterPriceBand: "Price band",
      allCategories: "All categories",
      allTripTypes: "All trip types",
      allPriceBands: "All price bands",
      priceBandLow: "Under ৳ 6,000/day",
      priceBandMid: "৳ 6,000 – ৳ 10,000/day",
      priceBandHigh: "Above ৳ 10,000/day",
      noResults: "No vehicles match your filters. Try widening your search.",
      resultsCount: "vehicles found",
    },
    services: {
      metaTitle: "Services — Airport, City, Outstation, Wedding & Corporate Rides",
      metaDescription:
        "Explore our car rental services in Dhaka: airport transfers, city rides, outstation trips, wedding cars, and corporate packages.",
      pageTitle: "Our Services",
      pageSubtitle: "Reliable rides for every occasion",
      startingAt: "Starting at",
      inclusionsTitle: "What's included",
      exclusionsTitle: "What's not included",
      airportTransferName: "Airport Transfer",
      airportTransferDesc:
        "Punctual pickups and drop-offs at Hazrat Shahjalal International Airport with flight tracking.",
      cityRideName: "City Ride",
      cityRideDesc: "Hourly city rides for meetings, errands, and everyday travel around Dhaka.",
      outstationTripName: "Outstation Trip",
      outstationTripDesc: "Comfortable long-distance travel outside Dhaka with an experienced driver.",
      weddingCarName: "Wedding Car",
      weddingCarDesc: "Decorated vehicles and dedicated drivers to make your event day seamless.",
      corporatePackageName: "Corporate Package",
      corporatePackageDesc: "Monthly billing and priority vehicle access for business travel needs.",
    },
    pricing: {
      metaTitle: "Pricing & Policies — Rates, Fuel, Overtime & Cancellation Rules",
      metaDescription:
        "See starting rental rates by vehicle category and our fuel, overtime, driver allowance, and cancellation policies.",
      pageTitle: "Pricing & Policies",
      pageSubtitle: "Clear rates, no surprises",
      tableCategory: "Category",
      tableSeats: "Seats",
      tableStartingRate: "Starting rate",
      tableUnit: "Unit",
      policiesTitle: "Policies",
      fuelPolicyTitle: "Fuel policy",
      fuelPolicyDesc:
        "City ride and hourly packages include fuel within Dhaka metro limits. Outstation trips include fuel for the standard route; detours are charged separately.",
      overtimeTitle: "Overtime charges",
      overtimeDesc:
        "Trips exceeding the booked duration are billed at the applicable hourly rate for the vehicle category, rounded up to the next full hour.",
      driverAllowanceTitle: "Driver allowance",
      driverAllowanceDesc:
        "Outstation and multi-day trips include a daily driver allowance covering meals. Overnight stays outside Dhaka incur an additional accommodation allowance.",
      cancellationTitle: "Cancellation & refunds",
      cancellationDesc:
        "Free cancellation up to 6 hours before pickup. Cancellations within 6 hours or no-shows are subject to a partial charge to cover driver dispatch.",
    },
    booking: {
      metaTitle: "Book a Car — Fast, Simple Reservations in Dhaka",
      metaDescription:
        "Reserve your car in three simple steps: trip details, vehicle selection, and your contact information.",
      pageTitle: "Book Your Car",
      pageSubtitle: "Three quick steps to a confirmed ride",
      stepTripDetails: "Trip Details",
      stepVehicle: "Vehicle",
      stepCustomer: "Your Details",
      stepConfirmation: "Confirmation",
      tripDetailsTitle: "Trip details",
      vehicleSelectTitle: "Choose your vehicle",
      vehicleSelectSubtitle: "Vehicles matching your trip type",
      noVehiclesMatch: "No vehicles match this trip type yet. Try a different trip type.",
      customerDetailsTitle: "Your details",
      reviewTitle: "Review your booking",
      fullName: "Full name",
      phoneNumber: "Phone number",
      emailAddress: "Email address",
      companyName: "Company name",
      notes: "Additional notes",
      notesPlaceholder: "Any special requests or instructions",
      reviewTrip: "Trip",
      reviewVehicle: "Vehicle",
      reviewCustomer: "Contact",
      confirmAndBook: "Confirm & book",
      confirmationTitle: "Booking received",
      confirmationMessage:
        "Thank you! Your booking request has been received. Our team will call you shortly to confirm the details.",
      bookingIdLabel: "Booking ID",
      bookingStatusLabel: "Status",
      bookAnother: "Book another car",
      selectedVehicle: "Selected vehicle",
      changeVehicle: "Change vehicle",
      validation: {
        pickupAreaRequired: "Pickup area is required.",
        dropoffAreaRequired: "Drop-off area is required.",
        pickupDateRequired: "Pickup date is required.",
        pickupTimeRequired: "Pickup time is required.",
        returnDateRequired: "Return date is required for round trips.",
        returnTimeRequired: "Return time is required for round trips.",
        returnBeforePickup: "Return date/time must be after the pickup date/time.",
        tripTypeRequired: "Please select a trip type.",
        vehicleRequired: "Please select a vehicle.",
        nameRequired: "Full name is required.",
        phoneRequired: "Phone number is required.",
        phoneInvalid: "Enter a valid Bangladesh phone number, e.g. 01711234567.",
        emailRequired: "Email address is required.",
        emailInvalid: "Enter a valid email address.",
      },
    },
    about: {
      metaTitle: "About Us — Trusted Car Rental Service in Dhaka Since 2016",
      metaDescription:
        "Learn about our journey, service areas, fleet size, and what makes our car rental service in Dhaka reliable for individuals and corporates.",
      pageTitle: "About Us",
      pageSubtitle: "A trusted name in Dhaka car rentals",
      storyTitle: "Our story",
      storyBody:
        "We started in 2016 with three sedans and a simple promise: show up on time, every time. A decade of Dhaka traffic later, that promise has grown into a fleet serving individual travellers, families, and corporate clients across the city and beyond. Every driver we hire is trained, background-checked, and briefed on defensive driving before they ever pick up a passenger.",
      yearsOperatingLabel: "Years operating",
      yearsOperatingValue: "9+ years",
      fleetSizeLabel: "Fleet size",
      fleetSizeValue: "40+ vehicles",
      serviceAreasLabel: "Service areas",
      serviceAreasValue: "Dhaka Metro, Chattogram Highway, Sylhet, Cox's Bazar routes",
      differentiatorsTitle: "What sets us apart",
      diffPunctuality: "Punctuality",
      diffPunctualityDesc: "Drivers arrive 10 minutes early as standard practice.",
      diffSafety: "Safety",
      diffSafetyDesc: "Routine vehicle inspections and GPS-tracked trips.",
      diffCorporate: "Corporate track record",
      diffCorporateDesc: "Trusted by 30+ businesses in Dhaka for monthly transport contracts.",
    },
    contact: {
      metaTitle: "Contact Us — Reach Our Dhaka Car Rental Team",
      metaDescription:
        "Get in touch with our Dhaka car rental team by phone, WhatsApp, email, or our office in Banani for bookings and enquiries.",
      pageTitle: "Contact Us",
      pageSubtitle: "We're here to help, any time of day",
      formTitle: "Send us a message",
      name: "Name",
      phone: "Phone",
      email: "Email",
      message: "Message",
      messagePlaceholder: "How can we help you?",
      sendMessage: "Send message",
      sending: "Sending...",
      sendSuccess: "Thanks — we've received your message and will reply shortly.",
      sendError: "We couldn't send your message. Please try again or call us directly.",
      officeTitle: "Our office",
      officeAddress: "House 14, Road 11, Banani, Dhaka 1213, Bangladesh",
      openingHoursTitle: "Opening hours",
      openingHoursValue: "Every day, 24 hours",
      callUs: "Call us",
      whatsappUs: "WhatsApp us",
      emailUs: "Email us",
    },
  },
  bn: {
    nav: {
      home: "হোম",
      fleet: "গাড়িবহর",
      services: "সেবাসমূহ",
      pricing: "মূল্য তালিকা",
      about: "আমাদের সম্পর্কে",
      contact: "যোগাযোগ",
      bookNow: "বুক করুন",
      menu: "মেনু",
      closeMenu: "মেনু বন্ধ করুন",
      primaryNavLabel: "প্রধান নেভিগেশন",
      languageSelectorLabel: "ভাষা নির্বাচক",
      languageNameBangla: "বাংলা",
      languageNameEnglish: "EN",
    },
    footer: {
      tagline: "ঢাকা জুড়ে নিরাপদ, নির্ভরযোগ্য ও সময়মতো গাড়ি ভাড়া সেবা।",
      quickLinks: "দ্রুত লিংক",
      contactUs: "যোগাযোগ করুন",
      address: "বাড়ি ১৪, রোড ১১, বনানী, ঢাকা ১২১৩, বাংলাদেশ",
      phone: "+৮৮০ ১৭১১-২৩৪৫৬৭",
      whatsapp: "হোয়াটসঅ্যাপ করুন",
      email: "hello@dhakacarrental.example",
      hours: "খোলার সময়",
      hoursValue: "প্রতিদিন, ২৪ ঘণ্টা",
      rightsReserved: "সর্বস্বত্ব সংরক্ষিত।",
    },
    common: {
      bookYourCar: "আপনার গাড়ি বুক করুন",
      viewDetails: "বিস্তারিত দেখুন",
      getQuote: "মূল্য জানুন",
      bookNow: "এখনই বুক করুন",
      learnMore: "আরও জানুন",
      requestThisCar: "এই গাড়িটি অনুরোধ করুন",
      from: "শুরু",
      perDay: "/দিন",
      perHour: "/ঘণ্টা",
      perTrip: "/ট্রিপ",
      currency: "৳",
      loading: "লোড হচ্ছে...",
      submitting: "জমা দেওয়া হচ্ছে...",
      error: "ত্রুটি",
      success: "সফল",
      tryAgain: "আবার চেষ্টা করুন",
      required: "আবশ্যক",
      seats: "আসন সংখ্যা",
      transmission: "গিয়ার ধরন",
      automatic: "অটোমেটিক",
      manual: "ম্যানুয়াল",
      acAvailable: "এসি আছে",
      noAc: "এসি নেই",
      acLabel: "এসি",
      phoneExamplePlaceholder: "০১৭১১২৩৪৫৬৭",
      next: "পরবর্তী",
      back: "পূর্ববর্তী",
      continue: "চালিয়ে যান",
      submit: "জমা দিন",
      edit: "সম্পাদনা করুন",
      close: "বন্ধ করুন",
      yes: "হ্যাঁ",
      no: "না",
      optional: "ঐচ্ছিক",
      networkError: "কিছু একটা সমস্যা হয়েছে। আপনার সংযোগ পরীক্ষা করে আবার চেষ্টা করুন।",
      validationError: "চিহ্নিত ঘরগুলো ঠিক করুন।",
      tripTypeHourly: "ঘণ্টাভিত্তিক",
      tripTypeDaily: "দৈনিক",
      tripTypeOneWay: "এক পথ",
      tripTypeRoundTrip: "রাউন্ড ট্রিপ",
      categorySedan: "সেডান",
      categorySuv: "এসইউভি",
      categoryMicrobus: "মাইক্রোবাস",
      categoryLuxury: "লাক্সারি",
    },
    home: {
      metaTitle: "ঢাকা কার রেন্টাল — নিরাপদ, নির্ভরযোগ্য গাড়ি ভাড়া সেবা",
      metaDescription:
        "ঢাকায় বিমানবন্দর ট্রান্সফার, সিটি রাইড, আউটস্টেশন ট্রিপ, বিবাহ এবং কর্পোরেট ভ্রমণের জন্য যাচাইকৃত চালক ও মানসম্পন্ন গাড়ি বুক করুন।",
      heroTitle: "ঢাকা জুড়ে নিরাপদ, নির্ভরযোগ্য গাড়ি ভাড়া — সবসময় সময়মতো",
      heroSubtitle:
        "যাচাইকৃত চালক, স্বচ্ছ মূল্য এবং সুসংরক্ষিত গাড়িবহর — বিমানবন্দর ট্রান্সফার, সিটি রাইড, আউটস্টেশন ট্রিপ এবং কর্পোরেট ভ্রমণের জন্য।",
      heroCta: "আপনার গাড়ি বুক করুন",
      heroImageAlt: "সন্ধ্যায় ঢাকার রাস্তায় একটি গাড়ির চিত্র",
      quickBookingTitle: "দ্রুত বুকিং",
      pickupArea: "পিকআপ এলাকা",
      pickupAreaPlaceholder: "যেমন: গুলশান ২",
      dropoffArea: "গন্তব্য এলাকা",
      dropoffAreaPlaceholder: "যেমন: হযরত শাহজালাল বিমানবন্দর",
      pickupDate: "পিকআপ তারিখ",
      pickupTime: "পিকআপ সময়",
      returnDate: "ফেরার তারিখ",
      returnTime: "ফেরার সময়",
      tripType: "ট্রিপের ধরন",
      findVehicles: "গাড়ি খুঁজুন",
      servicesTitle: "আমাদের সেবাসমূহ",
      servicesSubtitle: "আপনার ট্রিপের জন্য উপযুক্ত রাইড বেছে নিন",
      trustTitle: "কেন আমাদের সাথে ভ্রমণ করবেন",
      trustSafety: "নিরাপত্তা প্রথমে",
      trustSafetyDesc: "নিয়মিত পরীক্ষিত গাড়ি এবং প্রশিক্ষিত চালক।",
      trustDrivers: "যাচাইকৃত চালক",
      trustDriversDesc: "প্রতিটি চালক পটভূমি যাচাই ও লাইসেন্সপ্রাপ্ত।",
      trustPricing: "স্বচ্ছ মূল্য",
      trustPricingDesc: "কোনো লুকানো খরচ নেই — বুকিংয়ের আগেই মূল্য দেখুন।",
      trustSupport: "২৪/৭ সহায়তা",
      trustSupportDesc: "আমাদের দল ফোন ও হোয়াটসঅ্যাপে সার্বক্ষণিক প্রস্তুত।",
    },
    fleet: {
      metaTitle: "আমাদের গাড়িবহর — সেডান, এসইউভি, মাইক্রোবাস ও লাক্সারি গাড়ি",
      metaDescription:
        "ঢাকায় ভাড়ার জন্য উপলব্ধ সেডান, এসইউভি, মাইক্রোবাস ও লাক্সারি গাড়ির সম্পূর্ণ তালিকা দেখুন, স্বচ্ছ দৈনিক মূল্যসহ।",
      pageTitle: "আমাদের গাড়িবহর",
      pageSubtitle: "আপনার ট্রিপের জন্য সঠিক গাড়ি বেছে নিন",
      filterCategory: "ক্যাটাগরি",
      filterTripType: "ট্রিপের ধরন",
      filterPriceBand: "মূল্য পরিসীমা",
      allCategories: "সব ক্যাটাগরি",
      allTripTypes: "সব ধরনের ট্রিপ",
      allPriceBands: "সব মূল্য পরিসীমা",
      priceBandLow: "৳ ৬,০০০/দিনের কম",
      priceBandMid: "৳ ৬,০০০ – ৳ ১০,০০০/দিন",
      priceBandHigh: "৳ ১০,০০০/দিনের বেশি",
      noResults: "আপনার ফিল্টারে কোনো গাড়ি মিলেনি। অনুসন্ধান বিস্তৃত করুন।",
      resultsCount: "টি গাড়ি পাওয়া গেছে",
    },
    services: {
      metaTitle: "সেবাসমূহ — বিমানবন্দর, সিটি, আউটস্টেশন, বিবাহ ও কর্পোরেট রাইড",
      metaDescription:
        "ঢাকায় আমাদের গাড়ি ভাড়া সেবাসমূহ দেখুন: বিমানবন্দর ট্রান্সফার, সিটি রাইড, আউটস্টেশন ট্রিপ, বিবাহের গাড়ি এবং কর্পোরেট প্যাকেজ।",
      pageTitle: "আমাদের সেবাসমূহ",
      pageSubtitle: "প্রতিটি উপলক্ষের জন্য নির্ভরযোগ্য রাইড",
      startingAt: "শুরু",
      inclusionsTitle: "যা অন্তর্ভুক্ত",
      exclusionsTitle: "যা অন্তর্ভুক্ত নয়",
      airportTransferName: "বিমানবন্দর ট্রান্সফার",
      airportTransferDesc:
        "ফ্লাইট ট্র্যাকিংসহ হযরত শাহজালাল আন্তর্জাতিক বিমানবন্দরে সময়মতো পিকআপ ও ড্রপ-অফ।",
      cityRideName: "সিটি রাইড",
      cityRideDesc: "মিটিং, কাজকর্ম এবং দৈনন্দিন ভ্রমণের জন্য ঢাকার মধ্যে ঘণ্টাভিত্তিক রাইড।",
      outstationTripName: "আউটস্টেশন ট্রিপ",
      outstationTripDesc: "অভিজ্ঞ চালকসহ ঢাকার বাইরে আরামদায়ক দীর্ঘ পথের ভ্রমণ।",
      weddingCarName: "বিবাহের গাড়ি",
      weddingCarDesc: "সজ্জিত গাড়ি ও নিবেদিত চালক আপনার অনুষ্ঠানকে করে তোলে ঝামেলাহীন।",
      corporatePackageName: "কর্পোরেট প্যাকেজ",
      corporatePackageDesc: "ব্যবসায়িক ভ্রমণের জন্য মাসিক বিলিং ও অগ্রাধিকার গাড়ি সুবিধা।",
    },
    pricing: {
      metaTitle: "মূল্য ও নীতিমালা — রেট, জ্বালানি, ওভারটাইম ও বাতিল নিয়ম",
      metaDescription:
        "গাড়ির ক্যাটাগরি অনুযায়ী শুরুর ভাড়া এবং আমাদের জ্বালানি, ওভারটাইম, ড্রাইভার ভাতা ও বাতিল নীতিমালা দেখুন।",
      pageTitle: "মূল্য ও নীতিমালা",
      pageSubtitle: "স্পষ্ট মূল্য, কোনো চমক নেই",
      tableCategory: "ক্যাটাগরি",
      tableSeats: "আসন",
      tableStartingRate: "শুরুর মূল্য",
      tableUnit: "একক",
      policiesTitle: "নীতিমালা",
      fuelPolicyTitle: "জ্বালানি নীতি",
      fuelPolicyDesc:
        "সিটি রাইড ও ঘণ্টাভিত্তিক প্যাকেজে ঢাকা মেট্রো সীমার মধ্যে জ্বালানি অন্তর্ভুক্ত। আউটস্টেশন ট্রিপে নির্ধারিত রুটের জ্বালানি অন্তর্ভুক্ত; বাড়তি পথের জন্য আলাদা চার্জ প্রযোজ্য।",
      overtimeTitle: "ওভারটাইম চার্জ",
      overtimeDesc:
        "বুক করা সময়ের বেশি ট্রিপের ক্ষেত্রে গাড়ির ক্যাটাগরি অনুযায়ী প্রযোজ্য ঘণ্টাভিত্তিক হারে বিল করা হয়, পরবর্তী পূর্ণ ঘণ্টায় রাউন্ড করে।",
      driverAllowanceTitle: "ড্রাইভার ভাতা",
      driverAllowanceDesc:
        "আউটস্টেশন ও বহুদিনের ট্রিপে খাবারের জন্য দৈনিক ড্রাইভার ভাতা অন্তর্ভুক্ত। ঢাকার বাইরে রাত্রিযাপনের ক্ষেত্রে অতিরিক্ত থাকার ভাতা প্রযোজ্য।",
      cancellationTitle: "বাতিল ও ফেরত",
      cancellationDesc:
        "পিকআপের ৬ ঘণ্টা আগ পর্যন্ত বিনামূল্যে বাতিল করা যাবে। ৬ ঘণ্টার মধ্যে বাতিল বা উপস্থিত না হলে চালক পাঠানোর খরচ বাবদ আংশিক চার্জ প্রযোজ্য।",
    },
    booking: {
      metaTitle: "গাড়ি বুক করুন — ঢাকায় দ্রুত ও সহজ বুকিং",
      metaDescription:
        "তিনটি সহজ ধাপে আপনার গাড়ি রিজার্ভ করুন: ট্রিপের বিবরণ, গাড়ি নির্বাচন এবং আপনার যোগাযোগের তথ্য।",
      pageTitle: "আপনার গাড়ি বুক করুন",
      pageSubtitle: "নিশ্চিত রাইডের জন্য তিনটি দ্রুত ধাপ",
      stepTripDetails: "ট্রিপের বিবরণ",
      stepVehicle: "গাড়ি",
      stepCustomer: "আপনার তথ্য",
      stepConfirmation: "নিশ্চিতকরণ",
      tripDetailsTitle: "ট্রিপের বিবরণ",
      vehicleSelectTitle: "আপনার গাড়ি বেছে নিন",
      vehicleSelectSubtitle: "আপনার ট্রিপের ধরনের সাথে মিলে যাওয়া গাড়ি",
      noVehiclesMatch: "এই ট্রিপের ধরনে কোনো গাড়ি মিলেনি। ভিন্ন ট্রিপের ধরন চেষ্টা করুন।",
      customerDetailsTitle: "আপনার তথ্য",
      reviewTitle: "আপনার বুকিং পর্যালোচনা করুন",
      fullName: "পূর্ণ নাম",
      phoneNumber: "ফোন নম্বর",
      emailAddress: "ইমেইল ঠিকানা",
      companyName: "প্রতিষ্ঠানের নাম",
      notes: "অতিরিক্ত নোট",
      notesPlaceholder: "কোনো বিশেষ অনুরোধ বা নির্দেশনা",
      reviewTrip: "ট্রিপ",
      reviewVehicle: "গাড়ি",
      reviewCustomer: "যোগাযোগ",
      confirmAndBook: "নিশ্চিত করুন ও বুক করুন",
      confirmationTitle: "বুকিং গৃহীত হয়েছে",
      confirmationMessage:
        "ধন্যবাদ! আপনার বুকিং অনুরোধ গৃহীত হয়েছে। আমাদের দল শীঘ্রই বিস্তারিত নিশ্চিত করতে আপনাকে কল করবে।",
      bookingIdLabel: "বুকিং আইডি",
      bookingStatusLabel: "অবস্থা",
      bookAnother: "আরেকটি গাড়ি বুক করুন",
      selectedVehicle: "নির্বাচিত গাড়ি",
      changeVehicle: "গাড়ি পরিবর্তন করুন",
      validation: {
        pickupAreaRequired: "পিকআপ এলাকা আবশ্যক।",
        dropoffAreaRequired: "গন্তব্য এলাকা আবশ্যক।",
        pickupDateRequired: "পিকআপ তারিখ আবশ্যক।",
        pickupTimeRequired: "পিকআপ সময় আবশ্যক।",
        returnDateRequired: "রাউন্ড ট্রিপের জন্য ফেরার তারিখ আবশ্যক।",
        returnTimeRequired: "রাউন্ড ট্রিপের জন্য ফেরার সময় আবশ্যক।",
        returnBeforePickup: "ফেরার তারিখ/সময় অবশ্যই পিকআপ তারিখ/সময়ের পরে হতে হবে।",
        tripTypeRequired: "অনুগ্রহ করে একটি ট্রিপের ধরন নির্বাচন করুন।",
        vehicleRequired: "অনুগ্রহ করে একটি গাড়ি নির্বাচন করুন।",
        nameRequired: "পূর্ণ নাম আবশ্যক।",
        phoneRequired: "ফোন নম্বর আবশ্যক।",
        phoneInvalid: "একটি সঠিক বাংলাদেশি ফোন নম্বর দিন, যেমন: ০১৭১১২৩৪৫৬৭।",
        emailRequired: "ইমেইল ঠিকানা আবশ্যক।",
        emailInvalid: "একটি সঠিক ইমেইল ঠিকানা দিন।",
      },
    },
    about: {
      metaTitle: "আমাদের সম্পর্কে — ২০১৬ সাল থেকে ঢাকায় বিশ্বস্ত গাড়ি ভাড়া সেবা",
      metaDescription:
        "আমাদের যাত্রা, সেবা এলাকা, গাড়িবহরের আকার এবং ঢাকায় আমাদের গাড়ি ভাড়া সেবাকে নির্ভরযোগ্য করে তোলার বিষয়ে জানুন।",
      pageTitle: "আমাদের সম্পর্কে",
      pageSubtitle: "ঢাকার গাড়ি ভাড়ায় একটি বিশ্বস্ত নাম",
      storyTitle: "আমাদের গল্প",
      storyBody:
        "২০১৬ সালে আমরা তিনটি সেডান এবং একটি সহজ প্রতিশ্রুতি নিয়ে শুরু করেছিলাম: সবসময় সময়মতো উপস্থিত থাকা। ঢাকার ট্রাফিকের এক দশক পর, সেই প্রতিশ্রুতি এখন শহর জুড়ে ও তার বাইরে ব্যক্তিগত যাত্রী, পরিবার এবং কর্পোরেট গ্রাহকদের সেবা দেওয়া একটি গাড়িবহরে পরিণত হয়েছে। আমরা যে প্রতিটি চালক নিয়োগ দিই তাদের প্রশিক্ষণ, পটভূমি যাচাই এবং প্রতিরক্ষামূলক ড্রাইভিং সম্পর্কে ব্রিফ করা হয়।",
      yearsOperatingLabel: "পরিচালনার বছর",
      yearsOperatingValue: "৯+ বছর",
      fleetSizeLabel: "গাড়িবহরের আকার",
      fleetSizeValue: "৪০+ গাড়ি",
      serviceAreasLabel: "সেবা এলাকা",
      serviceAreasValue: "ঢাকা মেট্রো, চট্টগ্রাম হাইওয়ে, সিলেট, কক্সবাজার রুট",
      differentiatorsTitle: "আমাদের বিশেষত্ব",
      diffPunctuality: "সময়ানুবর্তিতা",
      diffPunctualityDesc: "চালকরা মান হিসেবে ১০ মিনিট আগে পৌঁছান।",
      diffSafety: "নিরাপত্তা",
      diffSafetyDesc: "নিয়মিত গাড়ি পরিদর্শন এবং জিপিএস-ট্র্যাক করা ট্রিপ।",
      diffCorporate: "কর্পোরেট অভিজ্ঞতা",
      diffCorporateDesc: "ঢাকায় ৩০+ ব্যবসা প্রতিষ্ঠানের মাসিক পরিবহন চুক্তির বিশ্বস্ত অংশীদার।",
    },
    contact: {
      metaTitle: "যোগাযোগ করুন — আমাদের ঢাকা কার রেন্টাল দলের সাথে",
      metaDescription:
        "বুকিং ও জিজ্ঞাসার জন্য ফোন, হোয়াটসঅ্যাপ, ইমেইল অথবা বনানীর আমাদের অফিসের মাধ্যমে আমাদের ঢাকা কার রেন্টাল দলের সাথে যোগাযোগ করুন।",
      pageTitle: "যোগাযোগ করুন",
      pageSubtitle: "দিনের যেকোনো সময় আমরা সাহায্য করতে প্রস্তুত",
      formTitle: "আমাদের একটি বার্তা পাঠান",
      name: "নাম",
      phone: "ফোন",
      email: "ইমেইল",
      message: "বার্তা",
      messagePlaceholder: "আমরা কীভাবে সাহায্য করতে পারি?",
      sendMessage: "বার্তা পাঠান",
      sending: "পাঠানো হচ্ছে...",
      sendSuccess: "ধন্যবাদ — আমরা আপনার বার্তা পেয়েছি এবং শীঘ্রই উত্তর দেব।",
      sendError: "আমরা আপনার বার্তা পাঠাতে পারিনি। আবার চেষ্টা করুন অথবা সরাসরি আমাদের কল করুন।",
      officeTitle: "আমাদের অফিস",
      officeAddress: "বাড়ি ১৪, রোড ১১, বনানী, ঢাকা ১২১৩, বাংলাদেশ",
      openingHoursTitle: "খোলার সময়",
      openingHoursValue: "প্রতিদিন, ২৪ ঘণ্টা",
      callUs: "আমাদের কল করুন",
      whatsappUs: "হোয়াটসঅ্যাপ করুন",
      emailUs: "ইমেইল করুন",
    },
  },
};
