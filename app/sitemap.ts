import type { MetadataRoute } from "next";
import { services } from "@/components/services/servicesData";

const BASE_URL = "https://deepwelldigital.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
    // Static Website Pages
    const staticPages: MetadataRoute.Sitemap = [
        {
            url: BASE_URL,
            changeFrequency: "weekly",
            priority: 1,
        },
        {
            url: `${BASE_URL}/about`,
            changeFrequency: "monthly",
            priority: 0.8,
        },
        {
            url: `${BASE_URL}/services`,
            changeFrequency: "weekly",
            priority: 0.9,
        },
        {
            url: `${BASE_URL}/projects`,
            changeFrequency: "weekly",
            priority: 0.8,
        },
        {
            url: `${BASE_URL}/contact`,
            changeFrequency: "monthly",
            priority: 0.7,
        },
    ];

    // Dynamic Service Pages
    const servicePages: MetadataRoute.Sitemap = services
        .filter((service) => service.slug?.trim())
        .map((service) => ({
            url: `${BASE_URL}/services/${service.slug}`,
            changeFrequency: "monthly",
            priority: 0.8,
        }));

    // Remove Duplicate URLs
    const uniquePages = new Map(
        [...staticPages, ...servicePages].map((page) => [
            page.url,
            page,
        ])
    );

    return Array.from(uniquePages.values());
}