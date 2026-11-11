import type { MetadataRoute } from "next";
import { services } from "@/components/services/servicesData";

const BASE_URL = "https://deepwelldigital.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
    const lastModified = new Date();

    // Static Website Pages
    const staticPages: MetadataRoute.Sitemap = [
        {
            url: BASE_URL,
            lastModified,
            changeFrequency: "weekly",
            priority: 1,
        },
        {
            url: `${BASE_URL}/about`,
            lastModified,
            changeFrequency: "monthly",
            priority: 0.8,
        },
        {
            url: `${BASE_URL}/services`,
            lastModified,
            changeFrequency: "weekly",
            priority: 0.9,
        },
        {
            url: `${BASE_URL}/projects`,
            lastModified,
            changeFrequency: "weekly",
            priority: 0.8,
        },
        {
            url: `${BASE_URL}/contact`,
            lastModified,
            changeFrequency: "monthly",
            priority: 0.7,
        },
    ];

    // Dynamic Service Pages
    const servicePages: MetadataRoute.Sitemap = services
        .filter((service) => service.slug)
        .map((service) => ({
            url: `${BASE_URL}/services/${service.slug}`,
            lastModified,
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