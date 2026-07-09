"use client";

import { useEffect, useRef } from "react";

type AppFolioListingProps = {
  propertyGroup: string;
};

export default function AppFolioListing({
  propertyGroup,
}: AppFolioListingProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const existingScript = document.querySelector(
      'script[src="https://vicintas.appfolio.com/javascripts/listing.js"]'
    );

    const loadListing = () => {
      if (!containerRef.current) return;

      containerRef.current.innerHTML = "";

      const appfolio = (window as unknown as {
        Appfolio?: {
          Listing: (options: {
            hostUrl: string;
            propertyGroup: string;
            themeColor: string;
            height: string;
            width: string;
            defaultOrder: string;
          }) => void;
        };
      }).Appfolio;

      if (appfolio?.Listing) {
        appfolio.Listing({
          hostUrl: "vicintas.appfolio.com",
          propertyGroup,
          themeColor: "#676767",
          height: "700px",
          width: "100%",
          defaultOrder: "date_posted",
        });
      }
    };

    if (existingScript) {
      loadListing();
      return;
    }

    const script = document.createElement("script");
    script.src = "https://vicintas.appfolio.com/javascripts/listing.js";
    script.async = true;
    script.onload = loadListing;

    document.body.appendChild(script);
  }, [propertyGroup]);

  return (
    <div
      ref={containerRef}
      className="w-full overflow-hidden border border-ink/10 bg-white"
    />
  );
}