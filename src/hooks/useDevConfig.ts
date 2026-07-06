import { useState, useEffect } from "react";
import { siteConfig } from "../config/site";

export interface DevConfig {
  name: string;
  contact: {
    phone: string;
    whatsapp: string;
  };
  website: {
    portfolio: string;
  };
  community: {
    name: string;
    website: string;
    discord: string;
  };
}

const defaultDevConfig: DevConfig = {
  name: siteConfig.developer.name,
  contact: {
    phone: siteConfig.developer.whatsapp,
    whatsapp: siteConfig.developer.whatsapp
  },
  website: {
    portfolio: `https://wa.me/${siteConfig.developer.whatsapp}?text=Halo%20RAN%20DEV,%20saya%20tertarik%20untuk%20membuat%20website%20komunitas%20seperti%20Heavy%20Craft`
  },
  community: {
    name: "RAN DEV Community",
    website: `https://wa.me/${siteConfig.developer.whatsapp}`,
    discord: "https://discord.gg/"
  }
};

export function useDevConfig() {
  const [config, setConfig] = useState<DevConfig>(defaultDevConfig);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;
    fetch("https://raw.githubusercontent.com/mcpeserver/MyAPI/main/config.json")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch dev config");
        }
        return res.json();
      })
      .then((data) => {
        if (isMounted && data) {
          setConfig({
            name: data.name || defaultDevConfig.name,
            contact: {
              phone: data.contact?.phone || defaultDevConfig.contact.phone,
              whatsapp: data.contact?.whatsapp || defaultDevConfig.contact.whatsapp
            },
            website: {
              portfolio: data.website?.portfolio || defaultDevConfig.website.portfolio
            },
            community: {
              name: data.community?.name || defaultDevConfig.community.name,
              website: data.community?.website || defaultDevConfig.community.website,
              discord: data.community?.discord || defaultDevConfig.community.discord
            }
          });
          setLoading(false);
        }
      })
      .catch((err) => {
        console.error("Error fetching developer config API, using local fallbacks:", err);
        if (isMounted) {
          setLoading(false);
        }
      });

    return () => {
      isMounted = false;
    };
  }, []);

  return { config, loading };
}
