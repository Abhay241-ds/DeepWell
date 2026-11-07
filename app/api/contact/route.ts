import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req: NextRequest) {
    try {
        const {
            name,
            email,
            phone,
            service,
            budget,
            message,
        } = await req.json();

        // Validate required fields
        if (
            typeof name !== "string" ||
            typeof email !== "string" ||
            typeof service !== "string" ||
            typeof message !== "string" ||
            !name.trim() ||
            !email.trim() ||
            !service.trim() ||
            !message.trim()
        ) {
            return NextResponse.json(
                { error: "Please fill all required fields." },
                { status: 400 }
            );
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailRegex.test(email)) {
            return NextResponse.json(
                { error: "Invalid email address." },
                { status: 400 }
            );
        }

        const apiKey = process.env.RESEND_API_KEY;
        const contactEmail = process.env.CONTACT_EMAIL;

        if (!apiKey || !contactEmail) {
            console.error("Missing Resend configuration");

            return NextResponse.json(
                { error: "Email service is not configured." },
                { status: 500 }
            );
        }

        const resend = new Resend(apiKey);

        const details = [
            ["Name", name],
            ["Email", email],
            ["Phone", phone],
            ["Service", service],
            ["Budget", budget],
            ["Message", message],
        ];

        const emailBody = details
            .map(([label, value]) => `${label}: ${String(value ?? "Not provided")}`)
            .join("\n\n");

        const { error } = await resend.emails.send({
            from: "DeepWell Digital <onboarding@resend.dev>",
            to: [contactEmail],
            replyTo: email,
            subject: `New Project Enquiry - ${name}`,
            text: emailBody,
        });

        if (error) {
            console.error("Resend error:", error);

            return NextResponse.json(
                { error: "Failed to send your message." },
                { status: 500 }
            );
        }

        return NextResponse.json(
            {
                success: true,
                message: "Your message has been sent successfully!",
            },
            { status: 200 }
        );
    } catch (error) {
        console.error("Contact API error:", error);

        return NextResponse.json(
            { error: "Something went wrong. Please try again." },
            { status: 500 }
        );
    }
}